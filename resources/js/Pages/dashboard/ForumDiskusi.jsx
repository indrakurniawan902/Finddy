import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import Button from "../../components/Button";
import Discussion from "../../components/Forum/Discussion";
import SearchForum from "../../components/Forum/SearchForum";
import SortBy from "../../components/Forum/SortBy";
import Layout from "../../components/Layout";

function ForumDiskusi({ user }) {
    console.log(user);
    return (
        <Fragment>
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

            <h2 className="h3 mb-6">Cari Forum Diskusi</h2>
            <SearchForum />
            <h2 className="h3 mb-6 mt-8">Daftar Diskusi</h2>
            <SortBy></SortBy>
            <div className="flex flex-col gap-4 mt-6">
                <Discussion
                    title="Bagaimana cara berani bertanya saat kuliah berlangsung"
                    discussion="Jadi aku tuh kaya malu gitu loh buat bertanya ke dosen
                    takutnya pertanyaannya terlalu mudah gitu..."
                    author="arismc2"
                    time="8 jam yang lalu"
                    totalResponse="2"
                    authorLink="#"
                    detailLink="#"
                />
                <Discussion
                    title="Bagaimana cara berani bertanya saat kuliah berlangsung"
                    discussion="Jadi aku tuh kaya malu gitu loh buat bertanya ke dosen
                    takutnya pertanyaannya terlalu mudah gitu..."
                    author="arismc2"
                    time="8 jam yang lalu"
                    totalResponse="2"
                    authorLink="#"
                    detailLink="#"
                />
                <Discussion
                    title="Bagaimana cara berani bertanya saat kuliah berlangsung"
                    discussion="Jadi aku tuh kaya malu gitu loh buat bertanya ke dosen
                    takutnya pertanyaannya terlalu mudah gitu..."
                    author="arismc2"
                    time="8 jam yang lalu"
                    totalResponse="2"
                    authorLink="#"
                    detailLink="#"
                />
            </div>
        </Fragment>
    );
}

ForumDiskusi.layout = (page) => (
    <Layout children={page} user={page.props.user} />
);

export default ForumDiskusi;
