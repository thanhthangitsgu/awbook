<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\BookTitle;
use App\Http\Resources\BookTitle as BookTitleResource;

class BookTitleController extends Controller
{
    public function index()
    {
        $book_title = BookTitle::all();

        $arr = [
        'status' => true,
        'message' => "Danh sách đầu sách",
        'data'=>BookTitleResource::collection($book_title)
        ];
        
        return response()->json($arr, 200, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function store(Request $request) 
    {
        $input = $request->all(); 
        
        $validator = Validator::make($input, [
          'name' => 'required',
          'author_id' => 'required'
        ]);

        if($validator->fails()){
           $arr = [
             'success' => false,
             'message' => 'Lỗi kiểm tra dữ liệu',
             'data' => $validator->errors()
           ];
           return response()->json($arr, 200, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
        }

        $input['status']='1';
        $book_title = BookTitle::create($input);

        $arr = ['status' => true,
           'message'=>"Thông tin đầu sách đã lưu thành công",
           'data'=> new BooktitleResource($book_title)
        ];
        
        return response()->json($arr, 201, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function show($id) 
    {
        $book_title = BookTitle::find($id);
        
        if (is_null($book_title)) {
           $arr = [
             'success' => false,
             'message' => 'Không có đầu sách này',
             'dara' => []
           ];
           return response()->json($arr, 200, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
        }

        $arr = [
          'status' => true,
          'message' => "Chi tiết đầu sách",
          'data'=> new BookTitleResource($book_title)
        ];
        
        return response()->json($arr, 201, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function update(Request $request, $id)
    {
        $book_title = BookTitle::find($id);
        $input = $request->all();

        if(isset($input['name']))
          $book_title->name = $input['name'];

        if(isset($input['author_id']))
          $book_title->author_id = $input['author_id'];

        if(isset($input['status']))
          $book_title->status = $input['status'];
          
        $book_title->save();

        $arr = [
          'status' => true,
          'message' => 'Thông tin đầu sách cập nhật thành công',
          'data' => new BookTitleResource($book_title)
        ];
        
        return response()->json($arr, 200, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function destroy($id)
    {
        $book_title = BookTitle::find($id);
        $book_title->delete();

        $arr = [
           'status' => true,
           'message' =>'Đầu sách đã được xóa',
           'data' => [],
        ];
        
        return response()->json($arr, 200, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }
}