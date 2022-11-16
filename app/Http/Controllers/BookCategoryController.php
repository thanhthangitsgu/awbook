<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\BookCategory;
use App\Http\Resources\BookCategory as BookCategoryResource;

class BookCategoryController extends Controller
{
    public function index(){
        $book_cate = BookCategory::all();
        $arr = [
        'status' => true,
        'message' => "Danh sách đầu sách - thể loại",
        'data'=>BookCategoryResource::collection($book_cate)
        ];
        return response()->json($arr, 200, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function store(Request $request) {
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
        $book_cate = BookCategory::create($input);
        $arr = ['status' => true,
           'message'=> "Đầu sách - thể loại đã lưu thành công",
           'data'=> new BookCategoryResource($book_cate)
        ];
        return response()->json($arr, 201, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function show(Request $request) {
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
        $book_cate = BookCategory::where('book_id', $input['book_id'])->where('cate_id', $input['cate_id'])->first();
        if (is_null($book_cate)) {
           $arr = [
             'success' => false,
             'message' => 'Không có Đầu sách - thể loại này',
             'dara' => []
           ];
           return response()->json($arr, 200, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
        }
        $arr = [
          'status' => true,
          'message' => "Đầu sách - thể loại",
          'data'=> new BookCategoryResource($book_cate)
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
        $book_cate = BookCategory::where('book_id', $input['book_id'])->where('cate_id', $input['cate_id'])->first();
        $book_cate->status = $input['status'];
        BookCategory::where('book_id', $input['book_id'])->where('cate_id', $input['cate_id'])->update([
          'status' => $book_cate->status,
        ]);
        $arr = [
          'status' => true,
          'message' => 'Đầu sách - thể loại cập nhật thành công',
          'data' => new BookCategoryResource($book_cate)
        ];
        return response()->json($arr, 200, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function destroy(Request $request){
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
        BookCategory::where('book_id', $input['book_id'])->where('cate_id', $input['cate_id'])->delete();
        $arr = [
           'status' => true,
           'message' =>'Đầu sách - thể loại đã được xóa',
           'data' => [],
        ];
        return response()->json($arr, 200, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }
}