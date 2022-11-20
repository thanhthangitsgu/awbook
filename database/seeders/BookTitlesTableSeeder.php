<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\BookTitle;

class BookTitlesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $title = [
            [
                'name'=>'Mắt biếc',
                'author_id'=>'1',
            ],
            [
                'name'=>'Tôi thấy hoa vàng trên cỏ xanh',
                'author_id'=>'1',
            ],
            [
                'name'=>'Cho tôi xin một vé đi tuổi thơ',
                'author_id'=>'1',
            ],
            [
                'name'=>'Ngồi khóc trên cây',
                'author_id'=>'1',
            ],
            [
                'name'=>'Làm bạn với bầu trời',
                'author_id'=>'1',
            ],
            [
                'name'=>'Ngày xưa có một chuyện tình',
                'author_id'=>'1',
            ],
            [
                'name'=>'Chồng xứ lạ',
                'author_id'=>'2',
            ],
            [
                'name'=>'Đàn bà 30',
                'author_id'=>'2',
            ],
            [
                'name'=>'Tình nhân không bao giờ đòi cưới',
                'author_id'=>'2',
            ],
            [
                'name'=>'Đàn ông không đọc Trang Hạ',
                'author_id'=>'2',
            ],
            [
                'name'=>'Rãnh ngực tiệc đêm',
                'author_id'=>'2',
            ],
            [
                'name'=>'Đi qua thương nhớ',
                'author_id'=>'3',
            ],
            [
                'name'=>'Từ yêu đến thương',
                'author_id'=>'3',
            ],
            [
                'name'=>'Sinh ra để cô đơn',
                'author_id'=>'3',
            ],
            [
                'name'=>'Người xưa đã quên ngày xưa',
                'author_id'=>'4',
            ],
            [
                'name'=>'Thương mấy cũng là người dưng',
                'author_id'=>'4',
            ],
            [
                'name'=>'Ngày trôi về phía cũ',
                'author_id'=>'4',
            ],
            [
                'name'=>'Trời vẫn còn xanh, em vẫn còn anh',
                'author_id'=>'4',
            ],
            [
                'name'=>'Đường hai ngã - Người thương thành lạ',
                'author_id'=>'4',
            ],
            [
                'name'=>'Buồn làm sao buông',
                'author_id'=>'4',
            ],
            [
                'name'=>'Đi đâu cũng nhớ Sài Gòn và... Em',
                'author_id'=>'4',
            ],
            [
                'name'=>'Sông Máu',
                'author_id'=>'5',
            ],
            [
                'name'=>'Lòng dạ đàn bà',
                'author_id'=>'5',
            ],
            [
                'name'=>'Chênh vênh hai lăm',
                'author_id'=>'5',
            ],
            [
                'name'=>'Khóc giữa Sài Gòn',
                'author_id'=>'5',
            ],
            [
                'name'=>'Lưng chừng cô đơn',
                'author_id'=>'5',
            ],
            [
                'name'=>'Tuổi trẻ hoang dại',
                'author_id'=>'5',
            ],
        ];
  
        foreach ($title as $key => $value) {
            BookTitle::create($value);
        }
    }
}