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
        Schema::create('bill_details', function (Blueprint $table) {
            $table->integer('bill_id')->unsigned();
            $table->integer('book_id')->unsigned(); 
            $table->integer('amount'); 
            $table->integer('price'); //giá bán
            $table->integer('cost'); //giá gốc
            $table->integer('status')->default('1');
            $table->timestamps();
            $table->primary(['bill_id','book_id']);
            $table->foreign('bill_id')->references('id')->on('bills')->onDelete('cascade');
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
        Schema::dropIfExists('bill_details');
    }
};