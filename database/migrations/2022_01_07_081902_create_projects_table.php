<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProjectsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (!Schema::hasTable('projects'))
        {
            Schema::create('projects', function (Blueprint $table)
            {
                $table->id();
                $table->string('name')->unique();
                $table->string('desc');
                $table->integer('state');     //  0 = fejlesztésre vár, 1 = folyamatban, 2 = kész
                $table->timestamps();
            });
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('projects');
    }
}
