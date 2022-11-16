<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Import;
use App\Http\Resources\Import as ImportResource;

class ImportController extends Controller
{
    public function index(){
        $import = Import::all();
        $arr = [
        'status' => true,
        'message' => "Danh sách phiếu nhập",
        'data'=>ImportResource::collection($import)
        ];
        return response()->json($arr, 200, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function store(Request $request) {
        $input = $request->all(); 
        $validator = Validator::make($input, [
          'staff_id' => 'required',
          'partner_id' => 'required',
          'total_cost' => 'required',
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
        $import = Import::create($input);
        $arr = ['status' => true,
           'message'=>"Thông tin phiếu nhập đã lưu thành công",
           'data'=> new ImportResource($import)
        ];
        return response()->json($arr, 201, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function show($id) {
        $import = Import::find($id);
        if (is_null($import)) {
           $arr = [
             'success' => false,
             'message' => 'Không có phiếu nhập này',
             'dara' => []
           ];
           return response()->json($arr, 200, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
        }
        $arr = [
          'status' => true,
          'message' => "Thông tin phiếu nhập",
          'data'=> new ImportResource($import)
        ];
        return response()->json($arr, 201, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function update(Request $request, $id){
        $import = Import::find($id);
        $input = $request->all();
        $validator = Validator::make($input, [
            'staff_id' => 'required',
            'partner_id' => 'required',
            'total_cost' => 'required',
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
        $import->staff_id = $input['staff_id'];
        $import->partner = $input['partner_id'];
        $import->total_cost = $input['total_cost'];
        $import->status = $input['status'];
        $import->save();
        $arr = [
          'status' => true,
          'message' => 'Phiếu nhập cập nhật thành công',
          'data' => new ImportResource($import)
        ];
        return response()->json($arr, 200, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function destroy($id){
        $import = Import::find($id);
        $import->delete();
        $arr = [
           'status' => true,
           'message' =>'Phiếu nhập đã được xóa',
           'data' => [],
        ];
        return response()->json($arr, 200, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }
}