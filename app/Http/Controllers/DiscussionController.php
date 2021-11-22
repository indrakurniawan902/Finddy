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
        return Inertia::render('dashboard/ForumDiskusi', [
            'discussions' => Discussion::all()->map(function ($discussion) {
                return [
                    'id' => $discussion->id,
                    'title' => $discussion->title,
                    'body' => $discussion->body,
                    'time' => $discussion->created_at->diffForHumans(),
                    'author' => $discussion->user->username,
                    // 'totalResponse' => $discussion->a,
                    // 'authorLink' => $discussion->a,
                    // 'detailLink' => $discussion->a,
                    // 'edit_url' => URL::route('users.edit', $user),
                ];
            }),
        ]);
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
    public function show(Discussion $id)
    {
        $discussion = Discussion::find($id)->first();
        return Inertia::render('dashboard/forum/EditForum', [
            'id' => $discussion->id,
            'title' => $discussion->title,
            'body' => $discussion->body,
        ]);
    }

    public function details(Discussion $id)
    {
        $discussion = Discussion::find($id);
        return Inertia::render('dashboard/forum/DetailsForum', [
            'details' => $discussion
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
                    // 'totalResponse' => $discussion->a,
                    // 'authorLink' => $discussion->a,
                    // 'detailLink' => $discussion->a,
                    // 'edit_url' => URL::route('users.edit', $user),
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
    public function edit(Discussion $id)
    {
        // dd($id->all());
        $Discussions = Discussion::find($id);
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
        return Redirect::route('forum.my');
    }
}
