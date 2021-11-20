<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class FriendController extends Controller
{
    public function index()
    {
        //
    }

    public function add($id)
    {
        $user = Auth::user();
        $recipient = User::find($id);
        $user->befriend($recipient);
        return redirect()->back();
    }

    public function accept($id)
    {
        $user = Auth::user();
        $sender = User::find($id);
        $user->acceptFriendRequest($sender);
        return redirect()->back();
    }

    public function deny($id)
    {
        $user = Auth::user();
        $sender = User::find($id);
        $user->denyFriendRequest($sender);
        return redirect()->back();
    }
}
