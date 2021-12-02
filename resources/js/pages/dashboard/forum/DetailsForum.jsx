import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Button from "../../../components/Button";
import Discussion from "../../../components/Forum/Discussion";
import Reply from "../../../components/Forum/Reply";
import Layout from "../../../components/Layout";
import BackButton from "../../../partials/BackButton";
import { Inertia } from "@inertiajs/inertia";
import swal from "sweetalert2";

function DetailsForum({ user, details, errors, replies }) {
    const [values, setValues] = useState({
        content: "",
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
        formData.append("discussion_id", details.id);
        for (let key in values) {
            formData.append(key, values[key]);
        }

        Inertia.post(route("add.reply"), formData, {
            onSuccess: () => {
                swal.fire({
                    icon: "success",
                    title: "Berhasil!",
                    text: "Tanggapan berhasil dikirim",
                    confirmButtonColor: "#607EF5",
                });
                setValues({ content: "" });
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
        <>
            <Helmet>
                <title>Forum Diskusi</title>
            </Helmet>

            <div className="flex justify-between items-center mb-10">
                <h1 className="text-3xl font-bold text-black-1">
                    Forum Diskusi
                </h1>
                <div className="flex gap-6">
                    <Button href={route("forum.my")}>Diskusiku</Button>
                    <Button type="primary" href={route("forum.create")}>
                        Buat Diskusi
                    </Button>
                </div>
            </div>
            <BackButton href={route("forum")}></BackButton>
            <h2 className="h3 mt-6 mb-6">Pertanyaan</h2>
            <Discussion
                title={details.title}
                discussion={details.body}
                author={details.author}
                time={details.time}
                totalResponse={details.totalResponse}
                authorLink={route("user.show", details.author)}
                detailLink="#"
            />
            <h2 className="h3 mt-6 mb-6">Tanggapan</h2>
            <div className="py-3 px-5 flex flex-col gap-4 rounded-lg w-auto lg:w-3/4 bg-white-1">
                <form
                    className="flex flex-col justify-end mb-6"
                    onSubmit={handleSubmit}
                >
                    <textarea
                        rows="3"
                        name="content"
                        id="content"
                        value={values.content}
                        onChange={handleChange}
                        className="input mb-4"
                        placeholder="Masukkan tanggapanmu di sini"
                        required
                    />
                    <Button type="primary" isSubmit>
                        Kirim Tanggapan
                    </Button>
                </form>

                {replies ? (
                    replies.map((reply, index) => (
                        <Reply
                            key={index}
                            name={reply.name}
                            time={reply.created_at}
                            username={reply.username}
                            reply={reply.content}
                            avatar={reply.profil}
                        />
                    ))
                ) : (
                    <p className="mt-4">Belum ada tanggapan</p>
                )}
            </div>
        </>
    );
}

DetailsForum.layout = (page) => (
    <Layout children={page} user={page.props.user} />
);

export default DetailsForum;
