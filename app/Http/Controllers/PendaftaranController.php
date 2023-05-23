<?php

namespace App\Http\Controllers;

use App\Models\Pendaftaran;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class PendaftaranController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $pendaftaran = Pendaftaran::all();
        return Inertia::render('PendaftaranSiswa', [
            'pendaftaran' => $pendaftaran->map(function ($pendaftaran) {
                return [
                    'id' => $pendaftaran->id,
                    'name' => $pendaftaran->name,
                    'tempat_lahir' => $pendaftaran->tempat_lahir,
                    'tanggal_lahir' => $pendaftaran->tanggal_lahir,
                    'agama' => $pendaftaran->agama,
                    'asal' => $pendaftaran->asal,
                    'alamat' => $pendaftaran->alamat,
                    'nomor_handphone' => $pendaftaran->nomor_handphone,
                    'jarak' => $pendaftaran->jarak,
                    'jurusan' => $pendaftaran->jurusan,
                    'image' => $pendaftaran->image,
                    'raport' => $pendaftaran->raport,
                    'suratPernyataan' => $pendaftaran->suratPernyataan,
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
        // dd($request->all());
        $post = $this->validate($request, [
            'name' => ['required'],
            'tempat_lahir' => ['required'],
            'tanggal_lahir' => ['required'],
            'agama' => ['required'],
            'asal' => ['required'],
            'alamat' => ['required'],
            'nomor_handphone' => ['required'],
            'jarak' => ['required'],
            'jurusan' => ['required'],
            'image' => ['required', 'mimes:png,jpg,jpeg'],
            'raport' => ['required', 'mimes:png,jpg,jpeg'],
            'suratPernyataan' => ['required', 'mimes:png,jpg,jpeg'],
        ]);

        $extFile = $request->image->getClientOriginalExtension();
        $extFile = $request->raport->getClientOriginalExtension();
        $extFile = $request->suratPernyataan->getClientOriginalExtension();
        $namaFile = 'spa' . time() . "." . $extFile;
        $image = $request->image->move('thumbnails', $namaFile);
        $raport = $request->raport->move('raport', $namaFile);
        $suratPernyataan = $request->suratPernyataan->move('raport', $namaFile);

        $post['image'] = $image;
        $post['raport'] = $raport;
        $post['suratPernyataan'] = $suratPernyataan;

        Pendaftaran::create($post);
        return Redirect::route('pendaftaran.index');
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
