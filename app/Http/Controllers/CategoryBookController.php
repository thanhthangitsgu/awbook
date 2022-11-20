<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\CategoryBook;
use App\Http\Resources\CategoryBook as CategoryBookResource;

class CategoryBookController extends Controller
{
    public function index()
    {
        $book_cate = CategoryBook::all();

        $arr = [
        'status' => true,
        'message' => "Danh sách đầu sách - thể loại",
        'data'=>CategoryBookResource::collection($book_cate)
        ];
        
        return response()->json($arr, 200, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function store(Request $request) 
    {
        $input = $request->all(); 

        $validator = Validator::make($input, [
          'book_id' => 'required',
          'cate_id' => 'required'
        ]);

        if($validator->fails()){
           $arr = [
             'success' => false,
             'message' => 'Lỗi kiểm tra dữ liệu',
             'data' => $validator->errors()
           ];
           return response()->json($arr, 200, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
        }

        $cate_book = CategoryBook::where('book_id', $input['book_id'])->where('cate_id', $input['cate_id'])->first();
        
        if(isset($cate_book)){
          $arr = [
            'success' => false,
            'message' => 'Đầu sách - thể loại đã tồn tại',
            'data' => $validator->errors()
          ];
          return response()->json($arr, 200, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
        }
        
        $input['status']='1';
        $book_cate = CategoryBook::create($input);
        
        $arr = ['status' => true,
           'message'=> "Đầu sách - thể loại đã lưu thành công",
           'data'=> new CategoryBookResource($book_cate)
        ];
        
        return response()->json($arr, 201, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function show($id) 
    {
        $titles = CategoryBook::where('cate_id', $id)->get();
        
        $arr = [
          'status' => true,
          'message' => "Danh sách đầu sách",
          'data'=> CategoryBookResource::collection($titles)
        ];
        
        return response()->json($arr, 201, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function update(Request $request){
        $input = $request->all();
        
        $validator = Validator::make($input, [
            'book_id' => 'required',
            'cate_id' => 'required',
            'status'=> 'required'
        ]);
        
        if($validator->fails()){
          $arr = [
            'success' => false,
            'message' => 'Lỗi kiểm tra dữ liệu',
            'data' => $validator->errors()
          ];
          return response()->json($arr, 200, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
        }

        $book_cate = CategoryBook::where('book_id', $input['book_id'])->where('cate_id', $input['cate_id'])->first();
        $book_cate->status = $input['status'];
        
        CategoryBook::where('book_id', $input['book_id'])->where('cate_id', $input['cate_id'])->update([
          'status' => $book_cate->status,
        ]);
        
        $arr = [
          'status' => true,
          'message' => 'Đầu sách - thể loại cập nhật thành công',
          'data' => new CategoryBookResource($book_cate)
        ];
        return response()->json($arr, 200, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function destroy(Request $request)
    {
        $input = $request->all(); 
        
        $validator = Validator::make($input, [
            'book_id' => 'required',
            'cate_id' => 'required',
          ]);

        if($validator->fails()){
            $arr = [
              'success' => false,
              'message' => 'Lỗi kiểm tra dữ liệu',
              'data' => $validator->errors()
            ];
            return response()->json($arr, 200, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
        }

        CategoryBook::where('book_id', $input['book_id'])->where('cate_id', $input['cate_id'])->delete();
        
        $arr = [
           'status' => true,
           'message' =>'Đầu sách - thể loại đã được xóa',
           'data' => [],
        ];

        return response()->json($arr, 200, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }
}