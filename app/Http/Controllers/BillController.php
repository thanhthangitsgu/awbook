<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Bill;
use App\Http\Resources\Bill as BillResource;

class BillController extends Controller
{
    public function index()
    {
        $bill = Bill::all();

        $arr = [
        'status' => true,
        'message' => "Danh sách hóa đơn",
        'data'=>BillResource::collection($bill)
        ];
        
        return response()->json($arr, 200, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function store(Request $request) 
    {
        $input = $request->all(); 

        $validator = Validator::make($input, [
          'customer_id' => 'required',
          'payment_id' => 'required',
          'partner_id' => 'required',
          'ship_code' => 'required',
          'ship_charges' => 'required',
        ]);
        
        if($validator->fails()){
           $arr = [
             'success' => false,
             'message' => 'Lỗi kiểm tra dữ liệu',
             'data' => $validator->errors()
           ];
           return response()->json($arr, 200, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
        }

        $input['status'] = 1;
        $input['total_cost'] = 0;
        $input['promotion'] = 0;
        $bill = Bill::create($input);

        $arr = ['status' => true,
           'message'=>"Hóa đơn đã lưu thành công",
           'data'=> new BillResource($bill)
        ];
        return response()->json($arr, 201, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
        
    }

    public function show($id) 
    {
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

    public function update(Request $request, $id)
    {
        $bill = Bill::find($id);
        $input = $request->all();

        if(isset($input['customer_id']))
          $bill->customer_id = $input['customer_id'];

        if(isset($input['payment_id']))
          $bill->payment_id = $input['payment_id'];

        if(isset($input['partner_id']))
          $bill->partner_id = $input['partner_id'];

        if(isset($input['ship_code']))
          $bill->ship_code = $input['ship_code'];

        if(isset($input['total_cost']))
          $bill->total_cost = $input['total_cost'];

        if(isset($input['promotion']))
          $bill->promotion = $input['promotion'];

        if(isset($input['ship_charges']))
          $bill->ship_charges = $input['ship_charges'];

        if(isset($input['status']))
          $bill->status = $input['status'];
          
        $bill->save();
        
        $arr = [
          'status' => true,
          'message' => 'Hóa đơn cập nhật thành công',
          'data' => new BillResource($bill)
        ];
        
        return response()->json($arr, 200, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function destroy($id)
    {
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