<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Contact extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', 'email'
    ];

    public function projects()
    {
        return $this->belongsToMany(Project::class, 'projectcontacts');
    }

}
