<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Category;

class CategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    
    public function run()
    {
        $cate = [
            [
                'name'=>'Chính trị - pháp luật',
                'describe'=>'Sách lược chính trị hay Chiến lược chính trị là đường lối, phương pháp, cách thức của một hệ thống quản trị lớn, thường là một chính phủ, đảng phái chính trị, nhằm đạt được mục tiêu chính trị trong việc quản trị quốc gia, tổ chức.',
             ],
             [
                'name'=>'Khoa học công nghệ - Kinh tế',
                'describe'=>'',
             ],
             [
                 'name'=>'Văn học nghệ thuật',
                 'describe'=>'Sách văn học trong và ngoài nước',
             ],
             [
                 'name'=>'Văn hóa xã hội - Lịch sử',
                 'describe'=>'',
             ],
             [
                 'name'=>'Giáo trình',
                 'describe'=>'',
             ],
             [
                 'name'=>'Truyện, tiểu thuyết',
                 'describe'=>'',
             ],
             [
                 'name'=>'Tâm lý, tâm linh, tôn giáo',
                 'describe'=>'',
             ],
             [
                 'name'=>'Sách thiếu nhi',
                 'describe'=>'',
             ],
        ];
  
        foreach ($cate as $key => $value) {
            Category::create($value);
        }
    }
}