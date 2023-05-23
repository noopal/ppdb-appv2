<?php

use App\Http\Controllers\DaftarPendaftaranController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\JurusanController;
use App\Http\Controllers\PendaftaranController;
use App\Http\Controllers\SekolahController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/login', function () {
    return Inertia::render('Login');
})->name('login');

Route::get('/register', function () {
    return Inertia::render('Register');
})->name('register');

Route::middleware(['auth', 'verified'])->group(function () {
    // User Controller
    Route::resource('/users', UserController::class);
    Route::get('/profile', function () {
        return Inertia::render('Profile');
    })->name('profile');
    Route::get('/test', function () {
        return Inertia::render('Test');
    })->name('test');

    /* Sekolah Controller */
    Route::resource('/sekolah', SekolahController::class);

    /* Home Controller */
    Route::resource('/dashboard', HomeController::class);

    /* Jurusan Controller */
    Route::resource('/jurusan', JurusanController::class);

    /* Daftar Pendaftaran Controller */
    Route::resource('/daftar-pendaftar', DaftarPendaftaranController::class);
});

/* Pendaftaran Siswa Controller */
Route::resource('/pendaftaran', PendaftaranController::class);
