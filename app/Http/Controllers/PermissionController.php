<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Permission;
use App\Http\Resources\Permission as PermissionResource;

class PermissionController extends Controller
{
    public function index()
    {
        $perm = Permission::all();

        $arr = [
        'status' => true,
        'message' => "Danh sách quyền",
        'data'=>PermissionResource::collection($perm)
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
        $perm = Permission::create($input);

        $arr = ['status' => true,
           'message'=>"Quyền đã lưu thành công",
           'data'=> new PermissionResource($perm)
        ];
        
        return response()->json($arr, 201, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function show($id) 
    {
        $perm = Permission::find($id);

        if (is_null($perm)) {
           $arr = [
             'success' => false,
             'message' => 'Không có quyền này',
             'dara' => []
           ];
           return response()->json($arr, 200, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
        }

        $arr = [
          'status' => true,
          'message' => "Chi tiết quyền",
          'data'=> new PermissionResource($perm)
        ];
        
        return response()->json($arr, 201, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function update(Request $request, $id)
    {
        $perm = Permission::find($id);
        $input = $request->all();

        if(isset($input['name']))
          $perm->name = $input['name'];

        if(isset($input['status']))
          $perm->status = $input['status'];

        $perm->save();

        $arr = [
          'status' => true,
          'message' => 'Quyền đã được cập nhật thành công',
          'data' => new PermissionResource($perm)
        ];
        
        return response()->json($arr, 200, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function destroy($id)
    {
        $perm = Permission::find($id);
        $perm->delete();

        $arr = [
           'status' => true,
           'message' =>'Quyền đã được xóa',
           'data' => [],
        ];
        
        return response()->json($arr, 200, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }
}