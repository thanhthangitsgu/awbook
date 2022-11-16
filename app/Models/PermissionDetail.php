<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PermissionDetail extends Model
{
    use HasFactory;
    protected $fillable = [
        'permission_id', 
        'position_id',
        'status'
    ];
}