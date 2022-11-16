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
        Schema::create('book_categorys', function (Blueprint $table) {
            $table->integer('book_id')->unsigned();
            $table->integer('cate_id')->unsigned();
            $table->integer('status');
            $table->timestamps();
            $table->primary(['book_id','cate_id']);
            $table->foreign('book_id')->references('id')->on('book_titles')->onDelete('cascade');
            $table->foreign('cate_id')->references('id')->on('categorys')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('book_categorys');
    }
};