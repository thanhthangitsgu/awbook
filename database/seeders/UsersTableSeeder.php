<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $users = [
            [
                'surname'=>'Phan Anh',
                'name'=>'Quân',
                'gender'=>'Nam',
                'date_of_birth'=>'2001-05-01',
                'position_id'=>'1',
                'phone'=>'0973743542',
                'address'=>'73 An Dương Vương,Phường 08,Quận 5,Thành phố Hồ Chí Minh',
                'email'=>'phananhquan48@gmail.com',
                'email_verified_at'=>null,
                'password'=>bcrypt('12345678'),
            ], 
            [
                'surname'=>'Phan Thanh',
                'name'=>'Thắng',
                'gender'=>'Nam',
                'date_of_birth'=>'2001-05-20',
                'position_id'=>'1',
                'phone'=>'0355082545',
                'address'=>'73 An Dương Vương,Phường 08,Quận 5,Thành phố Hồ Chí Minh',
                'email'=>'thanhthang.itsgu@gmail.com',
                'email_verified_at'=>null,
                'password'=>bcrypt('12345678'),
            ],  
            [
                'surname'=>'Nguyễn Thị Thảo',
                'name'=>'Nguyên',
                'gender'=>'Nữ',
                'date_of_birth'=>'2001-05-02',
                'position_id'=>'3',
                'phone'=>'0896896137',
                'address'=>'27/7 Nguyễn Ngọc Lộc,Phường 14,Quận 10,Thành phố Hồ Chí Minh',
                'email'=>'thaonguyen25@gmail.com',
                'email_verified_at'=>null,
                'password'=>bcrypt('12345678'),
            ],  
            [
                'surname'=>'Trần Thị Thu',
                'name'=>'Thanh',
                'gender'=>'Nữ',
                'date_of_birth'=>'1999-10-16',
                'position_id'=>'3',
                'phone'=>'0973743542',
                'address'=>'273 An Dương Vương,Phường 03,Quận 5,Thành phố Hồ Chí Minh',
                'email'=>'thuthanh1999@gmail.com',
                'email_verified_at'=>null,
                'password'=>bcrypt('12345678'),
            ],  
            [
                'surname'=>'Lê Thị Bảo',
                'name'=>'Mây',
                'gender'=>'Nữ',
                'date_of_birth'=>'2001-08-29',
                'position_id'=>'2',
                'phone'=>'0978878324',
                'address'=>' Đ.Mạc Đĩnh Chi,Phường Đông Hòa Đông Hòa,Thành phố Dĩ An,Tỉnh Bình Dương',
                'email'=>'baomay74@gmail.com',
                'email_verified_at'=>null,
                'password'=>bcrypt('12345678'),
            ],  
            [
                'surname'=>'Lê Thúc',
                'name'=>'Khánh',
                'gender'=>'Nam',
                'date_of_birth'=>'2001-01-10',
                'position_id'=>'2',
                'phone'=>'0123535787',
                'address'=>'669 QL1A,Phường Linh Trung,Thành phố Thủ Đức,Thành phố Hồ Chí Minh',
                'email'=>'lethuckhanh01@gmail.com',
                'email_verified_at'=>null,
                'password'=>bcrypt('12345678'),
            ],
            [
                'surname'=>'Võ Viết',
                'name'=>'Triều',
                'gender'=>'Nam',
                'date_of_birth'=>'2001-05-10',
                'position_id'=>'2',
                'phone'=>'0987876877',
                'address'=>'102 Phùng Hưng,Phường Thuận Thành,Thành phố Huế,Tỉnh Thừa Thiên Huế',
                'email'=>'trieudaden1005@gmail.com',
                'email_verified_at'=>null,
                'password'=>bcrypt('12345678'),
            ],
            [
                'surname'=>'Nguyễn Văn Minh',
                'name'=>'Đức',
                'gender'=>'Nam',
                'date_of_birth'=>'2001-06-16',
                'position_id'=>'2',
                'phone'=>'0256878654',
                'address'=>'212 Nguyễn Văn Linh,Phường Tân Thuận Tây,Quận 7,Thành Phố Hồ Chí Minh',
                'email'=>'nguyenminhduc@gmail.com',
                'email_verified_at'=>null,
                'password'=>bcrypt('12345678'),
            ],
            [
                'surname'=>'Lê Thị Cẩm',
                'name'=>'Duyên',
                'gender'=>'Nữ',
                'date_of_birth'=>'2001-09-13',
                'position_id'=>'2',
                'phone'=>'0789856234',
                'address'=>'13 Tôn Đản,Phường 13,Quận 4,Thành phố Hồ Chí Minh',
                'email'=>'camduyen123@gmail.com',
                'email_verified_at'=>null,
                'password'=>bcrypt('12345678'),
            ],
        ];
        
        foreach ($users as $key => $value) {
            User::create($value);
        }
    }
}