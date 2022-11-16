<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Bill;
use App\Http\Resources\Bill as BillResource;

class BillController extends Controller
{
    public function index(){
        $bill = Bill::all();
        $arr = [
        'status' => true,
        'message' => "Danh sách hóa đơn",
        'data'=>BillResource::collection($bill)
        ];
        return response()->json($arr, 200, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function store(Request $request) {
        $input = $request->all(); 
        $validator = Validator::make($input, [
          'customer_id' => 'required',
          'payment_id' => 'required',
          'partner_id' => 'required',
          'ship_code' => 'required',
          'total_cost' => 'required',
          'promotion' => 'required',
          'ship_charges' => 'required',
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
        $bill = Bill::create($input);
        $arr = ['status' => true,
           'message'=>"Hóa đơn đã lưu thành công",
           'data'=> new BillResource($bill)
        ];
        return response()->json($arr, 201, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function show($id) {
        $bill = Bill::find($id);
        if (is_null($bill)) {
           $arr = [
             'success' => false,
             'message' => 'Không có hóa đơn này',
             'dara' => []
           ];
           return response()->json($arr, 200, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
        }
        $arr = [
          'status' => true,
          'message' => "Thông tin hóa đơn",
          'data'=> new BillResource($bill)
        ];
        return response()->json($arr, 201, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function update(Request $request, $id){
        $bill = Bill::find($id);
        $input = $request->all();
        $validator = Validator::make($input, [
            'customer_id' => 'required',
            'payment_id' => 'required',
            'partner_id' => 'required',
            'ship_code' => 'required',
            'total_cost' => 'required',
            'promotion' => 'required',
            'ship_charges' => 'required',
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
        $bill->customer_id = $input['customer_id'];
        $bill->payment_id = $input['payment_id'];
        $bill->partner_id = $input['partner_id'];
        $bill->ship_code = $input['ship_code'];
        $bill->total_cost = $input['total_cost'];
        $bill->promotion = $input['promotion'];
        $bill->ship_charges = $input['ship_charges'];
        $bill->status = $input['status'];
        $bill->save();
        $arr = [
          'status' => true,
          'message' => 'Hóa đơn cập nhật thành công',
          'data' => new BillResource($bill)
        ];
        return response()->json($arr, 200, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function destroy($id){
        $bill = Bill::find($id);
        $bill->delete();
        $arr = [
           'status' => true,
           'message' =>'Hóa đơn đã được xóa',
           'data' => [],
        ];
        return response()->json($arr, 200, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }
}