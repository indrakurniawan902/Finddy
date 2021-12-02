<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\URL;
use Inertia\Inertia;
use App\Models\Discussion;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use App\Http\Middleware\HandleInertiaRequests;
use Illuminate\Support\Facades\Auth;


class DiscussionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = Auth::user();
        if ($user->role == 1) {
            return Inertia::render('dashboard/Admin', [
                'discussions' => Discussion::all()->map(function ($discussion) {
                    return [
                        'id' => $discussion->id,
                        'title' => $discussion->title,
                        'body' => $discussion->body,
                        'time' => $discussion->created_at->diffForHumans(),
                        'author' => $discussion->user->username,
                        'totalResponse' => count($discussion->replies),
                        'original_time' => $discussion->created_at,
                        'isAdmit' =>  $discussion->is_admit,
                    ];
                }),
            ]);
        } else {
            return Inertia::render('dashboard/ForumDiskusi', [
                'discussions' => Discussion::where('is_admit', 1)->get()->map(function ($discussion) {
                    return [
                        'id' => $discussion->id,
                        'title' => $discussion->title,
                        'body' => $discussion->body,
                        'time' => $discussion->created_at->diffForHumans(),
                        'author' => $discussion->user->username,
                        'totalResponse' => count($discussion->replies),
                        'original_time' => $discussion->created_at,
                    ];
                }),
            ]);
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $post = $this->validate($request, [
            'user_id' => 'required',
            'title' => 'required',
            'body' => 'required',
        ]);
        Discussion::Create($post);
        return Redirect::route('forum');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Discussion  $discussion
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $discussion = Discussion::where('id', $id)->get()->first();
        return Inertia::render('dashboard/forum/EditForum', [
            'id' => $discussion->id,
            'title' => $discussion->title,
            'body' => $discussion->body,
        ]);
    }

    public function details($id)
    {
        $discussion = Discussion::where('id', $id)->get()->first();
        $replies = $discussion->replies;
        return Inertia::render('dashboard/forum/DetailsForum', [
            'details' => [
                'id' => $discussion->id,
                'title' => $discussion->title,
                'body' => $discussion->body,
                'time' => $discussion->created_at->diffForHumans(),
                'author' => $discussion->user->username,
                'totalResponse' => count($discussion->replies),
                'original_time' => $discussion->created_at,
            ],
            'replies' => $replies->map(function ($reply) {
                return [
                    'id' => $reply->id,
                    'content' => $reply->content,
                    'name' => $reply->user->nama_lengkap,
                    'username' => $reply->user->username,
                    'created_at' => $reply->created_at->diffForHumans(),
                    'profil' => $reply->user->foto_profil,
                ];
            }),
        ]);
    }

    public function showForum()
    {
        $user = Auth::user();
        $discussions = $user->discussions;
        return Inertia::render('dashboard/forum/MyForum', [
            'discussions' => $discussions->map(function ($discussion) {
                return [
                    'id' => $discussion->id,
                    'title' => $discussion->title,
                    'body' => $discussion->body,
                    'time' => $discussion->created_at->diffForHumans(),
                    'author' => $discussion->user->username,
                    'totalResponse' => count($discussion->replies),
                    'original_time' => $discussion->created_at,
                    'isAdmit' => $discussion->is_admit,
                ];
            }),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Discussion  $discussion
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $Discussions = Discussion::where('id', $id)->get()->first();
        return Inertia::render('EditForum', [
            'editDiscussions' => $Discussions
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Discussion  $discussion
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $put = $this->validate($request, [
            'title' => 'required',
            'body' => 'required'
        ]);
        Discussion::find($id)->update($put);
        return Redirect::route('forum.my');
    }

    public function search(Request $request)
    {
        $keyword = $request->keyword;
        $discussions = Discussion::where('title', 'like', "%" . $keyword . "%")->get();
        return Inertia::render('dashboard/ForumDiskusi', [
            'discussions' => $discussions->map(function ($discussion) {
                return [
                    'id' => $discussion->id,
                    'title' => $discussion->title,
                    'body' => $discussion->body,
                    'time' => $discussion->created_at->diffForHumans(),
                    'original_time' => $discussion->created_at,
                    'author' => $discussion->user->username,
                    'totalResponse' => count($discussion->replies),
                ];
            }),
            'keyword_value' => $keyword,
        ]);
    }

    public function accept($id)
    {
        $discussion = Discussion::find($id);
        $discussion->update(['is_admit' => 1]);
        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Discussion  $discussion
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $delete = Discussion::find($id);
        $delete->delete();
        return redirect()->back();
    }
}
