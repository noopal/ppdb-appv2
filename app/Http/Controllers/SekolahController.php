<?php

namespace App\Http\Controllers;

use App\Models\Sekolah;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class SekolahController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // dd(Sekolah::first());
        $Sekolahs = Sekolah::first();
        return Inertia::render('Sekolahs', [
            'Sekolahs' => $Sekolahs
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('ProfilSekolah');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // dd($request->all());
        $post = $this->validate($request, [
            'sejarah_sekolah' => ['required'],
            'visi_sekolah' => ['required'],
            'misi_sekolah' => ['required'],
        ]);

        Sekolah::create($post);
        return Redirect::route('profil-sekolah');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Sekolah $sekolah)
    {
        return Inertia::render('Sekolah/show', [
            'sekolah' => $sekolah
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $Sekolahs = Sekolah::find($id);
        return Inertia::render('Sekolahs', [
            'editSekolah' => $Sekolahs
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
        $put = $this->validate($request, [
            'sejarah_sekolah' => ['required'],
            'visi_sekolah' => ['required'],
            'misi_sekolah' => ['required'],
        ]);

        Sekolah::where('id', $id)->update($put);
        return Redirect::route('profil-sekolah');
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
