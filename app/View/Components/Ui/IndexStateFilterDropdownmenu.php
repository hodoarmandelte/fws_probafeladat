<?php

namespace App\View\Components\Ui;

use Illuminate\View\Component;

class IndexStateFilterDropdownmenu extends Component
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
            $this->colors = ['text-orange-800','bg-orange-200', 'hover:bg-gray-200 border-2 border-solid border-gray-600'];      // text, bg, hovereffekt
            $this->text = "Fejlesztésre vár";
        }
        else if ($type == "1")
        {
            $this->colors = ['text-green-900','bg-green-200', 'hover:bg-gray-200 border-2 border-solid border-gray-600'];      // text, bg, hovereffekt
            $this->text = "Folyamatban";
        }
        else if ($type == "2")
        {
            $this->colors = ['text-sky-900','bg-sky-200', 'hover:bg-gray-200 border-2 border-solid border-gray-600'];      // text, bg, hovereffekt
            $this->text = "Kész";
        }
        else if ($type == "3")
        {
            $this->colors = ['text-slate-900','bg-slate-300', 'hover:bg-slate-200 border-2 border-solid border-gray-600'];      // text, bg, hovereffekt
            $this->text = "Összes";
        }
        else
        {
            $this->colors = ['white','black', 'black'];      // text, bg, hovereffekt
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
        return view('components.ui.index-state-filter-dropdownmenu');
    }
}
