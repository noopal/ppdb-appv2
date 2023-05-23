<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pendaftaran extends Model
{
    protected $fillable = [
        'name',
        'tempat_lahir',
        'tanggal_lahir',
        'agama',
        'asal',
        'alamat',
        'nomor_handphone',
        'jarak',
        'jurusan',
        'image',
        'raport',
        'suratPernyataan',
    ];
}
