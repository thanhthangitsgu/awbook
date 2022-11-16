<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\PromotionDetail;
use App\Http\Resources\PromotionDetail as PromotionDetailResource;

class PromotionDetailController extends Controller
{
    public function index(){
        $detail = PromotionDetail::all();
        $arr = [
        'status' => true,
        'message' => "Danh sách chi tiết khuyến mãi",
        'data'=>PromotionDetailResource::collection($detail)
        ];
        return response()->json($arr, 200, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function store(Request $request) {
        $input = $request->all(); 
        $validator = Validator::make($input, [
          'promo_id' => 'required',
          'book_id' => 'required',
          'discount' => 'required',
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
        $detail = PromotionDetail::create($input);
        $arr = ['status' => true,
           'message'=>"Chi tiết khuyến mãi đã lưu thành công",
           'data'=> new PromotionDetailResource($detail)
        ];
        return response()->json($arr, 201, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function show(Request $request) {
        $input = $request->all(); 
        $validator = Validator::make($input, [
            'promo_id' => 'required',
            'book_id' => 'required',
          ]);
          if($validator->fails()){
             $arr = [
               'success' => false,
               'message' => 'Lỗi kiểm tra dữ liệu',
               'data' => $validator->errors()
             ];
             return response()->json($arr, 200, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
          }
        $detail = PromotionDetail::where('promo_id', $input['promo_id'])->where('book_id', $input['book_id'])->first();
        if (is_null($detail)) {
           $arr = [
             'success' => false,
             'message' => 'Không có chi tiết khuyến mãi này',
             'dara' => []
           ];
           return response()->json($arr, 200, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
        }
        $arr = [
          'status' => true,
          'message' => "Chi tiết khuyến mãi",
          'data'=> new PromotionDetailResource($detail)
        ];
        return response()->json($arr, 201, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function update(Request $request){
        $input = $request->all();
        $validator = Validator::make($input, [
            'promo_id' => 'required',
            'book_id' => 'required',
            'discount' => 'required',
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
        $detail = PromotionDetail::where('promo_id', $input['promo_id'])->where('book_id', $input['book_id'])->first();
        $detail->discount = $input['discount'];
        $detail->status = $input['status'];
        PromotionDetail::where('promo_id', $input['promo_id'])->where('book_id', $input['book_id'])->update([
          'discount' => $detail->discount,
          'status' => $detail->status,
        ]);
        $arr = [
          'status' => true,
          'message' => 'Chi tiết khuyến mãi cập nhật thành công',
          'data' => new PromotionDetailResource($detail)
        ];
        return response()->json($arr, 200, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function destroy(Request $request){
        $input = $request->all(); 
        $validator = Validator::make($input, [
            'promo_id' => 'required',
            'book_id' => 'required',
          ]);
          if($validator->fails()){
             $arr = [
               'success' => false,
               'message' => 'Lỗi kiểm tra dữ liệu',
               'data' => $validator->errors()
             ];
             return response()->json($arr, 200, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
          }
        PromotionDetail::where('promo_id', $input['promo_id'])->where('book_id', $input['book_id'])->delete();
        $arr = [
           'status' => true,
           'message' =>'Chi tiết khuyến mãi đã được xóa',
           'data' => [],
        ];
        return response()->json($arr, 200, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }
}