<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\PaymentMethod;

class PaymentMethodsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $payment = [
            [
                'name'=>'thẻ ngân hàng'
            ],
            [
                 'name'=>'tiền mặt'
            ],
            [
                'name'=>'ZaloPay'
            ],
            [
                'name'=>'Momo'
            ],
        ];
  
        foreach ($payment as $key => $value) {
            PaymentMethod::create($value);
        }
    }
}