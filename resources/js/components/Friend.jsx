import { Link } from "@inertiajs/inertia-react";
import React from "react";
import { Icon } from "@iconify/react";
import addIcon from "../../img/icon/add.svg";
import infoIcon from "../../img/icon/information.svg";
import { Inertia } from "@inertiajs/inertia";
import swal from "sweetalert2";

function Friend({ id, name, bidang, avatar, href, isFriend, isWait, isSent }) {
    const handleAdd = (e) => {
        e.preventDefault();
        console.log("add");

        Inertia.post(`/add/${id}`, [], {
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
        console.log("acc");

        Inertia.post(`/acc/${id}`, [], {
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

        Inertia.post(`/deny/${id}`, [], {
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
        <div className="flex gap-3 justify-between items-center px-5 py-4 bg-white-1 rounded-lg shadow-sm">
            <div className="flex gap-3">
                <div className="foto h-14 w-14 rounded-full bg-blue-3 overflow-hidden">
                    <img src={`${base_url}/${avatar}`} alt="avatar" />
                </div>
                <div className="flex flex-col gap-1">
                    <p className="name text-lg font-bold hover:text-blue-3 animation-all duration-500">
                        {" "}
                        <Link href={href}>{name}</Link>
                    </p>
                    <p className="bidang text-xs px-2 py-0.5 border-1 border-blue-2 rounded-full text-center w-max">
                        {bidang}
                    </p>
                </div>
            </div>
            {isFriend ? (
                <Link href={href}>
                    <img src={infoIcon} alt="information icon" />
                </Link>
            ) : isWait ? (
                <form>
                    <button
                        type="submit"
                        className="rounded-lg bg-white-3 px-3 py-2 mr-3 hover:bg-white-4 transition-all"
                        onClick={handleDeny}
                    >
                        <Icon
                            icon="akar-icons:cross"
                            color="#909090"
                            className="inline"
                        />
                    </button>

                    <button
                        type="submit"
                        className="rounded-lg bg-blue-3 text-white-1 px-4 py-2 hover:bg-blue-4 transition-all"
                        onClick={handleAcc}
                    >
                        <Icon
                            icon="akar-icons:check"
                            color="white"
                            className="inline"
                        />{" "}
                        Terima
                    </button>
                </form>
            ) : isSent ? (
                <button disabled className="cursor-default">
                    <Icon
                        icon="mdi:account-clock"
                        color="#faaa5f"
                        width="24"
                        height="24"
                    />
                </button>
            ) : (
                <form onSubmit={handleAdd}>
                    <button type="submit">
                        <img src={addIcon} alt="add icon" />
                    </button>
                </form>
            )}
        </div>
    );
}

export default Friend;
