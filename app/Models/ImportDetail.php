<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ImportDetail extends Model
{
    use HasFactory;
    protected $fillable = [
        'import_id', 
        'book_id',
        'amount',
        'price',
        'status'
    ];
}