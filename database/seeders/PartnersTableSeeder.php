<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Partner;

class PartnersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $partner = [
            [
                'name'=>'Công Ty Cổ Phần Phát Hành Sách Tp. HCM',
                'type'=>'Nhà cung cấp',
                'discount'=>null
            ],
            [
                'name'=>'Giao hàng tiết kiệm',
                'type'=>'Đơn vị vận chuyển',
                'discount'=>'3'
            ],
            [
                'name'=>'Giao hàng nhanh',
                'type'=>'Đơn vị vận chuyển',
                'discount'=>'4'
            ],
            [
                'name'=>'Quỳnh Phát - Công Ty TNHH Thương Mại Dịch Vụ Quỳnh Phát',
                'type'=>'Nhà cung cấp',
                'discount'=>null
            ],
            [
                'name'=>'J&T Express',
                'type'=>'Đơn vị vận chuyển',
                'discount'=>'4'
            ],
            [
                'name'=>'Công Ty TNHH Văn Hóa Việt Long',
                'type'=>'Nhà cung cấp',
                'discount'=>null
            ],
            [
                'name'=>'Nhà sách Bích Quân',
                'type'=>'Nhà cung cấp',
                'discount'=>null
            ],
            [
                'name'=>'Nhà Sách Tài Chính',
                'type'=>'Nhà cung cấp',
                'discount'=>null
            ],
            [
                'name'=>'Nhà Sách An Dương Vương',
                'type'=>'Nhà cung cấp',
                'discount'=>null
            ],
            [
                'name'=>'Nhà Sách Ngoại Văn BOA(Books of Awesome)',
                'type'=>'Nhà cung cấp',
                'discount'=>null
            ],
            [
                'name'=>'Công Ty TNHH Thương Mại Và Dịch Vụ Sách Gia Định',
                'type'=>'Nhà cung cấp',
                'discount'=>null
            ],
        ];
  
        foreach ($partner as $key => $value) {
            Partner::create($value);
        }
    }
}