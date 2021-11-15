<?php

use App\Http\Controllers\DiscussionController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\PageController;
use App\Models\Discussion;

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

    Route::get('/dashboard', function () {
        return Inertia::render('dashboard/Dashboard');
    })->name("dashboard");

    Route::get('/user', function () {
        return Inertia::render('dashboard/Profil');
    })->name("profil");

    Route::get('/user/edit', function () {
        return Inertia::render('dashboard/Edit');
    })->name("user.edit");


    Route::get('/teman', function () {
        return Inertia::render('dashboard/TemanBelajar');
    })->name("teman");

    // route sementara forum diskusi
    Route::get('/forum', [DiscussionController::class, 'index'])->name('forum');
    Route::get('/forum/details', function () {
        return Inertia::render('dashboard/forum/DetailsForum');
    })->name('forum.detail');
    Route::get('/forum/edit', function () {
        return Inertia::render('dashboard/forum/EditForum');
    })->name('forum.edit');
    Route::get('/forum/create', function () {
        return Inertia::render('dashboard/forum/CreateForum');
    })->name('forum.create');
    Route::post('/forum/post', [DiscussionController::class, 'store'])->name('forum.post');
    Route::get('/forum/my', function () {
        return Inertia::render('dashboard/forum/MyForum');
    })->name('forum.my');
});
