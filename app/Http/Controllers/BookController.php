<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Book;
use App\Http\Resources\Book as BookResource;

class BookController extends Controller
{
    public function index(){
        $book = Book::all();
        $arr = [
        'status' => true,
        'message' => "Danh sách sách",
        'data'=>BookResource::collection($book)
        ];
        return response()->json($arr, 200, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function store(Request $request) {
        $input = $request->all(); 
        $validator = Validator::make($input, [
          'title_id' => 'required',
          'pub_id' => 'required',
          'year' => 'required',
          'price' => 'required',
          'describe' => 'required',
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
        $book = Book::create($input);
        $arr = ['status' => true,
           'message'=>"Sách đã lưu thành công",
           'data'=> new BookResource($book)
        ];
        return response()->json($arr, 201, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function show($id) {
        $book = Book::find($id);
        if (is_null($book)) {
           $arr = [
             'success' => false,
             'message' => 'Không có sách này',
             'dara' => []
           ];
           return response()->json($arr, 200, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
        }
        $arr = [
          'status' => true,
          'message' => "Thông tin sách",
          'data'=> new BookResource($book)
        ];
        return response()->json($arr, 201, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function update(Request $request, $id){
        $book = Book::find($id);
        $input = $request->all();
        $validator = Validator::make($input, [
            'title_id' => 'required',
            'pub_id' => 'required',
            'year' => 'required',
            'price' => 'required',
            'describe' => 'required',
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
        $book->title_id = $input['title_id'];
        $book->pseudonym = $input['pub_id'];
        $book->year = $input['year'];
        $book->price = $input['price'];
        $book->describe = $input['describe'];
        $book->status = $input['status'];
        $book->save();
        $arr = [
          'status' => true,
          'message' => 'Sách cập nhật thành công',
          'data' => new BookResource($book)
        ];
        return response()->json($arr, 200, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function destroy($id){
        $book = Book::find($id);
        $book->delete();
        $arr = [
           'status' => true,
           'message' =>'Sách đã được xóa',
           'data' => [],
        ];
        return response()->json($arr, 200, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }
}