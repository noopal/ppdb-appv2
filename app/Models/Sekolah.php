<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sekolah extends Model
{
    protected $fillable = [
        'sejarah_sekolah',
        'visi_sekolah',
        'misi_sekolah',
    ];
}
