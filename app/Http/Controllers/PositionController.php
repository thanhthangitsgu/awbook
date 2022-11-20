<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Position;
use App\Http\Resources\Position as PositionResource;

class PositionController extends Controller
{
    public function index()
    {
        $posi = Position::all();
        
        $arr = [
        'status' => true,
        'message' => "Danh sách chức vụ",
        'data'=>PositionResource::collection($posi)
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
        $posi = Position::create($input);
        
        $arr = ['status' => true,
           'message'=>"Chức vụ đã lưu thành công",
           'data'=> new PositionResource($posi)
        ];
        
        return response()->json($arr, 201, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function show($id) 
    {
        $posi = Position::find($id);

        if (is_null($posi)) {
           $arr = [
             'success' => false,
             'message' => 'Không có chức vụ này',
             'dara' => []
           ];
           return response()->json($arr, 200, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
        }

        $arr = [
          'status' => true,
          'message' => "Chi tiết chức vụ",
          'data'=> new PositionResource($posi)
        ];
        
        return response()->json($arr, 201, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function update(Request $request, $id)
    {
        $posi = Position::find($id);
        $input = $request->all();

        if(isset($input['name']))
          $posi->name = $input['name'];

        if(isset($input['status']))
          $posi->status = $input['status'];

        $posi->save();

        $arr = [
          'status' => true,
          'message' => 'Chức vụ đã được cập nhật thành công',
          'data' => new PositionResource($posi)
        ];
        
        return response()->json($arr, 200, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function destroy($id)
    {
        $posi = Position::find($id);
        $posi->delete();

        $arr = [
           'status' => true,
           'message' =>'Chức vụ đã được xóa',
           'data' => [],
        ];
        
        return response()->json($arr, 200, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }
}