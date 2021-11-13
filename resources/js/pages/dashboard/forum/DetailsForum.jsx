import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Button from "../../../components/Button";
import Discussion from "../../../components/Forum/Discussion";
import Reply from "../../../components/Forum/Reply";
import Layout from "../../../components/Layout";
import BackButton from "../../../partials/BackButton";

function DetailsForum({ user }) {
    console.log(user);

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
                title="Bagaimana cara berani bertanya saat kuliah berlangsung"
                discussion="Jadi aku tuh kaya malu gitu loh buat bertanya ke dosen
                    takutnya pertanyaannya terlalu mudah gitu Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo doloribus nulla nostrum explicabo iusto odio tenetur, sed perspiciatis saepe velit quaerat suscipit"
                author="arismc2"
                time="8 jam yang lalu"
                totalResponse="2"
                authorLink="#"
                detailLink="#"
            />
            <h2 className="h3 mt-6 mb-6">Tanggapan</h2>
            <div className="py-3 px-5 flex flex-col gap-4 rounded-lg w-auto lg:w-3/4 bg-white-1">
                <form className="flex flex-col justify-end mb-6">
                    <textarea
                        rows="3"
                        name="body"
                        id="body"
                        value={values.body}
                        onChange={handleChange}
                        className="input mb-4"
                        placeholder="Masukkan tanggapanmu di sini"
                        required
                    />
                    <Button type="primary" isSubmit>
                        Kirim Tanggapan
                    </Button>
                </form>
                <Reply
                    name="Rian Febriansyah"
                    time="2 jam yang lalu"
                    username="riansyh"
                    reply="lorem ipsum dolor amat lorem ipsum dolor amat lorem ipsum dolor amat lorem ipsum dolor amat"
                />
                <Reply
                    name="Rian Febriansyah"
                    time="2 jam yang lalu"
                    username="riansyh"
                    reply="lorem ipsum dolor amat lorem ipsum dolor amat lorem ipsum dolor amat lorem ipsum dolor amat"
                />
                <Reply
                    name="Rian Febriansyah"
                    time="2 jam yang lalu"
                    username="riansyh"
                    reply="lorem ipsum dolor amat lorem ipsum dolor amat lorem ipsum dolor amat lorem ipsum dolor amat"
                />
            </div>
        </>
    );
}

DetailsForum.layout = (page) => (
    <Layout children={page} user={page.props.user} />
);

export default DetailsForum;
