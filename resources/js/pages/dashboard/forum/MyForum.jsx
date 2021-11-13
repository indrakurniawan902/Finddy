import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import Button from "../../../components/Button";
import Discussion from "../../../components/Forum/Discussion";
import Layout from "../../../components/Layout";
import BackButton from "../../../partials/BackButton";

function MyForum({ user }) {
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
            </div>
            <BackButton href={route("forum")}></BackButton>
            <h2 className="h3 mt-6 mb-6">Diskusiku</h2>
            <Discussion
                title="Bagaimana cara berani bertanya saat kuliah berlangsung"
                discussion="Jadi aku tuh kaya malu gitu loh buat bertanya ke dosen
                    takutnya pertanyaannya terlalu mudah gitu..."
                author="arismc2"
                time="8 jam yang lalu"
                totalResponse="2"
                authorLink="#"
                detailLink="#"
                isEditable
            />
        </Fragment>
    );
}

MyForum.layout = (page) => <Layout children={page} user={page.props.user} />;

export default MyForum;
