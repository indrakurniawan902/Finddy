<?php

use App\Http\Controllers\DiscussionController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\PageController;
use App\Models\Discussion;
use App\Http\Controllers\UserController;
use App\Http\Controllers\FriendController;
use App\Http\Controllers\ReplyController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [PageController::class, 'index'])->name("home");
Route::get('/bantuan', [PageController::class, 'bantuan'])->name("home.bantuan");

// Route Auth
Route::get('/login', function () {
    return Inertia::render('Login');
})->name('login');

Route::get('/register', function () {
    return Inertia::render('Register');
})->name("register");

Route::get('/forgot', function () {
    return Inertia::render('ForgotPassword');
})->name("forgot.password");

Route::get('/complete-data', function () {
    return Inertia::render('CompleteData');
})->name("completedata");

// Route Dashboard

Route::middleware(['auth', 'verified'])->group(function () {
    Route::resource('user', UserController::class);
    Route::middleware(['completedata'])->group(function () {
        Route::get('/dashboard', [PageController::class, 'dashboard'])->name("dashboard");

        Route::get('/user', function () {
            return Inertia::render('dashboard/Profil');
        })->name("profil");


        // route sementara forum diskusi
        Route::get('/forum', [DiscussionController::class, 'index'])->name('forum');;
        Route::get('/forum/create', function () {
            return Inertia::render('dashboard/forum/CreateForum');
        })->name('forum.create');
        Route::get('/forum/edit/{id}', [DiscussionController::class, 'show'])->name('forum.edit');
        Route::delete('/forum/delete/{id}', [DiscussionController::class, 'destroy'])->name('forum.delete');
        Route::put('/forum/accept/{id}', [DiscussionController::class, 'accept'])->name('forum.accept');
        Route::put('/forum/update/{id}', [DiscussionController::class, 'update'])->name('forum.update');
        Route::post('/forum/post', [DiscussionController::class, 'store'])->name('forum.post');
        Route::get('/forum/my', [DiscussionController::class, 'showForum'])->name('forum.my');
        Route::get('/forum/detail/{id}', [DiscussionController::class, 'details'])->name('forum.detail');
        Route::get('/forum/search', [DiscussionController::class, 'search'])->name('forum.search');

        // route friend
        Route::post('/add/{id}', [FriendController::class, 'add'])->name("add.friend");
        Route::post('/acc/{id}', [FriendController::class, 'accept'])->name("acc.friend");
        Route::post('/deny/{id}', [FriendController::class, 'deny'])->name("deny.friend");
        Route::get('/teman', [FriendController::class, 'index'])->name("friend");
        Route::get('/teman/request', [FriendController::class, 'request'])->name("friend.request");
        Route::get('/teman/search', [FriendController::class, 'search'])->name('friend.search');

        //route replies
        Route::post('/reply', [ReplyController::class, 'create'])->name("add.reply");
    });
});
