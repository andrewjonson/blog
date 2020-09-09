<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::post('/login', 'Api\Auth\LoginController@login');
Route::post('/register', 'Api\Auth\RegisterController@register');

Route::middleware('auth:sanctum')->group(function() {
    Route::get('/user/currentUser', 'Api\UserController@currentUser');
    Route::post('/post/create', 'Api\PostController@create');
    Route::get('/post', 'Api\PostController@posts');
});


