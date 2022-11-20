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
        Schema::create('category_books', function (Blueprint $table) {
            $table->integer('book_id')->unsigned();
            $table->integer('cate_id')->unsigned();
            $table->integer('status')->default('1');
            $table->timestamps();
            $table->primary(['book_id','cate_id']);
            $table->foreign('book_id')->references('id')->on('book_titles')->onDelete('cascade');
            $table->foreign('cate_id')->references('id')->on('categories')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('category_books');
    }
};