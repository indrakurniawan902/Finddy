import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import Layout from "../../components/Layout";

function TemanBelajar({ user }) {
    console.log(user);
    return (
        <Fragment>
            <Helmet>
                <title>Teman Belajar</title>
            </Helmet>

            <h1 className="text-3xl font-bold text-black-1 mb-10">
                Teman Belajar
            </h1>
        </Fragment>
    );
}

TemanBelajar.layout = (page) => <Layout children={page} user={page.props.user} />;

export default TemanBelajar;
