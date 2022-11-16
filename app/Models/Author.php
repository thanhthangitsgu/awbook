<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Author extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'pseudonym',
        'gender',
        'year_of_birth',
        'year_of_death',
        'native_place',
        'introduce',
        'status'
    ];
}