<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\PaymentMethod;
use App\Http\Resources\PaymentMethod as PaymentMethodResource;
use Faker\Provider\ar_EG\Payment;

class PaymentMethodController extends Controller
{
    public function index()
    {
        $pay = PaymentMethod::all();

        $arr = [
        'status' => true,
        'message' => "Danh sách phương thức thanh toán",
        'data'=>PaymentMethodResource::collection($pay)
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
        $pay = PaymentMethod::create($input);

        $arr = ['status' => true,
           'message'=>"Phương thức thanh toán đã lưu thành công",
           'data'=> new PaymentMethodResource($pay)
        ];
        
        return response()->json($arr, 201, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function show($id) 
    {
        $pay = PaymentMethod::find($id);

        if (is_null($pay)) {
           $arr = [
             'success' => false,
             'message' => 'Không có phương thức thanh toán này',
             'dara' => []
           ];
           return response()->json($arr, 200, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
        }

        $arr = [
          'status' => true,
          'message' => "Chi tiết phương thức thanh toán",
          'data'=> new PaymentMethodResource($pay)
        ];

        return response()->json($arr, 201, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function update(Request $request, $id)
    {
        $pay = PaymentMethod::find($id);
        $input = $request->all();

        if(isset($input['name']))
          $pay->name = $input['name'];

        if(isset($input['status']))
          $pay->status = $input['status'];

        $pay->save();

        $arr = [
          'status' => true,
          'message' => 'Phương thức thanh toán cập nhật thành công',
          'data' => new PaymentMethodResource($pay)
        ];

        return response()->json($arr, 200, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function destroy($id)
    {
        $pay = PaymentMethod::find($id);
        $pay->delete();

        $arr = [
           'status' => true,
           'message' =>'Phương thức thanh toán đã được xóa',
           'data' => [],
        ];
        
        return response()->json($arr, 200, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }
}