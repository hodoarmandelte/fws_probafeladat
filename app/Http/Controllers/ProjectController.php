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
     * Kategóriára szűrt eredmények JSONban az aszinkron szűréshez.
     *
     * @param  int $filter
     * @return \Illuminate\Http\Response
     */
    public function index_filtered_json($filter)
    {
        $statetypes = ['0','1','2'];
        if ( !in_array($filter, $statetypes))
        {
            return '0';
        }
        else
        {
            $projects = Project::where('state','=',$filter)->get();
            $projects_count = $projects->count();
            $projects_to_show = 10;
            if ($projects_count<10)
            {
                $projects_to_show = $projects_count;
            }
            return $projects->toJson();
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
        //
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
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function edit(Project $project)
    {
        //
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
        //
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
