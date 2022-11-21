<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\BillDetail;
use App\Models\Book;
use App\Models\Bill;
use App\Http\Resources\BillDetail as BillDetailResource;

class BillDetailController extends Controller
{
    public function index()
    {
        $detail = BillDetail::all();

        $arr = [
        'status' => true,
        'message' => "Danh sách chi tiết hóa đơn",
        'data'=>BillDetailResource::collection($detail)
        ];
        
        return response()->json($arr, 200, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function store(Request $request) 
    {
        $input = $request->all(); 

        $validator = Validator::make($input, [
          'bill_id' => 'required',
          'book_id' => 'required',
          'amount' => 'required',
          'price' => 'required',
          'cost' => 'required'
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
        $detail = BillDetail::create($input);

        $book = Book::where('id', $input['book_id'])->first();
        $bill = Bill::where('id', $input['bill_id'])->first();

        Book::where('id', $input['book_id'])->update([
          'amount' => $book['amount'] - $input['amount'],
        ]);

        Bill::where('id', $input['bill_id'])->update([
          'total_cost' => $bill['total_cost'] + $input['amount'] * $input['price'],
          'promotion' => $bill['promotion'] + $input['amount'] * ($input['cost']-$input['price'])
        ]);
        
        $arr = ['status' => true,
           'message'=>"Chi tiết hóa đơn đã lưu thành công",
           'data'=> new BillDetailResource($detail)
        ];
        
        return response()->json($arr, 201, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function show($id) 
    {
        $detail = BillDetail::where('bill_id', $id)->get();
      
        $arr = [
          'status' => true,
          'message' => "Chi tiết hóa đơn",
          'data'=> BillDetailResource::collection($detail)
        ];
        return response()->json($arr, 200, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function update(Request $request)
    {
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
        $book = Book::where('id', $input['book_id'])->first();
        $bill = Bill::where('id', $input['bill_id'])->first();
        
        Book::where('id', $input['book_id'])->update([
          'amount' => $book['amount'] - $input['amount'] + $detail['amount'],
        ]);

        Bill::where('id', $input['bill_id'])->update([
          'total_cost' => $bill['total_cost'] + $input['amount']*$input['price'] - $detail['amount']*$detail['price'],
          'promotion' => $bill['promotion'] + $input['amount'] * ($input['cost']-$input['price']) - $detail['amount'] * ($detail['cost']-$detail['price'])
        ]);
        
        if(isset($input['amount']))
          $detail->amount = $input['amount'];

        if(isset($input['price']))
          $detail->price = $input['price'];
        
        if(isset($input['cost']))
          $detail->price = $input['cost'];

        if(isset($input['status']))
          $detail->status = $input['status'];
        
        BillDetail::where('bill_id', $input['bill_id'])->where('book_id', $input['book_id'])->update([
          'amount' => $detail->amount,
          'price' => $detail->price,
          'cost' => $detail->cost,
          'status' => $detail->status
        ]);
        
        $arr = [
          'status' => true,
          'message' => 'Chi tiết hóa đơn cập nhật thành công',
          'data' => new BillDetailResource($detail)
        ];

        return response()->json($arr, 200, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function destroy(Request $request)
    {
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
        $bill = Bill::where('id', $input['bill_id'])->first();
        $book = Book::where('id', $input['book_id'])->first();
        
        Bill::where('id', $input['bill_id'])->update([
          'total_cost' => $bill['total_cost'] - $detail['amount']*$detail['price'],
          'promotion' => $bill['promotion'] - $detail['amount'] * ($detail['cost']-$detail['price'])
        ]);

        Book::where('id', $input['book_id'])->update([
          'amount' => $book['amount'] + $detail['amount'],
        ]);
        
        BillDetail::where('bill_id', $input['bill_id'])->where('book_id', $input['book_id'])->delete();
        
        $arr = [
           'status' => true,
           'message' =>'Chi tiết hóa đơn đã được xóa',
           'data' => [],
        ];
        
        return response()->json($arr, 200, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }
}