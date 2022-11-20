<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Permission;

class PermissionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $permission = [
            [
                'name'=>'Quản lý người dùng'
            ],
            [
                'name'=>'Quản lý sách'
            ],
            [
                'name'=>'Quản lý thể loại'
            ],
            [
                'name'=>'Quản lý nhà xuất bản'
            ],
            [
                'name'=>'Quản lý khuyến mãi'
            ],
            [
                'name'=>'Quản lý tác giả'
            ],
            [
                'name'=>'Quản lý chức vụ'
            ],
            [
                'name'=>'Quản lý đối tác'
            ],
            [
                'name'=>'Quản lý phương thức thanh toán'
            ],
            [
                'name'=>'Quản lý hóa đơn'
            ],
            [
                'name'=>'Quản lý phiếu nhập'
            ],
            [
                'name'=>'Quản lý đầu sách'
            ],
            [
                'name'=>'Thống kê'
            ],
            [
                'name'=>'Phân quyền'
            ],
        ];
    
        foreach ($permission as $key => $value) {
            Permission::create($value);
        }
    }
}