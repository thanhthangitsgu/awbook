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
                'name'=>'Xem khuyến mãi'
            ],
            [
                'name'=>'Quản lý khuyến mãi'
            ],
            [
                'name'=>'Xem nhà xuất bản'
            ],
            [
                'name'=>'Quản lý nhà xuất bản'
            ],
            [
                'name'=>'Xem phương thức thanh toán'
            ],
            [
                'name'=>'Quản lý phương thức thanh toán'
            ],
            [
                'name'=>'Xem tác giả'
            ],
            [
                'name'=>'Quản lý tác giả'
            ],
            [
                'name'=>'Xem thể loại'
            ],
            [
                'name'=>'Quản lý thể loại'
            ],
            [
                'name'=>'Xem đối tác'
            ],
            [
                'name'=>'Quản lý đối tác'
            ],
            [
                'name'=>'Xem đầu sách'
            ],
            [
                'name'=>'Quản lý đầu sách'
            ],
            [
                'name'=>'Xem sách'
            ],
            [
                'name'=>'Quản lý sách'
            ],
            [
                'name'=>'Xem thể loại - đầu sách'
            ],
            [
                'name'=>'Quản lý thể loại - đầu sách'
            ],
            [
                'name'=>'Xem chi tiết hóa đơn'
            ],
            [
                'name'=>'Quản lý chi tiết hóa đơn'
            ],
            [
                'name'=>'Xem quyền'
            ],
            [
                'name'=>'Quản lý quyền'
            ],
            [
                'name'=>'Xem chức vụ'
            ],
            [
                'name'=>'Quản lý chức vụ'
            ],
            [
                'name'=>'Xem chi tiết quyền'
            ],
            [
                'name'=>'Quản lý chi tiết quyền'
            ],
            [
                'name'=>'Xem người dùng'
            ],
            [
                'name'=>'Quản lý người dùng'
            ],
            [
                'name'=>'Xem hóa đơn'
            ],
            [
                'name'=>'Quản lý hóa đơn'
            ],
            [
                'name'=>'Xem chi tiết hóa đơn'
            ],
            [
                'name'=>'Quản lý chi tiết hóa đơn'
            ],
        ];
    
        foreach ($permission as $key => $value) {
            Permission::create($value);
        }
    }
}