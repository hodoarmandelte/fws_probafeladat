<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;
use App\Models\Projectcontact;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Redirect;
use App\Http\Requests\StoreContactRequest;
use App\Http\Requests\UpdateContactRequest;

class ContactController extends Controller
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
            return view('contacts/create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreContactRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreContactRequest $request)
    {
        $contact = new Contact;
        $validated = $request->validate([
            'name' => 'required|string|unique:contacts,name|max:35',
            'email' => 'required|email|max:128',
            'project_id' => 'numeric'
        ]);
        $contact->fill($validated)->save();

        if ($validated['project_id'] != '-1')       //  nem a create view-ból
        {
            $linktoprojectrequest = new Request;
            $linktoprojectrequest->setMethod('POST');
            $linktoprojectrequest->request->add(['project_id' => $validated['project_id']]);
            $linktoprojectrequest->request->add(['contact_id' => $contact->id]);
            ProjectcontactController::store($linktoprojectrequest);
        }
        session()->flash('contact_saved');
        return Redirect::back();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Contact  $contact
     * @return \Illuminate\Http\Response
     */
    public function show(Contact $contact)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Contact  $contact
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $contact = Contact::findOrFail($id);
        return view('contacts/edit')->with(compact('contact'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateContactRequest  $request
     * @param  \App\Models\Contact  $contact
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateContactRequest $request, Contact $contact)
    {
        $request->validate([
            'name' => 'required|string|unique:contacts,name,'.$contact->id.'|max:35',
            'email' => 'required|email|max:128',
        ]);
        $contact->update($request->all());
        session()->flash('contact_updated');
        return Redirect::back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Contact  $contact
     * @return \Illuminate\Http\Response
     */
    public function destroy(Contact $contact)
    {
        $contact = Contact::find($contact->id);
        $contact->delete();
        $projcontacts = Projectcontact::where('contact_id','=',$contact->id);
        $projcontacts->delete();
        error_log('--cont-del--'.$contact->id.' kontakt sikeresen törölve.');
        Log::info('--cont-del--'.$contact->id.' kontakt sikeresen törölve.');

        return response()->json(array('success' => true, 'contact_del_result'=>'ok'));
    }
}
