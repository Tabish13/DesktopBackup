<?php

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
    return view('welcome');
});

Route::group(['prefix' => 'admin'], function(){

  Route::resource('product', 'ProductsController');
  Route::resource('category', 'CategoriesController');
});


Route::get('/admin', 'AdminController@index')->name('admin');

Route::get('/admin/login', 'Auth\AdminLoginController@showLoginForm')->name('admin.login');

Route::post('/admin/login', 'Auth\AdminLoginController@login');
Auth::routes();


Route::get('/home', 'HomeController@index')->name('home');
