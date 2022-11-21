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
                'permission_id'=>'2',
                'position_id'=>'1',
            ],
            [
               'permission_id'=>'4',
               'position_id'=>'1',
            ],
            [
               'permission_id'=>'6',
               'position_id'=>'1',
            ],
            [
               'permission_id'=>'8',
               'position_id'=>'1',
            ],
            [
               'permission_id'=>'19',
               'position_id'=>'1',
            ],
            [
               'permission_id'=>'12',
               'position_id'=>'1',
            ],
            [
               'permission_id'=>'14',
               'position_id'=>'1',
            ],
            [
               'permission_id'=>'16',
               'position_id'=>'1',
            ],
            [
               'permission_id'=>'18',
               'position_id'=>'1',
            ],
            [
               'permission_id'=>'20',
               'position_id'=>'1',
            ],
            [
               'permission_id'=>'22',
               'position_id'=>'1',
            ],
            [
               'permission_id'=>'24',
               'position_id'=>'1',
            ],
            [
               'permission_id'=>'26',
               'position_id'=>'1',
            ],
            [
               'permission_id'=>'28',
               'position_id'=>'1',
            ],
            [
               'permission_id'=>'30',
               'position_id'=>'1',
            ],
            [
               'permission_id'=>'32',
               'position_id'=>'1',
            ],
            [
               'permission_id'=>'1',
               'position_id'=>'2',
            ],
            [
               'permission_id'=>'3',
               'position_id'=>'2',
            ],
            [
               'permission_id'=>'5',
               'position_id'=>'2',
            ],
            [
               'permission_id'=>'7',
               'position_id'=>'2',
            ],
            [
               'permission_id'=>'9',
               'position_id'=>'2',
            ],
            [
               'permission_id'=>'11',
               'position_id'=>'2',
            ],
            [
               'permission_id'=>'13',
               'position_id'=>'2',
            ],
            [
               'permission_id'=>'15',
               'position_id'=>'2',
            ],
            [
               'permission_id'=>'17',
               'position_id'=>'2',
            ],
        ];
  
        foreach ($perm_detail as $key => $value) {
            PermissionDetail::create($value);
        }
    }
}