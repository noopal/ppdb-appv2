<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePendaftaran extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pendaftaran', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('name');
            $table->string('tempat_lahir');
            $table->string('tanggal_lahir');
            $table->string('agama');
            $table->string('asal');
            $table->string('alamat');
            $table->string('nomor_handphone');
            $table->string('jarak');
            $table->string('jurusan');
            $table->string('image');
            $table->string('raport');
            $table->string('suratPernyataan');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pendaftaran');
    }
}
