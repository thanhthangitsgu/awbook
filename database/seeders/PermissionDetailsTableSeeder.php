<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\PermissionDetail;

class PermissionDetailsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $perm_detail = [
            [
                'permission_id'=>'1',
                'position_id'=>'1',
             ],
             [
                'permission_id'=>'2',
                'position_id'=>'1',
             ],
             [
                'permission_id'=>'3',
                'position_id'=>'1',
             ],
             [
                'permission_id'=>'4',
                'position_id'=>'1',
             ],
             [
                'permission_id'=>'5',
                'position_id'=>'1',
             ],
             [
                'permission_id'=>'6',
                'position_id'=>'1',
             ],
             [
                'permission_id'=>'7',
                'position_id'=>'1',
             ],
             [
                'permission_id'=>'1',
                'position_id'=>'2',
             ],
        ];
  
        foreach ($perm_detail as $key => $value) {
            PermissionDetail::create($value);
        }
    }
}