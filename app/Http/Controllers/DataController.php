<?php

namespace App\Http\Controllers;

use App\Models\Pendaftaran;
use Illuminate\Http\Request;

class DataController extends Controller
{
    public function search(Request $request)
    {
        $query = $request->input('query');

        // Lakukan pencarian berdasarkan query
        $results = Pendaftaran::where('name', 'LIKE', '%' . $query . '%')->get();

        return response()->json($results);
    }

    public function getData($id)
    {
        $data = Pendaftaran::find($id);

        return response()->json($data);
    }
}
