<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Position;

class PositionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $position = [
            [
                'name'=>'Admin'
            ],
            [
                'name'=>'Khách hàng'
            ],
            [
                 'name'=>'Nhân viên'
            ]
        ];
  
        foreach ($position as $key => $value) {
            Position::create($value);
        }
    }
}