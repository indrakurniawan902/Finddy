<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Facades\URL;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
        $User = Auth::user();
        return Inertia::render('dashboard/Edit', [
            'editUser' => $User
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $type = gettype($request->foto_profil);
        if ($type === 'string') {
            $put = $this->validate($request, [
                'nama_lengkap' => 'required',
                'username' => 'required',
                'perguruan_tinggi' => 'required',
                'jurusan' => 'required',
                'bidang_minat' => 'required',
                'no_hp' => 'required',
                'instagram' => 'required',
            ]);
        } else {
            $put = $this->validate($request, [
                'nama_lengkap' => 'required',
                'username' => 'required',
                'perguruan_tinggi' => 'required',
                'jurusan' => 'required',
                'bidang_minat' => 'required',
                'no_hp' => 'required',
                'instagram' => 'required',
                'foto_profil' => 'required|image|mimes:png,jpg,jpeg|max:2048',
            ]);

            $extFile = $request->foto_profil->getClientOriginalExtension();
            $namaFile = 'finddy' . time() . "." . $extFile;
            $image = $request->foto_profil->move('user_images', $namaFile);

            $put["foto_profil"] = $image;
        }

        User::where('id', $id)->update($put);
        return Redirect::route('profil');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
