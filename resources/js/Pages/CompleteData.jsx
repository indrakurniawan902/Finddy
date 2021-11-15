import { React, useState, useEffect } from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Button from "./../components/Button";
import { Helmet } from "react-helmet";
import { Link } from "@inertiajs/inertia-react";
import AOS from "AOS";

function CompleteData({ user }) {
    useEffect(() => {
        AOS.init();
    }, []);

    const [values, setValues] = useState({
        username: "riansyh",
        email: "",
        password: "",
        password_confirmation: "",
    });
    const [isLoading, setIsLoading] = useState(false);

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
        Inertia.post("/register", formData, {
            onStart: () => {
                setIsLoading(true);
            },
            onSuccess: () => {
                setIsLoading(false);
                swal.fire({
                    icon: "success",
                    title: "Selamat!",
                    text: "Akun kamu berhasil dibuat.",
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

    return (
        <>
            <Helmet>
                <title>Finddy - Find Your Buddy to Boost Your Study</title>
            </Helmet>

            <Navbar user={user} />
            <main>
                <div className="h-screen w-1/2 bg-blue-3 absolute hidden lg:block"></div>
                <div className="container-auto flex min-h-screen overflow-hidden">
                    <div className="flex-1 bg-blue-3 hidden lg:block">
                        <img
                            src="./img/illustration/girl-book.svg"
                            alt="girl-book-illustration"
                            className="absolute bottom-40 left-0 transform scale-150"
                        />
                    </div>

                    <div className="flex-1 flex flex-col items-center justify-center gap-8">
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
                                <label htmlFor="nama" className="block text-xl">
                                    Nama Lengkap
                                </label>
                                <input
                                    type="text"
                                    name="nama"
                                    id="nama"
                                    value={values.nama}
                                    onChange={handleChange}
                                    className="input"
                                    placeholder="Nama lengkap"
                                    required
                                />

                                <label
                                    htmlFor="perguruantinggi"
                                    className="block text-xl mt-4"
                                >
                                    Perguruan Tinggi
                                </label>
                                <input
                                    type="text"
                                    name="perguruantinggi"
                                    id="perguruantinggi"
                                    value={values.perguruantinggi}
                                    onChange={handleChange}
                                    className="input"
                                    placeholder="Perguruan tinggi"
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
                                    placeholder="Jurusan"
                                    required
                                />

                                <label
                                    htmlFor="bidang"
                                    className="block text-xl mt-4"
                                >
                                    Bidang/minat
                                </label>
                                <input
                                    type="text"
                                    name="bidang"
                                    id="bidang"
                                    value={values.bidang}
                                    onChange={handleChange}
                                    className="input"
                                    placeholder="Bidang/minat"
                                    required
                                />

                                <label
                                    htmlFor="nomorhp"
                                    className="block text-xl mt-4"
                                >
                                    Nomor HP
                                </label>
                                <input
                                    type="text"
                                    name="nomorhp"
                                    id="nomorhp"
                                    value={values.nomorhp}
                                    onChange={handleChange}
                                    className="input"
                                    placeholder="Nomor HP"
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
                                    placeholder="Username instagram"
                                    required
                                />

                                <label
                                    htmlFor="foto"
                                    className="block text-xl mt-4"
                                >
                                    Foto profile
                                </label>

                                <input
                                    type="file"
                                    name="foto"
                                    id="foto"
                                    value={values.foto}
                                    onChange={handleChange}
                                    className="input mb-8"
                                    placeholder="Username instagram"
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
