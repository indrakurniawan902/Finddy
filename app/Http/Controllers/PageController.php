<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class PageController extends Controller
{
    public function index()
    {
        return Inertia::render('Home');
    }

    public function bantuan()
    {
        return Inertia::render('Bantuan');
    }

    public function dashboard()
    {
        $user = Auth::user();

        $friends = User::find($user->id)->getFriends();
        $friendsRe   = User::find($user->id)->getFriendRequests();
        return Inertia::render('dashboard/Dashboard', [
            'count' => [
                "friends" => $user->getFriendsCount(),
                "requests" => count($friendsRe),
                "discussions" => count($user->discussions),
            ],
            // buat mereturn user selain dari user yang log in
            'users' => User::all()->except($user->id)->map(function ($user) {
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
            'friends' => $friends->map(function ($user) {
                return [
                    'id' => $user->id,
                    'nama_lengkap' => $user->nama_lengkap,
                    'username' => $user->username,
                    'bidang_minat' => $user->bidang_minat,
                    'foto' => $user->foto_profil,
                ];
            }),
            // mereturn permintaan pertemanan
            'request' => $friendsRe->map(function ($req) {
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
}
