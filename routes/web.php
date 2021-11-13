<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\PageController;

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

// Route Dashboard

Route::middleware(['auth', 'verified'])->group(function () {

    Route::get('/dashboard', function () {
        return Inertia::render('dashboard/Dashboard');
    })->name("dashboard");

    Route::get('/user', function () {
        return Inertia::render('dashboard/Profil');
    })->name("profil");

    Route::get('/teman', function () {
        return Inertia::render('dashboard/TemanBelajar');
    })->name("teman");

    // route sementara forum diskusi
    Route::get('/forum', function () {
        return Inertia::render('dashboard/ForumDiskusi');
    })->name('forum');
    Route::get('/forum/details', function () {
        return Inertia::render('dashboard/forum/DetailsForum');
    })->name('forum.detail');
    Route::get('/forum/edit', function () {
        return Inertia::render('dashboard/forum/EditForum');
    })->name('forum.edit');
    Route::get('/forum/create', function () {
        return Inertia::render('dashboard/forum/CreateForum');
    })->name('forum.create');
    Route::get('/forum/my', function () {
        return Inertia::render('dashboard/forum/MyForum');
    })->name('forum.my');
});
