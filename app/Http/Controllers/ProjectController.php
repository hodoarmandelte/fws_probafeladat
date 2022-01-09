<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Support\Facades\Log;
use App\Http\Requests\StoreProjectRequest;
use App\Http\Requests\UpdateProjectRequest;
use App\Models\Projectcontact;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $projects = Project::paginate(10);
        return view('projects/index')->with(compact('projects'));
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
            return view('projects/index')->with(compact('projects'));
        }
        else
        {
            $projects = Project::where('state','=',$filter)->paginate(10);
            return view('projects/index')->with(compact('projects'));
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
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
        $validated = $request->validate([
            'name' => 'required|string|unique:projects,name,'.$request->id.'|max:35',
            'desc' => 'required|string|max:128',
            'state' => 'required|digits_between:0,2',
        ]);

        $project->fill($validated)->update();
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
