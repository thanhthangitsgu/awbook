<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Promotion;

class PromotionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $promotion = [
            [
                'name'=>'Khuyến mãi ngày nhà giáo Việt Nam',
                'start_time'=>'2022-11-20',
                'end_time'=>'2022-11-21',
                'discount'=>'30'
            ],
        ];
  
        foreach ($promotion as $key => $value) {
            Promotion::create($value);
        }
    }
}