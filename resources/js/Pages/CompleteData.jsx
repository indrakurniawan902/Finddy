import React, { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Button from "./../components/Button";
import { Helmet } from "react-helmet";
import { Inertia } from "@inertiajs/inertia";
import Loading from "../components/Loading";
import AOS from "AOS";
import swal from "sweetalert2";

function CompleteData({ user, errors }) {
    useEffect(() => {
        AOS.init();
    }, []);

    const [values, setValues] = useState({
        username: "",
        nama_lengkap: "",
        perguruan_tinggi: "",
        jurusan: "",
        no_hp: "",
        instagram: "",
        bidang_minat: "",
        foto_profil: "",
    });

    const [error] = useState({
        username: "",
        nama_lengkap: "",
        perguruan_tinggi: "",
        jurusan: "",
        no_hp: "",
        instagram: "",
        bidang_minat: "",
        foto_profil: "",
    });

    const [image, setImage] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const imageRef = useRef();

    const buttonDisabled = () => {
        if (
            values.username === "" ||
            values.username.length < 4 ||
            values.nama_lengkap === "" ||
            values.perguruan_tinggi === "" ||
            values.jurusan === "" ||
            values.no_hp === "" ||
            values.instagram === "" ||
            values.bidang_minat === "" ||
            !imageRef.current.files[0]
        ) {
            return true;
        } else {
            return false;
        }
    };

    const handleChange = (e) => {
        const key = e.target.id;
        const value = e.target.value;
        setValues((values) => ({
            ...values,
            [key]: value,
        }));

        //VALIDASI SISI USER
        switch (key) {
            case "username":
                error.username =
                    value === ""
                        ? "Username tidak boleh kosong"
                        : value.length < 4
                        ? "Username minimal 4 karakter"
                        : "";
                break;
            case "nama_lengkap":
                error.nama_lengkap =
                    value === "" ? "Nama lengkap tidak boleh kosong" : "";
                break;
            case "perguruan_tinggi":
                error.perguruan_tinggi =
                    value === "" ? "Perguruan tinggi tidak boleh kosong" : "";
                break;
            case "jurusan":
                error.jurusan =
                    value === "" ? "Jurusan tidak boleh kosong" : "";
                break;
            case "no_hp":
                error.no_hp = value === "" ? "Nomor HP tidak boleh kosong" : "";
                break;
            case "instagram":
                error.instagram =
                    value === "" ? "Instagram tidak boleh kosong" : "";
                break;
            case "bidang_minat":
                error.bidang_minat =
                    value === "" ? "Bidang minat tidak boleh kosong" : "";
                break;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        for (let key in values) {
            formData.append(key, values[key]);
        }
        formData.append("foto_profil", imageRef.current.files[0]);
        formData.append("_method", "put");
        Inertia.post(route("user.update", user.id), formData, {
            onStart: () => {
                setIsLoading(true);
            },
            onSuccess: () => {
                setIsLoading(false);
                swal.fire({
                    icon: "success",
                    title: "Berhasil!",
                    text: "Data lengkapmu sudah tersimpan!",
                    confirmButtonColor: "#607EF5",
                });
            },
            onError: () => {
                setIsLoading(false);
                swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Terjadi kesalahan, mohon coba lagi",
                    confirmButtonColor: "#607EF5",
                });
            },
        });
    };

    const handleUpload = (e) => {
        e.preventDefault();
        let reader = new FileReader();
        reader.onloadend = () => {
            if (reader.readyState === 2) {
                setImage(reader.result);
            }
        };
        reader.readAsDataURL(e.target.files[0]);
    };

    return (
        <>
            <Helmet>
                <title>Finddy - Find Your Buddy to Boost Your Study</title>
            </Helmet>

            {isLoading && <Loading message="Loading..." />}

            <Navbar user={user} />
            <main>
                <div className="h-full w-1/2 bg-blue-3 absolute hidden lg:block"></div>
                <div className="container-auto flex min-h-screen overflow-hidden">
                    <div className="flex-1 bg-blue-3 hidden lg:block">
                        <img
                            src="./img/illustration/girl-book.svg"
                            alt="girl-book-illustration"
                            className="absolute bottom-40 left-0 transform scale-150"
                        />
                    </div>

                    <div className="flex-1 flex flex-col items-center justify-center gap-8 my-6">
                        <div
                            className="lg:w-3/5 w-9/12 max-w-xl"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            <div className="mb-7">
                                <h1 className="text-black-1 text-4xl font-bold">
                                    Akun berhasil dibuat
                                </h1>
                                <h2 className="text-black-2 text-base">
                                    Silahkan lengkapi data untuk bisa masuk ke
                                    dalam akun kamu
                                </h2>
                            </div>

                            {errors.message && (
                                <div className="error bg-red-1 w-full py-2 px-3 rounded-md border-2 border-red-2 mb-3 text-red-4">
                                    <p className="text-sm">{errors.message}</p>
                                </div>
                            )}

                            <form onSubmit={handleSubmit}>
                                <label
                                    htmlFor="username"
                                    className="block text-xl"
                                >
                                    Username
                                </label>
                                <input
                                    type="text"
                                    name="username"
                                    id="username"
                                    value={values.username}
                                    onChange={handleChange}
                                    className="input"
                                    placeholder="Masukkan username yang unik"
                                    required
                                />

                                {errors.username && (
                                    <div className="text-sm text-red-4 mt-1">
                                        {errors.username}
                                    </div>
                                )}
                                <div className="text-sm text-red-4 mt-1">
                                    {error.username}
                                </div>

                                <label
                                    htmlFor="nama_lengkap"
                                    className="block text-xl mt-4"
                                >
                                    Nama Lengkap
                                </label>
                                <input
                                    type="text"
                                    name="nama_lengkap"
                                    id="nama_lengkap"
                                    value={values.nama_lengkap}
                                    onChange={handleChange}
                                    className="input"
                                    placeholder="Masukkan Nama lengkapmu"
                                    required
                                />

                                {errors.nama_lengkap && (
                                    <div className="text-sm text-red-4 mt-1">
                                        {errors.nama_lengkap}
                                    </div>
                                )}
                                <div className="text-sm text-red-4 mt-1">
                                    {error.nama_lengkap}
                                </div>

                                <label
                                    htmlFor="perguruan_tinggi"
                                    className="block text-xl mt-4"
                                >
                                    Perguruan Tinggi
                                </label>
                                <input
                                    type="text"
                                    name="perguruan_tinggi"
                                    id="perguruan_tinggi"
                                    value={values.perguruan_tinggi}
                                    onChange={handleChange}
                                    className="input"
                                    placeholder="Tuliskan nama lengkap perguruan tinggimu"
                                    required
                                />

                                {errors.perguruan_tinggi && (
                                    <div className="text-sm text-red-4 mt-1">
                                        {errors.perguruan_tinggi}
                                    </div>
                                )}
                                <div className="text-sm text-red-4 mt-1">
                                    {error.perguruan_tinggi}
                                </div>

                                <label
                                    htmlFor="jurusan"
                                    className="block text-xl mt-4"
                                >
                                    Jurusan
                                </label>
                                <input
                                    type="text"
                                    name="jurusan"
                                    id="jurusan"
                                    value={values.jurusan}
                                    onChange={handleChange}
                                    className="input"
                                    placeholder="Tuliskan jurusanmu"
                                    required
                                />

                                {errors.jurusan && (
                                    <div className="text-sm text-red-4 mt-1">
                                        {errors.jurusan}
                                    </div>
                                )}
                                <div className="text-sm text-red-4 mt-1">
                                    {error.jurusan}
                                </div>

                                <label
                                    htmlFor="bidang_minat"
                                    className="block text-xl mt-4"
                                >
                                    Bidang/minat
                                </label>
                                <input
                                    type="text"
                                    name="bidang_minat"
                                    id="bidang_minat"
                                    value={values.bidang_minat}
                                    onChange={handleChange}
                                    className="input"
                                    placeholder="Tuliskan satu bidang/minat"
                                    required
                                />

                                {errors.bidang_minat && (
                                    <div className="text-sm text-red-4 mt-1">
                                        {errors.bidang_minat}
                                    </div>
                                )}
                                <div className="text-sm text-red-4 mt-1">
                                    {error.bidang_minat}
                                </div>

                                <label
                                    htmlFor="no_hp"
                                    className="block text-xl mt-4"
                                >
                                    Nomor HP
                                </label>
                                <input
                                    type="text"
                                    name="no_hp"
                                    id="no_hp"
                                    value={values.no_hp}
                                    onChange={handleChange}
                                    className="input"
                                    placeholder="Tuliskan dengan format 08xx"
                                    required
                                />

                                {errors.no_hp && (
                                    <div className="text-sm text-red-4 mt-1">
                                        {errors.no_hp}
                                    </div>
                                )}
                                <div className="text-sm text-red-4 mt-1">
                                    {error.no_hp}
                                </div>

                                <label
                                    htmlFor="instagram"
                                    className="block text-xl mt-4"
                                >
                                    Instagram
                                </label>
                                <input
                                    type="text"
                                    name="instagram"
                                    id="instagram"
                                    value={values.instagram}
                                    onChange={handleChange}
                                    className="input"
                                    placeholder="Tuliskan username Instagram"
                                    required
                                />

                                {errors.instagram && (
                                    <div className="text-sm text-red-4 mt-1">
                                        {errors.instagram}
                                    </div>
                                )}
                                <div className="text-sm text-red-4 mt-1">
                                    {error.instagram}
                                </div>

                                <label
                                    htmlFor="foto_profil"
                                    className="block text-xl mt-4"
                                >
                                    Foto profile
                                </label>

                                <input
                                    type="file"
                                    name="foto_profil"
                                    id="foto_profil"
                                    ref={imageRef}
                                    onChange={handleUpload}
                                    className="input"
                                    required
                                />

                                <div className="text-sm text-black-2 mt-1 mb-8">
                                    Ukuran file maksimal 2mb dengan format
                                    jpg/jpeg/png
                                </div>

                                <div className="gap-3">
                                    <Button
                                        type="primary"
                                        isSubmit
                                        isFull
                                        isDisabled={buttonDisabled()}
                                    >
                                        Simpan data
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default CompleteData;
