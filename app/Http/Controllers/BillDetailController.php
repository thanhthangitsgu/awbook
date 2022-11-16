<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\BillDetail;
use App\Http\Resources\BillDetail as BillDetailResource;

class BillDetailController extends Controller
{
    public function index(){
        $detail = BillDetail::all();
        $arr = [
        'status' => true,
        'message' => "Danh sách chi tiết hóa đơn",
        'data'=>BillDetailResource::collection($detail)
        ];
        return response()->json($arr, 200, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function store(Request $request) {
        $input = $request->all(); 
        $validator = Validator::make($input, [
          'bill_id' => 'required',
          'book_id' => 'required',
          'amount' => 'required',
          'price' => 'required',
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
        $detail = BillDetail::create($input);
        $arr = ['status' => true,
           'message'=>"Chi tiết hóa đơn đã lưu thành công",
           'data'=> new BillDetailResource($detail)
        ];
        return response()->json($arr, 201, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function show(Request $request) {
        $input = $request->all(); 
        $validator = Validator::make($input, [
            'bill_id' => 'required',
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
        $detail = BillDetail::where('bill_id', $input['bill_id'])->where('book_id', $input['book_id'])->first();
        if (is_null($detail)) {
           $arr = [
             'success' => false,
             'message' => 'Không có chi tiết hóa đơn này',
             'dara' => []
           ];
           return response()->json($arr, 200, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
        }
        $arr = [
          'status' => true,
          'message' => "Chi tiết hóa đơn",
          'data'=> new BillDetailResource($detail)
        ];
        return response()->json($arr, 201, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function update(Request $request){
        $input = $request->all();
        $validator = Validator::make($input, [
            'bill_id' => 'required',
            'book_id' => 'required',
            'amount' => 'required',
            'price' => 'required',
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
        $detail = BillDetail::where('bill_id', $input['bill_id'])->where('book_id', $input['book_id'])->first();
        $detail->status = $input['status'];
        BillDetail::where('bill_id', $input['bill_id'])->where('book_id', $input['book_id'])->update([
            'amount' => $detail->amount,
            'price' => $detail->price,
            'status' => $detail->status,
        ]);
        $arr = [
          'status' => true,
          'message' => 'Chi tiết hóa đơn cập nhật thành công',
          'data' => new BillDetailResource($detail)
        ];
        return response()->json($arr, 200, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function destroy(Request $request){
        $input = $request->all(); 
        $validator = Validator::make($input, [
            'bill_id' => 'required',
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
        BillDetail::where('bill_id', $input['bill_id'])->where('book_id', $input['book_id'])->delete();
        $arr = [
           'status' => true,
           'message' =>'Chi tiết hóa đơn đã được xóa',
           'data' => [],
        ];
        return response()->json($arr, 200, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }
}