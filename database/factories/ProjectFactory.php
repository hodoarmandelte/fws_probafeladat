<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class ProjectFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $rnddomain = $this->faker->domainName();
        $rndordernumber = $this->faker->numerify('##');
        $rndname = $rnddomain.'#'.$rndordernumber.' Projekt';
        $rnddesc = $rnddomain.' -nak készülő '.$rndordernumber.'. projektmunka.';
        return [
            'name' => $rndname,
            'desc' => $rnddesc,
            'state' => $this->faker->randomElement([0,1,2]),
        ];
    }
}
