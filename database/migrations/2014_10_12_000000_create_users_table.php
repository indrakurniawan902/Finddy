<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('username')->unique()->nullable();
            $table->string('email')->unique();
            $table->string('password');
            $table->string('nama_lengkap')->nullable();
            $table->integer('jml_teman')->nullable();
            $table->string('foto_profile')->nullable();
            $table->string('perguruan_tinggi')->nullable();
            $table->string('jurusan')->nullable();
            $table->string('no_hp')->nullable();
            $table->string('instagram')->nullable();
            $table->string('bidang_minat')->nullable();
            $table->timestamp('email_verified_at')->nullable();
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
