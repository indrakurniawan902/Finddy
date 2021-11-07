import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import Layout from "../../components/Layout";

function Profil() {
    return (
        <Fragment>
            <Helmet>
                <title>Profil</title>
            </Helmet>

            <h1 className="text-3xl font-bold text-black-1 mb-10">Profil</h1>
        </Fragment>
    );
}

Profil.layout = (page) => <Layout children={page} />;

export default Profil;
