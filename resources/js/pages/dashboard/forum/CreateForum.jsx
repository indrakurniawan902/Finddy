import React, { Fragment, useState } from "react";
import { Helmet } from "react-helmet";
import Button from "../../../components/Button";
import Layout from "../../../components/Layout";
import BackButton from "../../../partials/BackButton";
import { Inertia } from "@inertiajs/inertia";
import swal from "sweetalert2";

function CreateForum({ user }) {
    const [values, setValues] = useState({
        title: "",
        body: "",
    });

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
        formData.append("user_id", user.id);
        for (let key in values) {
            formData.append(key, values[key]);
        }

        Inertia.post(route("forum.post"), formData, {
            onSuccess: () => {
                swal.fire({
                    icon: "success",
                    title: "Selamat!",
                    text: "Diskusi berhasil ditambahkan",
                    confirmButtonColor: "#607EF5",
                });
            },
            onError: () => {
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
                <title>Forum Diskusi</title>
            </Helmet>

            <div className="flex justify-between items-center mb-10">
                <h1 className="text-3xl font-bold text-black-1">
                    Forum Diskusi
                </h1>
            </div>
            <BackButton href={route("forum")}></BackButton>
            <h2 className="h3 mt-6 mb-6">Buat Diskusi</h2>

            <form onSubmit={handleSubmit}>
                <label htmlFor="title" className="block text-xl">
                    Judul Diskusi
                </label>
                <input
                    type="text"
                    name="title"
                    id="title"
                    value={values.title}
                    onChange={handleChange}
                    className="input"
                    placeholder="Masukkan judul atau pertanyaan singkat"
                    required
                />
                <label htmlFor="body" className="block text-xl mt-4">
                    Pertanyaan lengkap
                </label>
                <textarea
                    rows="4"
                    name="body"
                    id="body"
                    value={values.body}
                    onChange={handleChange}
                    className="input mb-6"
                    placeholder="Masukkan pertanyaan lengkapmu di sini"
                    required
                />
                <Button type="primary" isSubmit>
                    Buat Diskusi
                </Button>
            </form>
        </Fragment>
    );
}

CreateForum.layout = (page) => (
    <Layout children={page} user={page.props.user} />
);

export default CreateForum;
