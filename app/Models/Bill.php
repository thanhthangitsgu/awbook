<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bill extends Model
{
    use HasFactory;
    protected $fillable = [
        'customer_id',
        'payment_id',
        'partner_id',
        'ship_code',
        'total_cost',
        'promotion',
        'ship_charges',
        'status'
    ];
}