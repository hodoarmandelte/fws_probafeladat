<?php

use App\Models\Project;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Redirect;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\ProjectcontactController;
use App\Mail\ProjectChanged;
use Illuminate\Support\Facades\Mail;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Redirect::route('projects.index');
});

Route::get('/projects_filtered/{filter}', [ProjectController::class, 'index_filtered'])->name('index_filtered');

Route::resource('projects', ProjectController::class);

Route::resource('contacts', ContactController::class);

Route::resource('projectcontacts', ProjectcontactController::class);
