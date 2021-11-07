<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

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
}
