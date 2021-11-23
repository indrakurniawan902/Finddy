import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../../../components/Layout";
import Button from "../../../components/Button";
import BackButton from "../../../partials/BackButton";
import Friend from "../../../components/Friend";

function RequestsTeman({ prevUrl, requests }) {
    return (
        <>
            <Helmet>
                <title>Permintaan Pertemanan</title>
            </Helmet>

            <div className="flex justify-between items-center mb-10">
                <h1 className="text-3xl font-bold text-black-1">
                    Teman Belajar
                </h1>
            </div>

            <div className="flex flex-wrap justify-start items-center mb-10">
                <BackButton href={prevUrl}></BackButton>
            </div>

            <h2 className="h3 mt-6 mb-6">Permintaan Pertemanan</h2>
            {requests.length > 0 ? (
                <div className="flex flex-col gap-3">
                    {requests.map((user, index) => (
                        <Friend
                            id={user.id}
                            key={index}
                            name={user.nama_lengkap}
                            bidang={user.bidang_minat}
                            avatar={user.foto}
                            href={route("user.show", user.username)}
                            isWait
                        />
                    ))}
                </div>
            ) : (
                <p className="mt-6 text-center">
                    Belum ada permintaan pertemanan
                </p>
            )}
        </>
    );
}

RequestsTeman.layout = (page) => (
    <Layout children={page} user={page.props.user} />
);

export default RequestsTeman;
