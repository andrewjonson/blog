<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    public function login(Request $request) {
        $validate = $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        if (!auth()->attempt($validate)) {
            return response()->json(['message' => 'Invalid Credentials']);
        }

        $user = auth()->user();
        $appToken = $user->createToken('appToken')->plainTextToken;

        return response()->json(['user' => $user, 'appToken' => $appToken]);
    }
}
