import React, { Fragment, useState } from "react";
import { Helmet } from "react-helmet";
import Layout from "../../components/Layout";
import Button from "../../components/Button";
import Friend from "../../components/Friend";
import reqOffIcon from "../../../img/icon/friend-req-off.svg";
import reqOnIcon from "../../../img/icon/friend-req-on.svg";
import { Link } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";

function TemanBelajar({ user, friends, count, users_search, keyword_value }) {
    const [keyword, setKeyword] = useState(keyword_value ? keyword_value : "");

    const handleChange = (e) => {
        setKeyword(e.target.value);
    };

    const handleSearch = (e) => {
        e.preventDefault();

        Inertia.get(
            route("friend.search"),
            { keyword: keyword },
            {
                onError: () => {
                    swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Terjadi kesalahan, mohon coba lagi",
                        confirmButtonColor: "#607EF5",
                    });
                },
            }
        );
    };

    return (
        <Fragment>
            <Helmet>
                <title>Teman Belajar</title>
            </Helmet>

            <h1 className="text-3xl font-bold text-black-1 mb-10">
                Teman Belajar
            </h1>

            <h2 className="h3 mb-6">Cari Teman Belajar</h2>
            <form
                className="flex gap-2 md:gap-5 max-h-10 md:max-h-full"
                onSubmit={handleSearch}
            >
                <input
                    type="text"
                    className="input-2 flex-grow"
                    required
                    placeholder="Temukan berdasarkan bidang/minat"
                    onChange={handleChange}
                    value={keyword}
                />
                <Button type="primary" isSubmit>
                    Cari
                </Button>
            </form>

            {friends ? (
                friends.length > 0 ? (
                    <>
                        <div className="flex items-center justify-between">
                            <h3 className="h3 mt-8 mb-6">
                                Daftar Teman Belajar
                            </h3>{" "}
                            <Link as="button" href={route("friend.request")}>
                                <img
                                    className="shadow-sm"
                                    src={
                                        count.request > 0
                                            ? reqOnIcon
                                            : reqOffIcon
                                    }
                                    alt="friends request icon"
                                    height="36px"
                                    width="36px"
                                />
                            </Link>
                        </div>

                        <div className="flex flex-col gap-3">
                            {friends.map((user, index) => (
                                <Friend
                                    id={user.id}
                                    key={index}
                                    name={user.nama_lengkap}
                                    bidang={user.bidang_minat}
                                    avatar={user.foto}
                                    href={route("user.show", user.username)}
                                    isFriend
                                />
                            ))}
                        </div>
                    </>
                ) : (
                    <p className="text-center text-xl text-black-2 mt-20">
                        Saat ini kamu belum memiliki teman belajar
                    </p>
                )
            ) : users_search.length > 0 ? (
                <>
                    <p className="mb-1 mt-8 text-center">
                        Menampilkan hasil pencarian untuk bidang{" "}
                        <span className="font-bold text-orange-3">
                            "{keyword_value}"
                        </span>
                    </p>
                    <Link
                        href={route("friend")}
                        className="font-bold text-base text-blue-3 text-center w-full block mb-6"
                    >
                        Kembali
                    </Link>
                    <div className="flex flex-col gap-3">
                        {users_search.map((user, index) => (
                            <Friend
                                id={user.id}
                                key={index}
                                name={user.nama_lengkap}
                                bidang={user.bidang_minat}
                                avatar={user.foto}
                                href={route("user.show", user.username)}
                                isFriend={user.isFriend}
                                isWait={user.isWait}
                                isSent={user.isSent}
                            />
                        ))}
                    </div>
                </>
            ) : (
                <>
                    <p className="text-center text-xl text-black-2 mt-20">
                        Hasil pencarian tidak ditemukan
                    </p>
                    <Link
                        href={route("friend")}
                        className="font-bold text-base text-blue-3 text-center w-full block mt-2 mb-6"
                    >
                        Kembali
                    </Link>
                </>
            )}
        </Fragment>
    );
}

TemanBelajar.layout = (page) => (
    <Layout children={page} user={page.props.user} />
);

export default TemanBelajar;
