<?php

namespace App\Http\Controllers;

use App\Models\Jurusan;
use App\Models\Sekolah;
use Illuminate\Http\Request;
use Inertia\Inertia;

class WebsiteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // $jurusans = Jurusan::all();
        // return Inertia::render('Website', [
        //     'jurusans' => $jurusans->map(function ($jurusan) {
        //         return [
        //             'id' => $jurusan->id,
        //             'nama_jurusan' => $jurusan->nama_jurusan,
        //             'thumbnail' => $jurusan->thumbnail,
        //         ];
        //     }),
        // ]);

        // dd(User::all());
        $jurusans = Jurusan::all();
        $sekolahs = Sekolah::first();
        return Inertia::render('Website', [
            'jurusans' => $jurusans,
            'sekolahs' => $sekolahs
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
        //
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
