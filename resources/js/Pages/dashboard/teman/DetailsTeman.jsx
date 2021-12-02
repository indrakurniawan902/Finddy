import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Layout from "../../../components/Layout";
import BackButton from "../../../partials/BackButton";
import Button from "../../../components/Button";
import { Icon } from "@iconify/react";
import swal from "sweetalert2";
import { Inertia } from "@inertiajs/inertia";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";

function DetailsTeman({ user, userDetail, prevUrl, status }) {
    const [image, setImage] = useState(base_url + "/" + userDetail.foto_profil);
    const handleAdd = (e) => {
        e.preventDefault();

        Inertia.post(`/add/${userDetail.id}`, [], {
            onSuccess: () => {
                swal.fire({
                    icon: "success",
                    title: "Berhasil!",
                    text: `Permintaan pertemanan berhasil dikirim`,
                    confirmButtonColor: "#607EF5",
                });
            },
            onError: () => {
                setIsLoading(false);
                swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Terjadi kesalahan, mohon coba lagi",
                    confirmButtonColor: "#607EF5",
                });
            },
        });
    };

    const handleAcc = (e) => {
        e.preventDefault();

        Inertia.post(`/acc/${userDetail.id}`, [], {
            onSuccess: () => {
                swal.fire({
                    icon: "success",
                    title: "Berhasil!",
                    text: `Permintaan pertemanan berhasil diterima!`,
                    confirmButtonColor: "#607EF5",
                });
            },
            onError: () => {
                setIsLoading(false);
                swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Terjadi kesalahan, mohon coba lagi",
                    confirmButtonColor: "#607EF5",
                });
            },
        });
    };

    const handleDeny = (e) => {
        e.preventDefault();

        Inertia.post(`/deny/${userDetail.id}`, [], {
            onSuccess: () => {
                swal.fire({
                    title: `Permintaan pertemanan ditolak`,
                    confirmButtonColor: "#607EF5",
                });
            },
            onError: () => {
                setIsLoading(false);
                swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Terjadi kesalahan, mohon coba lagi",
                    confirmButtonColor: "#607EF5",
                });
            },
        });
    };

    return (
        <>
            <Helmet>
                <title>Detail User</title>
            </Helmet>

            <div className="flex flex-wrap justify-start items-center mb-10">
                <BackButton href={prevUrl}></BackButton>
            </div>

            <div className="py-4 px-5 flex flex-col gap-2 md:gap-4 items-center justify-center w-auto lg:w-4/4">
                <div className="flex place-items-center h-32 w-32 rounded-full overflow-hidden cursor-pointer">
                    <SimpleReactLightbox>
                        <SRLWrapper>
                            <img
                                src={image}
                                alt={`foto-profil-${userDetail.username}`}
                            />
                        </SRLWrapper>
                    </SimpleReactLightbox>
                </div>
                <div className="text-center">
                    <p className="font-bold text-3xl">
                        {userDetail.nama_lengkap}
                    </p>
                    <p className="text-black-2 text-lg">
                        {userDetail.bidang_minat}
                    </p>
                </div>
                {status.isFriend ? (
                    <Button type="primary" isDisabled>
                        Sudah Berteman
                    </Button>
                ) : status.hasFriendRequest ? (
                    <form>
                        <button
                            type="submit"
                            className="rounded-lg bg-white-3 px-3 py-2 mr-3 hover:bg-white-4 transition-all"
                            onClick={handleDeny}
                        >
                            <Icon
                                icon="akar-icons:cross"
                                color="#909090"
                                className="inline mr-1"
                            />
                            Tolak
                        </button>

                        <button
                            type="submit"
                            className="rounded-lg bg-blue-3 text-white-1 px-4 py-2 hover:bg-blue-4 transition-all"
                            onClick={handleAcc}
                        >
                            <Icon
                                icon="akar-icons:check"
                                color="white"
                                className="inline mr-1"
                            />
                            Terima
                        </button>
                    </form>
                ) : status.hasSentRequest ? (
                    <Button type="primary" isDisabled>
                        Permintaan Dikirim
                    </Button>
                ) : (
                    <form onSubmit={handleAdd}>
                        <Button type="primary" isSubmit>
                            <Icon
                                icon="mdi:account-plus"
                                color="white"
                                className="inline mr-3"
                            />
                            Tambahkan Teman
                        </Button>
                    </form>
                )}
            </div>

            <div className="py-3 px-5 flex flex-col gap-2 md:gap-4 rounded-lg w-auto lg:w-4/4 bg-white-1 mt-4">
                <div className="flex gap-3 flex-col mt-3">
                    <h2 className="text-xl text-black-2">Email</h2>
                    <p className="font-bold">{userDetail.email}</p>
                </div>
                <div className="flex gap-3 flex-col mt-3">
                    <h2 className="text-xl text-black-2">Perguruan tinggi</h2>
                    <p className="font-bold">{userDetail.perguruan_tinggi}</p>
                </div>
                <div className="flex gap-3 flex-col mt-3">
                    <h2 className="text-xl text-black-2">Jurusan</h2>
                    <p className="font-bold">{userDetail.jurusan}</p>
                </div>

                {status.isFriend ? (
                    <>
                        <div className="flex gap-3 flex-col mt-3">
                            <h2 className="text-xl text-black-2">Nomor HP</h2>
                            <p className="font-bold">{userDetail.no_hp}</p>
                        </div>
                        <div className="flex gap-3 flex-col mt-3">
                            <h2 className="text-xl text-black-2">Instagram</h2>
                            <p className="font-bold">{userDetail.instagram}</p>
                        </div>
                    </>
                ) : (
                    <p className="text-center mt-5 mb-3 text-orange-4">
                        Silahkan berteman terlebih dahulu untuk mendapatkan
                        kontak lengkapnya
                    </p>
                )}
            </div>
        </>
    );
}

DetailsTeman.layout = (page) => (
    <Layout children={page} user={page.props.user} />
);

export default DetailsTeman;
