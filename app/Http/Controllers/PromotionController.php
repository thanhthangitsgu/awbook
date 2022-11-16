<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Promotion;
use App\Http\Resources\Promotion as PromotionResource;

class PromotionController extends Controller
{
    public function index(){
        $promo = Promotion::all();
        $arr = [
        'status' => true,
        'message' => "Danh sách chương trình khuyến mãi",
        'data'=>PromotionResource::collection($promo)
        ];
        return response()->json($arr, 200, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function store(Request $request) {
        $input = $request->all(); 
        $validator = Validator::make($input, [
          'name' => 'required',
          'start_time' => 'required',
          'end_time'=>'required',
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
        $promo = Promotion::create($input);
        $arr = ['status' => true,
           'message'=>"Chương trình khuyến mãi đã lưu thành công",
           'data'=> new PromotionResource($promo)
        ];
        return response()->json($arr, 201, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function show($id) {
        $promo = Promotion::find($id);
        if (is_null($promo)) {
           $arr = [
             'success' => false,
             'message' => 'Không có chương trình khuyến mãi này',
             'dara' => []
           ];
           return response()->json($arr, 200, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
        }
        $arr = [
          'status' => true,
          'message' => "Chi tiết chương trình khuyến mãi",
          'data'=> new PromotionResource($promo)
        ];
        return response()->json($arr, 201, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function update(Request $request, $id){
        $promo = Promotion::find($id);
        $input = $request->all();
        $validator = Validator::make($input, [
          'name' => 'required',
          'start_time' => 'required',
          'end_time'=> 'required'
        ]);
        if($validator->fails()){
          $arr = [
            'success' => false,
            'message' => 'Lỗi kiểm tra dữ liệu',
            'data' => $validator->errors()
          ];
          return response()->json($arr, 200, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
        }
        $promo->name = $input['name'];
        $promo->start_time = $input['start_time'];
        $promo->end_time = $input['end_time'];
        $promo->status = $input['status'];
        $promo->save();
        $arr = [
          'status' => true,
          'message' => 'Nhà xuất bản cập nhật thành công',
          'data' => new PromotionResource($promo)
        ];
        return response()->json($arr, 200, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function destroy($id){
        $promo = Promotion::find($id);
        $promo->delete();
        $arr = [
           'status' => true,
           'message' =>'Chương trình khuyến mãi đã được xóa',
           'data' => [],
        ];
        return response()->json($arr, 200, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }
}