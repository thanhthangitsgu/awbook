<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    use HasFactory;
    protected $fillable = [
        'title_id',
        'pub_id',
        'year',
        'price',
        'amount',
        'image',
        'describe',
        'promotion_id',
        'status'
    ];
}