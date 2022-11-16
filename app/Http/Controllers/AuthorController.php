<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Author;
use App\Http\Resources\Author as AuthorResource;

class AuthorController extends Controller
{
    public function index(){
        $author = Author::all();
        $arr = [
        'status' => true,
        'message' => "Danh sách tác giả",
        'data'=>AuthorResource::collection($author)
        ];
        return response()->json($arr, 200, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function store(Request $request) {
        $input = $request->all(); 
        $validator = Validator::make($input, [
          'name' => 'required',
          'pseudonym' => 'required',
          'gender' => 'required',
          'year_of_birth' => 'required',
          'year_of_death' => 'required',
          'native_place' => 'required',
          'introduce' => 'required',
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
        $author = Author::create($input);
        $arr = ['status' => true,
           'message'=>"Thông tin tác giả đã lưu thành công",
           'data'=> new AuthorResource($author)
        ];
        return response()->json($arr, 201, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function show($id) {
        $author = Author::find($id);
        if (is_null($author)) {
           $arr = [
             'success' => false,
             'message' => 'Không có tác giả này',
             'dara' => []
           ];
           return response()->json($arr, 200, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
        }
        $arr = [
          'status' => true,
          'message' => "Chi tiết thông tin tác giả",
          'data'=> new AuthorResource($author)
        ];
        return response()->json($arr, 201, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function update(Request $request, $id){
        $author = Author::find($id);
        $input = $request->all();
        $validator = Validator::make($input, [
            'name' => 'required',
            'pseudonym' => 'required',
            'gender' => 'required',
            'year_of_birth' => 'required',
            'year_of_death' => 'required',
            'native_place' => 'required',
            'introduce' => 'required',
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
        $author->name = $input['name'];
        $author->pseudonym = $input['pseudonym'];
        $author->gender = $input['gender'];
        $author->year_of_birth = $input['year_of_birth'];
        $author->year_of_death = $input['year_of_death'];
        $author->native_place = $input['native_place'];
        $author->introduce = $input['introduce'];
        $author->status = $input['status'];
        $author->save();
        $arr = [
          'status' => true,
          'message' => 'Thông tin tác giả cập nhật thành công',
          'data' => new AuthorResource($author)
        ];
        return response()->json($arr, 200, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function destroy($id){
        $author = Author::find($id);
        $author->delete();
        $arr = [
           'status' => true,
           'message' =>'Tác giả đã được xóa',
           'data' => [],
        ];
        return response()->json($arr, 200, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }
}