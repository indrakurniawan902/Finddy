import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import Layout from "../../components/Layout";
import Button from "../../components/Button";
import Discussion from "../../components/Forum/Discussion";
import SearchForum from "../../components/Forum/SearchForum";
import SortBy from "../../components/Forum/SortBy";

function Profil({ user }) {
    console.log(user);
    return (
        <Fragment>
            <Helmet>
                <title>Profil</title>
            </Helmet>

            <div className="flex flex-wrap justify-center md:justify-between items-center mb-10">
                <h1 className="text-3xl font-bold text-black-1 w-full md:w-auto text-left">
                    Profile
                </h1>
                <div className="flex gap-6 mt-6 md:mt-0">
                    <Button type="primary" href={route("user.edit")}>
                        Edit Profile
                    </Button>
                </div>
            </div>

            <div className="py-3 px-5 flex flex-col gap-2 md:gap-4 rounded-lg w-auto lg:w-4/4 shadow-md bg-white-1">
                <div className="flex gap-3 flex-col">
                    <h2 className="text-xl text-black-2text-xl text-black-2">Nama Lengkap</h2>
                    <p className="text-base">ajsdlkajsdklas</p>
                </div>
                <div className="flex gap-3 flex-col">
                    <h2 className="text-xl text-black-2">Email</h2>
                    <p>ajsdlkajsdklas</p>
                </div>
                <div className="flex gap-3 flex-col">
                    <h2 className="text-xl text-black-2">Perguruan tinggi</h2>
                    <p>ajsdlkajsdklas</p>
                </div>
                <div className="flex gap-3 flex-col">
                    <h2 className="text-xl text-black-2">Jurusan</h2>
                    <p>ajsdlkajsdklas</p>
                </div>
                <div className="flex gap-3 flex-col">
                    <h2 className="text-xl text-black-2">Bidang/minat</h2>
                    <p>ajsdlkajsdklas</p>
                </div>
                <div className="flex gap-3 flex-col">
                    <h2 className="text-xl text-black-2">Nomor HP</h2>
                    <p>ajsdlkajsdklas</p>
                </div>
                <div className="flex gap-3 flex-col">
                    <h2 className="text-xl text-black-2">Instagram</h2>
                    <p>ajsdlkajsdklas</p>
                </div>
            </div>
        </Fragment>
    );
}

Profil.layout = (page) => <Layout children={page} user={page.props.user} />;

export default Profil;
