<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Import;

class ImportsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $imports = [
            [
                'staff_id'=>'1',
                'partner_id'=>'1',
                'total_cost'=>'88500000',
            ],
        ];
  
        foreach ($imports as $key => $value) {
            Import::create($value);
        }
    }
}