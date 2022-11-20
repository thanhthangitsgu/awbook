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
        Schema::create('books', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('title_id')->unsigned();
            $table->string('pub_id',100)->nullable();
            $table->integer('year')->nullable();
            $table->integer('price');
            $table->integer('amount');
            $table->string('image',100)->nullable();
            $table->text('describe')->nullable();
            $table->integer('promotion_id')->unsigned()->nullable();
            $table->integer('status')->default('1');
            $table->timestamps();
            $table->foreign('title_id')->references('id')->on('book_titles')->onDelete('cascade');
            $table->foreign('pub_id')->references('id_pub')->on('publishers')->onDelete('cascade');
            $table->foreign('promotion_id')->references('id')->on('promotions');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('books');
    }
};