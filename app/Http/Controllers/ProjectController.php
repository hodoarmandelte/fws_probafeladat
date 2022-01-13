<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Project;
use App\Mail\ProjectChanged;
use App\Models\Projectcontact;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Redirect;
use App\Http\Requests\StoreProjectRequest;
use App\Http\Requests\UpdateProjectRequest;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // $projects = Project::paginate(10);
        // $filter = 3;
        // return view('projects/index')->with(compact('projects'))->with(compact('filter'));
        return Inertia::render(
            'Projects/Index',
            [
                'users' => Project::query()
                ->when(Request::input('search'), function($query, $search)
                {
                    $query->where('name', 'like',  '%'.$search.'%');        // '%' anything wildcard
                })
                ->paginate(10)
                ->withQueryString()
                ->through(fn($project) =>[
                    'id' => $project->id,
                    'name' => $project->name
                ]),
                'filters' => Request::only(['search'])
            ]
        );
    }

    /**
     * Kategóriára szűrt eredmények
     *
     * @param  int $filter
     * @return \Illuminate\Http\Response
     */
    public function index_filtered($filter)
    {
        $statetypes = ['0','1','2'];
        if ( !in_array($filter, $statetypes))
        {
            $projects = Project::paginate(10);
            return redirect()->route('projects.index');
        }
        else
        {
            $projects = Project::where('state','=',$filter)->paginate(10);
            return view('projects/index')->with(compact('projects'))->with(compact('filter'));
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('projects/create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreProjectRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreProjectRequest $request)
    {
        $project = new Project;
        $validated = $request->validate([
            'name' => 'required|string|unique:projects,name|max:35',
            'desc' => 'required|string|max:128',
            'state' => 'required|digits_between:0,2',
        ]);
        $project->fill($validated)->save();
        session()->flash('project_saved');
        return redirect()->route('projects.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function show(Project $project)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $project = Project::findOrFail($id);
        $contacts = $project->contacts;
        return view('projects/edit')->with(compact('project'))->with(compact('contacts'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateProjectRequest  $request
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateProjectRequest $request, Project $project)
    {
        //dd($project->id);
        $request->validate([
            'name' => 'required|string|unique:projects,name,'.$project->id.'|max:35',
            'desc' => 'required|string|max:128',
            'state' => 'required|digits_between:0,2',
        ]);

        $project->update($request->all());
        if($project->wasChanged())
        {
            $changes = $project->getChanges();
            $maillist = $project->contacts->pluck('email', 'name')->all();
            //  a Factory generált mailok elméletileg safek, de hogy ne legyen egy marék mail spamolva, commented.
            //  Teszteléshez, real emailcímekkel: uncomment
            // foreach ($maillist as $mailadress )
            // {
            //     Mail::to($mailadress->email)->send(new ProjectChanged($changes,$mailadress->name));
            // }
        }
        session()->flash('project_updated');
        return Redirect::back();

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response    -- JSON AJAXNAK
     */
    public function destroy($id)
    {
        $project = Project::find($id);
        $project->delete();
        $projcontacts = Projectcontact::where('project_id','=',$id);
        $projcontacts->delete();
        error_log('--proj-del--'.$id.' projekt sikeresen törölve.');
        Log::info('--proj-del--'.$id.' projekt sikeresen törölve.');

        return response()->json(array('success' => true, 'project_del_result'=>'ok'));
    }
}
