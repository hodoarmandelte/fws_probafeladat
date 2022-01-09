<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ProjectChanged extends Mailable
{
    use Queueable, SerializesModels;

    public $changeddata;
    public $contact_name;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($data, $contact_name)
    {
        $this->changeddata = $data;
        $this->contact_name = $contact_name;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->markdown('mail.projectchanged')->with('changeddata', $this->changeddata)->with('contact_name', $this->contact_name);
    }
}
