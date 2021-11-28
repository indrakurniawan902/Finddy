<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Reply;
use Illuminate\Facades\URL;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Auth;

class ReplyController extends Controller
{
    public function create(Request $request)
    {
        $post = $this->validate($request, [
            'user_id' => 'required',
            'discussion_id' => 'required',
            'content' => 'required',
        ]);
        Reply::Create($post);
        return redirect()->back();
    }
}
