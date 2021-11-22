import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import Button from "../../components/Button";
import Discussion from "../../components/Forum/Discussion";
import SearchForum from "../../components/Forum/SearchForum";
import SortBy from "../../components/Forum/SortBy";
import Layout from "../../components/Layout";

function ForumDiskusi({ user, discussions }) {
    console.log(discussions);
    return (
        <Fragment>
            <Helmet>
                <title>Forum Diskusi</title>
            </Helmet>

            <div className="flex flex-wrap justify-center md:justify-between items-center mb-10">
                <h1 className="text-3xl font-bold text-black-1 w-full md:w-auto text-left">
                    Forum Diskusi
                </h1>
                <div className="flex gap-6 mt-6 md:mt-0">
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
            <div className="flex flex-col gap-5 mt-6">
                {discussions.map((discussion, index) => (
                    <Discussion
                        key={index}
                        title={discussion.title}
                        discussion={discussion.body}
                        author={discussion.author}
                        time={discussion.time}
                        totalResponse="2" //belum pake konten dari db
                        authorLink={route("user.show", discussion.author)}
                        detailLink={route("forum.detail", discussion.id)}
                    />
                ))}
            </div>
        </Fragment>
    );
}

ForumDiskusi.layout = (page) => (
    <Layout children={page} user={page.props.user} />
);

export default ForumDiskusi;
