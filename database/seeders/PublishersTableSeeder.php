<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Publisher;

class PublishersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $publishers = [
            [
                'id_pub'=>'NXBTG',
                'name'=>'Nhà Xuất Bản Thế Giới',
                'address'=>'',
            ],
            [
                'id_pub'=>'NXBCTQG',
                'name'=>'Nhà Xuất Bản Chính Trị Quốc Gia',
                'address'=>'',
            ],
            [
                'id_pub'=>'NXBLD',
                'name'=>'Nhà Xuất Bản Lao Động',
                'address'=>'',
            ],
            [
                'id_pub'=>'NXBTT',
                'name'=>'Nhà Xuất Bản Tri Thức',
                'address'=>'',
            ],
            [
                'id_pub'=>'NXBDT',
                'name'=>'Nhà Xuất Bản Dân Trí',
                'address'=>'',
            ],
            [
                'id_pub'=>'NXBVH',
                'name'=>'Nhà Xuất Bản Văn Học',
                'address'=>'',
            ],
            [
                'id_pub'=>'NXBHNV',
                'name'=>'Nhà Xuất Bản Hội Nhà Văn',
                'address'=>'',
            ],
            [
                'id_pub'=>'NXBND',
                'name'=>'Nhà Xuất Bản Công An Nhân Dân',
                'address'=>'',
            ],
            [
                'id_pub'=>'NXBQD',
                'name'=>'Nhà Xuất Bản Quân Đội',
                'address'=>'',
            ],
            [
                'id_pub'=>'NXBHD',
                'name'=>'Nhà Xuất Bản Hồng Đức',
                'address'=>'',
            ],  
            [
                'id_pub'=>'NXBT',
                'name'=>'Nhà Xuất bản Trẻ',
                'address'=>'',
            ],
            [
                'id_pub'=>'NXBPN',
                'name'=>'Nhà Xuất Bản Phụ Nữ',
                'address'=>'',
            ],
            [
                'id_pub'=>'NXBTD',
                'name'=>'Nhà Xuất Bản Thời Đại',
                'address'=>'',
            ],
            [
                'id_pub'=>'NXBVHVN',
                'name'=>'Nhà Xuất Bản Văn Hoá - Văn Nghệ',
                'address'=>'',
            ],   
            [
                'id_pub'=>'NXBHN',
                'name'=>'Nhà Xuất Bản Hà Nội',
                'address'=>'',
            ],           
        ];
  
        foreach ($publishers as $key => $value) {
            Publisher::create($value);
        }
    }
}