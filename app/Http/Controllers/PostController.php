<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Post;

class PostController extends Controller
{
    
    public function index()
    {
        return Inertia::render('Post/Index', [
            'post' => Post::with('user')->paginate(3)
        ]);
    }



}
