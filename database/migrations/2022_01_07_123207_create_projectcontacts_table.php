<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProjectcontactsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (!Schema::hasTable('projectcontacts') && Schema::hasTable('projects') && Schema::hasTable('contacts'))
        {
            Schema::enableForeignKeyConstraints();
            Schema::create('projectcontacts', function (Blueprint $table)
            {
                $table->id();
                $table->unsignedBigInteger('project_id')->unsigned();
                $table->unsignedBigInteger('contact_id')->unsigned();
                $table->foreign('project_id')->references('id')->on('projects')->onDelete('cascade');
                $table->foreign('contact_id')->references('id')->on('contacts')->onDelete('cascade');
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
        Schema::dropIfExists('projectcontacts');
    }
}
