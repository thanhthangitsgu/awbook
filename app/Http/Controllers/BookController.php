<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Book;
use App\Http\Resources\Book as BookResource;

class BookController extends Controller
{
    public function index()
    {
        $book = Book::all();

        $arr = [
        'status' => true,
        'message' => "Danh sách sách",
        'data'=>BookResource::collection($book)
        ];
        
        return response()->json($arr, 200, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function store(Request $request) 
    {
        $input = $request->all(); 

        $validator = Validator::make($input, [
          'title_id' => 'required',
          'price' => 'required'
        ]);

        if($validator->fails()){
           $arr = [
             'success' => false,
             'message' => 'Lỗi kiểm tra dữ liệu',
             'data' => $validator->errors()
           ];
           return response()->json($arr, 200, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
        }

        if(!isset($input['amount']))
            $input['amount'] = 0;

        $input['status'] = 1;
        $book = Book::create($input);

        $arr = ['status' => true,
           'message'=>"Sách đã lưu thành công",
           'data'=> new BookResource($book)
        ];
        
        return response()->json($arr, 201, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function show($id) 
    {
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

    public function update(Request $request, $id)
    {
        $book = Book::find($id);
        $input = $request->all();

        if(isset($input['title_id']))
          $book->title_id = $input['title_id'];

        if(isset($input['pub_id']))
          $book->pub_id = $input['pub_id'];

        if(isset($input['year']))
          $book->year = $input['year'];

        if(isset($input['price']))
          $book->price = $input['price'];

        if(isset($input['amount']))
          $book->image = $input['amount'];

        if(isset($input['image']))
          $book->image = $input['image'];

        if(isset($input['describe']))
          $book->describe = $input['describe'];

        if(isset($input['promotion_id']))
          $book->promotion_id = $input['promotion_id'];

        if(isset($input['status']))
          $book->describe = $input['status'];
          
        $book->save();
        
        $arr = [
          'status' => true,
          'message' => 'Sách cập nhật thành công',
          'data' => new BookResource($book)
        ];
        
        return response()->json($arr, 200, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function destroy($id)
    {
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