import React, { Fragment, useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Layout from "../../components/Layout";
import Button from "../../components/Button";
import Discussion from "../../components/Forum/Discussion";
import SearchForum from "../../components/Forum/SearchForum";
import SortBy from "../../components/Forum/SortBy";

function Edit({ user }) {
    console.log(user);

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
        <Fragment>
            <Helmet>
                <title>Edit</title>
            </Helmet>
            <div className="flex flex-wrap justify-center md:justify-between items-center mb-10">
                <h1 className="text-3xl font-bold text-black-1 w-full md:w-auto text-left">
                    Edit profile
                </h1>
            </div>
            <div className="py-3 px-5 flex flex-col gap-2 md:gap-4 rounded-lg w-auto lg:w-4/4 shadow-md bg-white-1">
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
                        htmlFor="email"
                        className="block text-xl mt-4"
                    >
                        Email
                    </label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        value={values.email}
                        onChange={handleChange}
                        className="input"
                        placeholder="Email"
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

                    <label htmlFor="jurusan" className="block text-xl mt-4">
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

                    <label htmlFor="bidang" className="block text-xl mt-4">
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

                    <label htmlFor="nomorhp" className="block text-xl mt-4">
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

                    <label htmlFor="instagram" className="block text-xl mt-4">
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

                    <label htmlFor="foto" className="block text-xl mt-4">
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
                        <Button type="primary" href={route("profil")}>
                            Simpan data
                        </Button>
                    </div>
                </form>
            </div>
        </Fragment>
    );
}

Edit.layout = (page) => <Layout children={page} user={page.props.user} />;

export default Edit;
