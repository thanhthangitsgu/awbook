<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PromotionDetail extends Model
{
    use HasFactory;
    protected $fillable = [
        'promo_id', 
        'book_id',
        'discount',
        'status'
    ];
}