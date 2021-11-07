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
});

Route::get('/register', function () {
    return Inertia::render('Register');
});

Route::get('/forgot', function () {
    return Inertia::render('ForgotPassword');
});

// Route Dashboard
Route::get('/dashboard', function () {
    return Inertia::render('dashboard/Dashboard');
});

Route::get('/user', function () {
    return Inertia::render('dashboard/Profil');
});

Route::get('/teman', function () {
    return Inertia::render('dashboard/TemanBelajar');
});

Route::get('/profil', function () {
    return Inertia::render('dashboard/Profil');
});

Route::get('/forum', function () {
    return Inertia::render('dashboard/ForumDiskusi');
});
