<?php

use App\Models\Project;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Redirect;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\ProjectController;

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

Route::resource('projects', ProjectController::class);

Route::get('/projects_filtered_json/{filter}', [ProjectController::class, 'index_filtered_json']);

Route::resource('contacts', ContactController::class);



