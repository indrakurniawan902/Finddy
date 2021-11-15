<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

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

        if ($user->username === null) {
            return Inertia::render('CompleteData');
            // return Inertia::render('dashboard/Dashboard');
        } else {
            return Inertia::render('dashboard/Dashboard');
        }
    }
}
