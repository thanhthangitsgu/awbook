<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Category;
use App\Http\Resources\Category as CategoryResource;

use function PHPUnit\Framework\isNull;

class CategoryController extends Controller
{
    public function index()
    {
        $cate = Category::all();

        $arr = [
        'status' => true,
        'message' => "Danh sách thể loại",
        'data'=>CategoryResource::collection($cate)
        ];
        
        return response()->json($arr, 200, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function store(Request $request) 
    {
        $input = $request->all(); 

        $validator = Validator::make($input, [
          'name' => 'required'
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
        $cate = Category::create($input);
        
        $arr = ['status' => true,
           'message'=>"Thể loại đã lưu thành công",
           'data'=> new CategoryResource($cate)
        ];
        
        return response()->json($arr, 201, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function show($id) 
    {
        $cate = Category::find($id);
        
        if (is_null($cate)) {
           $arr = [
             'success' => false,
             'message' => 'Không có thể loại này',
             'dara' => []
           ];
           return response()->json($arr, 200, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
        }

        $arr = [
          'status' => true,
          'message' => "Chi tiết thể loại",
          'data'=> new CategoryResource($cate)
        ];

        return response()->json($arr, 201, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function update(Request $request, $id)
    {
        $cate = Category::find($id);
        $input = $request->all();

        if(isset($input['name']))
          $cate->name = $input['name'];

        if(isset($input['describe']))
          $cate->describe = $input['describe'];

        if(isset($input['status']))
          $cate->status = $input['status'];

        $cate->save();
        
        $arr = [
          'status' => true,
          'message' => 'Thể loại cập nhật thành công',
          'data' => new CategoryResource($cate)
        ];
        
        return response()->json($arr, 200, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function destroy($id)
    {
        $cate = Category::find($id);
        $cate->delete();

        $arr = [
           'status' => true,
           'message' =>'Thể loại đã được xóa',
           'data' => [],
        ];
        
        return response()->json($arr, 200, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }
}