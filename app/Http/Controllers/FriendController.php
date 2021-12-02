<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Models\Discussion;

class FriendController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        $friends = User::find($user->id)->getFriends();
        $countRequest   = count(User::find($user->id)->getFriendRequests());

        return Inertia::render('dashboard/TemanBelajar', [
            'friends' => $friends->map(function ($user) {
                return [
                    'id' => $user->id,
                    'nama_lengkap' => $user->nama_lengkap,
                    'username' => $user->username,
                    'bidang_minat' => $user->bidang_minat,
                    'foto' => $user->foto_profil,
                ];
            }),
            'count' => [
                'request' => $countRequest,
            ]
        ]);
    }

    public function request()
    {
        $user = Auth::user();
        $friendsRe   = User::find($user->id)->getFriendRequests();
        return Inertia::render('dashboard/teman/RequestsTeman', [
            'requests' => $friendsRe->map(function ($req) {
                $user = User::find($req->sender_id);
                return [
                    'id' => $user->id,
                    'nama_lengkap' => $user->nama_lengkap,
                    'username' => $user->username,
                    'bidang_minat' => $user->bidang_minat,
                    'foto' => $user->foto_profil,
                ];
            }),
        ]);
    }

    public function search(Request $request)
    {
        $keyword = $request->keyword;
        $users = User::where('bidang_minat', 'like', "%" . $keyword . "%")->get();
        return Inertia::render('dashboard/TemanBelajar', [
            'users_search' => $users->map(function ($user) {
                $isFriend = $user->isFriendWith(Auth::user());
                $hasSentRequest = Auth::user()->hasSentFriendRequestTo($user);
                $hasFriendRequest = Auth::user()->hasFriendRequestFrom($user);
                return [
                    'id' => $user->id,
                    'nama_lengkap' => $user->nama_lengkap,
                    'username' => $user->username,
                    'bidang_minat' => $user->bidang_minat,
                    'foto' => $user->foto_profil,
                    'isFriend' => $isFriend,
                    'isSent' => $hasSentRequest,
                    'isWait' => $hasFriendRequest
                ];
            }),
            'keyword_value' => $keyword,
        ]);
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
