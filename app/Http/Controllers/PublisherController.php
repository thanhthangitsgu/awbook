<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Publisher;
use App\Http\Resources\Publisher as PublisherResource;

class PublisherController extends Controller
{
    public function index(){
        $pub = Publisher::all();
        $arr = [
        'status' => true,
        'message' => "Danh sách nhà xuất bản",
        'data'=>PublisherResource::collection($pub)
        ];
        return response()->json($arr, 200, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function store(Request $request) {
        $input = $request->all(); 
        $validator = Validator::make($input, [
          'id_pub' => 'required',
          'name' => 'required',
          'address' => 'required',
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
        $pub = Publisher::create($input);
        $arr = ['status' => true,
           'message'=>"Nhà xuất bản đã lưu thành công",
           'data'=> new PublisherResource($pub)
        ];
        return response()->json($arr, 201, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function show($id) {
        $pub = Publisher::where('id_pub', $id)->first();
        if (is_null($pub)) {
           $arr = [
             'success' => false,
             'message' => 'Không có nhà xuất bản này',
             'dara' => []
           ];
           return response()->json($arr, 200, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
        }
        $arr = [
          'status' => true,
          'message' => "Chi tiết nhà xuất bản",
          'data'=> new PublisherResource($pub)
        ];
        return response()->json($arr, 201, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function update(Request $request, $id){
        $pub = Publisher::where('id_pub', $id)->first();
        $input = $request->all();
        $validator = Validator::make($input, [
            'name' => 'required',
            'address' => 'required',
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
        $pub->name = $input['name'];
        $pub->address = $input['address'];
        $pub->status = $input['status'];
        Publisher::where('id_pub', $id)->update([
          'name' => $pub->name,
          'address' => $pub->address,
          'status' => $pub->status,
        ]);
        $arr = [
          'status' => true,
          'message' => 'Nhà xuất bản cập nhật thành công',
          'data' => new PublisherResource($pub)
        ];
        return response()->json($arr, 200, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function destroy($id){
        Publisher::where('id_pub', $id)->delete();
        $arr = [
           'status' => true,
           'message' =>'Nhà xuất bản đã được xóa',
           'data' => [],
        ];
        return response()->json($arr, 200, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }
}