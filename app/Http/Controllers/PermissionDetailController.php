<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\PermissionDetail;
use App\Http\Resources\PermissionDetail as PermissionDetailResource;


class PermissionDetailController extends Controller
{
    public function index(){
        $detail = PermissionDetail::all();
        $arr = [
        'status' => true,
        'message' => "Danh sách chi tiết quyền",
        'data'=>PermissionDetailResource::collection($detail)
        ];
        return response()->json($arr, 200, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function store(Request $request) {
        $input = $request->all(); 
        $validator = Validator::make($input, [
          'permission_id' => 'required',
          'position_id' => 'required',
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
        $detail = PermissionDetail::create($input);
        $arr = ['status' => true,
           'message'=>"Chi tiết quyền đã lưu thành công",
           'data'=> new PermissionDetailResource($detail)
        ];
        return response()->json($arr, 201, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function show(Request $request) {
        $input = $request->all(); 
        $validator = Validator::make($input, [
            'permission_id' => 'required',
            'position_id' => 'required',
          ]);
          if($validator->fails()){
             $arr = [
               'success' => false,
               'message' => 'Lỗi kiểm tra dữ liệu',
               'data' => $validator->errors()
             ];
             return response()->json($arr, 200, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
          }
        $detail = PermissionDetail::where('permission_id', $input['permission_id'])->where('position_id', $input['position_id'])->first();
        if (is_null($detail)) {
           $arr = [
             'success' => false,
             'message' => 'Không có chi tiết quyền này',
             'dara' => []
           ];
           return response()->json($arr, 200, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
        }
        $arr = [
          'status' => true,
          'message' => "Chi tiết quyền",
          'data'=> new PermissionDetailResource($detail)
        ];
        return response()->json($arr, 201, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function update(Request $request){
        $input = $request->all();
        $validator = Validator::make($input, [
            'permission_id' => 'required',
            'position_id' => 'required',
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
        $detail = PermissionDetail::where('permission_id', $input['permission_id'])->where('position_id', $input['position_id'])->first();
        $detail->status = $input['status'];
        PermissionDetail::where('permission_id', $input['permission_id'])->where('position_id', $input['position_id'])->update([
          'status' => $detail->status,
        ]);
        $arr = [
          'status' => true,
          'message' => 'Chi tiết quyền cập nhật thành công',
          'data' => new PermissionDetailResource($detail)
        ];
        return response()->json($arr, 200, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function destroy(Request $request){
        $input = $request->all(); 
        $validator = Validator::make($input, [
            'permission_id' => 'required',
            'position_id' => 'required',
          ]);
          if($validator->fails()){
             $arr = [
               'success' => false,
               'message' => 'Lỗi kiểm tra dữ liệu',
               'data' => $validator->errors()
             ];
             return response()->json($arr, 200, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
          }
        PermissionDetail::where('permission_id', $input['permission_id'])->where('position_id', $input['position_id'])->delete();
        $arr = [
           'status' => true,
           'message' =>'Chi tiết quyền đã được xóa',
           'data' => [],
        ];
        return response()->json($arr, 200, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }
}