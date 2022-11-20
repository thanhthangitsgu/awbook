<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\ImportDetail;
use App\Models\Import;
use App\Models\Book;
use App\Http\Resources\ImportDetail as ImportDetailResource;


class ImportDetailController extends Controller
{
    public function index()
    {
        $detail = ImportDetail::all();

        $arr = [
        'status' => true,
        'message' => "Danh sách chi tiết phiếu nhập",
        'data'=>ImportDetailResource::collection($detail)
        ];
        
        return response()->json($arr, 200, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function store(Request $request) 
    {
        $input = $request->all(); 

        $validator = Validator::make($input, [
          'import_id' => 'required',
          'book_id' => 'required',
          'amount' => 'required',
          'price' => 'required',        
        ]);

        if($validator->fails()){
           $arr = [
             'success' => false,
             'message' => 'Lỗi kiểm tra dữ liệu',
             'data' => $validator->errors()
           ];
           return response()->json($arr, 200, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
        }
        
        $import_detail = ImportDetail::where('import_id', $input['import_id'])->where('book_id', $input['book_id'])->first();
        
        if(isset($import_detail)){
          $arr = [
            'success' => false,
            'message' => 'Chi tiết phiếu nhập đã tồn tại',
            'data' => $validator->errors()
          ];
          return response()->json($arr, 200, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
        }
        
        $input['status']=1;
        $import = Import::where('id', $input['import_id'])->first();
        $book = Book::where('id', $input['book_id'])->first();
        $detail = ImportDetail::create($input);

        Import::where('id', $input['import_id'])->update([
          'total_cost' => $import['total_cost'] + $input['amount']*$input['price'],
        ]);

        Book::where('id', $input['book_id'])->update([
          'amount' => $book['amount'] + $input['amount'],
        ]);
        
        $arr = ['status' => true,
           'message'=>"Chi tiết phiếu nhập đã lưu thành công",
           'data'=> new ImportDetailResource($detail)
        ];
        
        return response()->json($arr, 201, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function show($id) 
    {
      $detail = ImportDetail::where('import_id', $id)->get();

      $arr = [
        'status' => true,
        'message' => "Chi tiết phiếu nhập",
        'data'=> ImportDetailResource::collection($detail)
      ];
      
      return response()->json($arr, 200, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function update(Request $request)
    {
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
        $import = Import::where('id', $input['import_id'])->first();
        $book = Book::where('id', $input['book_id'])->first();

        Import::where('id', $input['import_id'])->update([
          'total_cost' => $import['total_cost'] + $input['amount']*$input['price'] - $detail['amount']*$detail['price'],
        ]);

        Book::where('id', $input['book_id'])->update([
          'amount' => $book['amount'] + $input['amount'] - $detail['amount'],
        ]);

        if(isset($input['amount']))
          $detail->amount = $input['amount'];

        if(isset($input['price']))
          $detail->price = $input['price'];

        if(isset($input['status']))
          $detail->status = $input['status'];

        ImportDetail::where('import_id', $input['import_id'])->where('book_id', $input['book_id'])->update([
          'amount' => $detail->amount,
          'price' => $detail->price,
          'status' => $detail->status
        ]);

        $arr = [
          'status' => true,
          'message' => 'Chi tiết phiếu nhập cập nhật thành công',
          'data' => new ImportDetailResource($detail)
        ];
        return response()->json($arr, 200, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function destroy(Request $request)
    {
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
        $import = Import::where('id', $input['import_id'])->first();
        $book = Book::where('id', $input['book_id'])->first();

        Import::where('id', $input['import_id'])->update([
          'total_cost' => $import['total_cost'] - $detail['amount']*$detail['price'],
        ]);

        Book::where('id', $input['book_id'])->update([
          'amount' => $book['amount'] - $detail['amount'],
        ]);
        
        ImportDetail::where('import_id', $input['import_id'])->where('book_id', $input['book_id'])->delete();
        
        $arr = [
           'status' => true,
           'message' =>'Chi tiết phiếu nhập đã được xóa',
           'data' => [],
        ];
        
        return response()->json($arr, 200, ['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }
}