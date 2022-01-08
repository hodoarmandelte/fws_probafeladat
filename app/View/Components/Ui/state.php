<?php

namespace App\View\Components\Ui;

use Illuminate\View\Component;

class state extends Component
{

    public $type;

    public $colors;

    public $text;


    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct($type)
    {
        $this->type = $type;
        if ($type == "0")
        {
            $this->colors = ['text-orange-800','bg-orange-200'];      // text, bg
            $this->text = "Fejlesztésre vár";
        }
        else if ($type == "1")
        {
            $this->colors = ['text-green-900','bg-green-200'];      // text, bg
            $this->text = "Folyamatban";
        }
        else if ($type == "2")
        {
            $this->colors = ['text-sky-900','bg-sky-200'];      // text, bg
            $this->text = "Kész";
        }
        else
        {
            $this->colors = ['white','black'];      // text, bg
            $this->text = "Hiba: Ismeretlen munkafázis";
        }

    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('components.ui.state');
    }
}
