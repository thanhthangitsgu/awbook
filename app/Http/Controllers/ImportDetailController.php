<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\ImportDetail;
use App\Http\Resources\ImportDetail as ImportDetailResource;

class ImportDetailController extends Controller
{
    public function index(){
        $detail = ImportDetail::all();
        $arr = [
        'status' => true,
        'message' => "Danh sách chi tiết phiếu nhập",
        'data'=>ImportDetailResource::collection($detail)
        ];
        return response()->json($arr, 200, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function store(Request $request) {
        $input = $request->all(); 
        $validator = Validator::make($input, [
          'import_id' => 'required',
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
        $detail = ImportDetail::create($input);
        $arr = ['status' => true,
           'message'=>"Chi tiết phiếu nhập đã lưu thành công",
           'data'=> new ImportDetailResource($detail)
        ];
        return response()->json($arr, 201, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function show(Request $request) {
        $input = $request->all(); 
        $validator = Validator::make($input, [
            'import_id' => 'required',
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
        $detail = ImportDetail::where('import_id', $input['import_id'])->where('book_id', $input['book_id'])->first();
        if (is_null($detail)) {
           $arr = [
             'success' => false,
             'message' => 'Không có chi tiết phiếu nhập này',
             'dara' => []
           ];
           return response()->json($arr, 200, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
        }
        $arr = [
          'status' => true,
          'message' => "Chi tiết phiếu nhập",
          'data'=> new ImportDetailResource($detail)
        ];
        return response()->json($arr, 201, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function update(Request $request){
        $input = $request->all();
        $validator = Validator::make($input, [
            'import_id' => 'required',
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
        $detail = ImportDetail::where('import_id', $input['import_id'])->where('book_id', $input['book_id'])->first();
        $detail->amount = $input['amount'];
        $detail->price = $input['price'];
        $detail->status = $input['status'];
        ImportDetail::where('import_id', $input['import_id'])->where('book_id', $input['book_id'])->update([
          'amount' => $detail->amount,
          'price' => $detail->price,
          'status' => $detail->status,
        ]);
        $arr = [
          'status' => true,
          'message' => 'Chi tiết phiếu nhập cập nhật thành công',
          'data' => new ImportDetailResource($detail)
        ];
        return response()->json($arr, 200, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function destroy(Request $request){
        $input = $request->all(); 
        $validator = Validator::make($input, [
            'import_id' => 'required',
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
        ImportDetail::where('import_id', $input['import_id'])->where('book_id', $input['book_id'])->delete();
        $arr = [
           'status' => true,
           'message' =>'Chi tiết phiếu nhập đã được xóa',
           'data' => [],
        ];
        return response()->json($arr, 200, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }
}