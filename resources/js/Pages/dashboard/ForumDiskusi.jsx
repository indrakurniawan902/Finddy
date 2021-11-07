import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import Layout from "../../components/Layout";

function ForumDiskusi() {
    return (
        <Fragment>
            <Helmet>
                <title>Forum Diskusi</title>
            </Helmet>

            <h1 className="text-3xl font-bold text-black-1 mb-10">
                Forum Diskusi
            </h1>
        </Fragment>
    );
}

ForumDiskusi.layout = (page) => <Layout children={page} />;

export default ForumDiskusi;
