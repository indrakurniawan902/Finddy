import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import Button from "../../../components/Button";
import Discussion from "../../../components/Forum/Discussion";
import Layout from "../../../components/Layout";

function DetailsForum({ user }) {
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
        </Fragment>
    );
}

DetailsForum.layout = (page) => (
    <Layout children={page} user={page.props.user} />
);

export default DetailsForum;
