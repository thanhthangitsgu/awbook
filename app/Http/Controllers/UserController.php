<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\User;
use App\Http\Resources\User as UserResource;

class UserController extends Controller
{
    public function index(){
        $user = User::all();
        $arr = [
        'status' => true,
        'message' => "Danh sách người dùng",
        'data'=>UserResource::collection($user)
        ];
        return response()->json($arr, 200, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function store(Request $request) {
        $input = $request->all(); 
        $validator = Validator::make($input, [
            'surname' => 'required', 
            'name' => 'required',
            'gender' => 'required',
            'date_of_birth' => 'required',
            'position_id' => 'required',
            'phone' => 'required',
            'address' => 'required',
            'email' => 'required',
            'password' => 'required',
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
        $user = User::create($input);
        $arr = ['status' => true,
           'message'=>"Thông tin người dùng đã lưu thành công",
           'data'=> new UserResource($user)
        ];
        return response()->json($arr, 201, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function show($id) {
        $user = User::find($id);
        if (is_null($user)) {
           $arr = [
             'success' => false,
             'message' => 'Không có người dùng này',
             'dara' => []
           ];
           return response()->json($arr, 200, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
        }
        $arr = [
          'status' => true,
          'message' => "Chi tiết thông tin người dùng",
          'data'=> new UserResource($user)
        ];
        return response()->json($arr, 201, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function update(Request $request, $id){
        $user = User::find($id);
        $input = $request->all();
        $validator = Validator::make($input, [
            'surname' => 'required', 
            'name' => 'required',
            'gender' => 'required',
            'date_of_birth' => 'required',
            'position_id' => 'required',
            'phone' => 'required',
            'address' => 'required',
            'email' => 'required',
            'password' => 'required',
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
        $user->surname = $input['surname'];
        $user->name = $input['name'];
        $user->gender = $input['gender'];
        $user->date_of_birt = $input['date_of_birth'];
        $user->position_id = $input['position_id'];
        $user->phone = $input['phone'];
        $user->address = $input['address'];
        $user->email = $input['email'];
        $user->password=$input['password'];
        $user->status = $input['status'];
        $user->save();
        $arr = [
          'status' => true,
          'message' => 'Thông tin người dùng cập nhật thành công',
          'data' => new UserResource($user)
        ];
        return response()->json($arr, 200, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function destroy($id){
        $user = User::find($id);
        $user->delete();
        $arr = [
           'status' => true,
           'message' =>'Người dùng đã được xóa',
           'data' => [],
        ];
        return response()->json($arr, 200, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }
}