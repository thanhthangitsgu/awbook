<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('import_details', function (Blueprint $table) {
            $table->integer('import_id')->unsigned();
            $table->integer('book_id')->unsigned();    
            $table->integer('amount');
            $table->integer('price');
            $table->integer('status')->default('1');
            $table->timestamps();
            $table->primary(['import_id','book_id']);
            $table->foreign('import_id')->references('id')->on('imports')->onDelete('cascade');
            $table->foreign('book_id')->references('id')->on('books')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('import_details');
    }
};