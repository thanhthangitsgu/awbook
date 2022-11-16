<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PromotionController;
use App\Http\Controllers\PublisherController;
use App\Http\Controllers\PaymentMethodController;
use App\Http\Controllers\AuthorController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\PartnerController;
use App\Http\Controllers\BookTitleController;
use App\Http\Controllers\BookController;
use App\Http\Controllers\PromotionDetailController;
use App\Http\Controllers\PermissionController;
use App\Http\Controllers\PositionController;
use App\Http\Controllers\PermissionDetailController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ImportController;
use App\Http\Controllers\ImportDetailController;
use App\Http\Controllers\BillController;
use App\Http\Controllers\BillDetailController;
use App\Http\Controllers\BookCategoryController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::resource('promotion', PromotionController::class);
Route::resource('publisher', PublisherController::class);
Route::resource('payment-method', PaymentMethodController::class);
Route::resource('author', AuthorController::class);
Route::resource('category', CategoryController::class);
Route::resource('partner', PartnerController::class);
Route::resource('book-title', BookTitleController::class);
Route::resource('book', BookController::class);
Route::resource('promotion-detail', PromotionDetailController::class);
Route::resource('permission', PermissionController::class);
Route::resource('position', PositionController::class);
Route::resource('permission-detail', PermissionDetailController::class);
Route::resource('user', UserController::class);
Route::resource('import', ImportController::class);
Route::resource('import-detail', ImportDetailController::class);
Route::resource('bill', BillController::class);
Route::resource('bill-detail', BillDetailController::class);
Route::resource('book-category', BookCategoryController::class);