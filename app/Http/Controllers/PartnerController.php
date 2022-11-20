<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Partner;
use App\Http\Resources\Partner as PartnerResource;

class PartnerController extends Controller
{
    public function index()
    {
        $partner = Partner::all();

        $arr = [
        'status' => true,
        'message' => "Danh sách đối tác",
        'data'=>PartnerResource::collection($partner)
        ];
        
        return response()->json($arr, 200, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function store(Request $request) 
    {
        $input = $request->all(); 

        $validator = Validator::make($input, [
          'name' => 'required',
          'type' => 'required',
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
        $partner = Partner::create($input);

        $arr = ['status' => true,
           'message'=>"Thông tin đối tác đã lưu thành công",
           'data'=> new PartnerResource($partner)
        ];

        return response()->json($arr, 201, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function show($id) 
    {
        $partner = Partner::find($id);

        if (is_null($partner)) {
           $arr = [
             'success' => false,
             'message' => 'Không có đối tác này',
             'dara' => []
           ];
           return response()->json($arr, 200, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
        }

        $arr = [
          'status' => true,
          'message' => "Chi tiết thông tin đối tác",
          'data'=> new PartnerResource($partner)
        ];

        return response()->json($arr, 201, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function update(Request $request, $id)
    {
        $partner = Partner::find($id);
        $input = $request->all();

        if(isset($input['name']))
          $partner->name = $input['name'];

        if(isset($input['type']))
          $partner->type = $input['type'];

        if(isset($input['discount']))
        $partner->discount = $input['discount'];

        if(isset($input['status']))
          $partner->status = $input['status'];

        $partner->save();

        $arr = [
          'status' => true,
          'message' => 'Thông tin đối tác cập nhật thành công',
          'data' => new PartnerResource($partner)
        ];
        
        return response()->json($arr, 200, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function destroy($id)
    {
        $partner = Partner::find($id);
        $partner->delete();

        $arr = [
           'status' => true,
           'message' =>'Đối tác đã được xóa',
           'data' => [],
        ];
        
        return response()->json($arr, 200, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }
}