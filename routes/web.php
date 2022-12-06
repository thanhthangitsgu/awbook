<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('index');
});
Route::get('/book', function(){
    return view('index');
});
Route::get('/admin', function(){
    return view('index');
});
Route::get('/admin/{id}', function(){
    return view('index');
});
Route::get('/admin/{obj}/{id}', function(){
    return view('index');
});
Route::get('/book/{id}', function(){
    return view('index');
});
Route::get('/detail/{id}', function(){
    return view('index');
});
Route::get('/cart', function(){
    return view('index');
});
Route::get('/payment', function(){
    return view('index');
});
Route::get('/bill', function(){
    return view('index');
});
Route::get('/bill/{id}', function(){
    return view('index');
});
Route::get('/customer', function(){
    return view('index');
});
Route::get('/customer/{action}', function(){
    return view('index');
});
Route::get('/customer/{action}/{id}', function(){
    return view('index');
});


