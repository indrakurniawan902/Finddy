import React, { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Button from "./../components/Button";
import { Helmet } from "react-helmet";
import { Link } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import Loading from "../components/Loading";
import AOS from "AOS";
import swal from "sweetalert2";

function CompleteData({ user }) {
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
    const [image, setImage] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const imageRef = useRef();

    const handleChange = (e) => {
        const key = e.target.id;
        const value = e.target.value;
        setValues((values) => ({
            ...values,
            [key]: value,
        }));
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
                                    placeholder="Tuliskan dengan format +62xx"
                                    required
                                />

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
                                    className="input mb-8"
                                    required
                                />

                                <div className="gap-3">
                                    <Button
                                        type="primary"
                                        isSubmit
                                        isFull
                                        isLoading={isLoading}
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
