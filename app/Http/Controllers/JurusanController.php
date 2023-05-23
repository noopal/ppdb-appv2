<?php

namespace App\Http\Controllers;

use App\Models\Jurusan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class JurusanController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $jurusans = Jurusan::all();
        return Inertia::render('Jurusan', [
            'jurusans' => $jurusans->map(function ($jurusan) {
                return [
                    'id' => $jurusan->id,
                    'nama_jurusan' => $jurusan->nama_jurusan,
                    'thumbnail' => $jurusan->thumbnail,
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
        return Inertia::render('CreateJurusan');
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
            'nama_jurusan' => ['required'],
            'thumbnail' => ['required', 'mimes:png,jpg,jpeg'],
        ]);

        $extFile = $request->thumbnail->getClientOriginalExtension();
        $namaFile = 'spa' . time() . "." . $extFile;
        $image = $request->thumbnail->move('thumbnails', $namaFile);

        $post['thumbnail'] = $image;

        Jurusan::create($post);
        return Redirect::route('jurusan.index');
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
        $jurusans = Jurusan::find($id);
        return Inertia::render('CreateJurusan', [
            'editJurusans' => $jurusans
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
        // dd($request->all());
        $put = $this->validate($request, [
            'nama_jurusan' => ['required'],
            'thumbnail' => ['thumbnail', 'mimes:png,jpg,jpeg'],
        ]);

        $extFile = $request->thumbnail->getClientOriginalExtension();
        $namaFile = 'spa' . time() . "." . $extFile;
        $image = $request->thumbnail->move('thumbnails', $namaFile);

        $put['thumbnail'] = $image;

        Jurusan::where('id', $id)->update($put);
        return Redirect::route('jurusan.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $delete = Jurusan::find($id);
        $delete->delete();
        return Redirect::route('jurusan.index');
    }
}
