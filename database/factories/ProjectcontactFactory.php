<?php

namespace Database\Factories;

use App\Models\Contact;
use App\Models\Project;
use App\Models\Projectcontact;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProjectcontactFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $project_ids = Project::where('id' ,'>' ,0)->pluck('id')->toArray();
        $contact_ids = Contact::where('id' ,'>' ,0)->pluck('id')->toArray();
        $rndproj_id = array_rand($project_ids,1);
        $rndcont_id = array_rand($contact_ids,1);
        foreach ( Projectcontact::all() as $projcontact)
        {
            while ($projcontact->project_id == $rndproj_id && $projcontact->contact_id == $rndcont_id)
            {
                $rndproj_id = array_rand($project_ids,1);
                $rndcont_id = array_rand($contact_ids,1);
            }
        }
        return [
            'project_id' => $rndproj_id,
            'contact_id' => $rndcont_id,
        ];
    }
}
