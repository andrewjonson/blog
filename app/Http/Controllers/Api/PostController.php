<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Post;

class PostController extends Controller
{
    public function create(Request $request) {
        $request->validate([
            'post' => 'required'
        ]);

        $post = Post::create([
            'post' => $request->post,
            'user_id' => auth()->user()->id
        ]);

        return response()->json(['post' => $post]);
    }

    public function posts() {
        $posts = Post::orderBy('id', 'desc')->paginate(5);
        return response()->json(['posts', $posts]);
    }
}
