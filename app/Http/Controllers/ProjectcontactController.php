<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Projectcontact;
use Illuminate\Support\Facades\Log;

class ProjectcontactController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public static function store(Request $request)
    {
        $projcontact = new Projectcontact();
        $validated = $request->validate([
            'project_id' => 'required|numeric',
            'contact_id' => 'required|numeric',
        ]);
        $projcontact->fill($validated)->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $contact_id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $projcontact = ProjectContact::find($id);
        $projcontact->delete();
        error_log('--proj-cont-del--'.$id.' projekt-kontakt sikeresen törölve.');
        Log::info('--proj-cont-del--'.$id.' projekt-kontakt sikeresen törölve.');

        return response()->json(array('success' => true, 'projectcontact_del_result'=>'ok'));
    }
}
