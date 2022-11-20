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
                'describe'=>'',
             ],
             [
                'name'=>'Khoa học công nghệ - Kinh tế',
                'describe'=>'',
             ],
             [
                 'name'=>'Văn học nghệ thuật',
                 'describe'=>'',
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