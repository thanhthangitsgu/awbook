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
        Schema::create('promotion_details', function (Blueprint $table) {
            $table->integer('promo_id')->unsigned();
            $table->integer('book_id')->unsigned();
            $table->integer('discount');
            $table->integer('status');
            $table->timestamps();
            $table->primary(['promo_id','book_id']);
            $table->foreign('promo_id')->references('id')->on('promotions')->onDelete('cascade');
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
        Schema::dropIfExists('promotion_details');
    }
};