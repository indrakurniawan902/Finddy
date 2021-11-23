import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import Layout from "../../components/Layout";
import Button from "../../components/Button";
import Friend from "../../components/Friend";
import reqOffIcon from "../../../img/icon/friend-req-off.svg";
import reqOnIcon from "../../../img/icon/friend-req-on.svg";
import { Link } from "@inertiajs/inertia-react";

function TemanBelajar({ user, friends, count }) {
    console.log(user);
    return (
        <Fragment>
            <Helmet>
                <title>Teman Belajar</title>
            </Helmet>

            <h1 className="text-3xl font-bold text-black-1 mb-10">
                Teman Belajar
            </h1>

            <h2 className="h3 mb-6">Cari Teman Belajar</h2>
            <form className="flex gap-2 md:gap-5 max-h-10 md:max-h-full">
                <input
                    type="text"
                    className="input-2 flex-grow"
                    required
                    placeholder="Temukan berdasarkan bidang/minat"
                />
                <Button type="primary" isSubmit>
                    Cari
                </Button>
            </form>

            <div className="flex items-center justify-between">
                <h3 className="h3 mt-8 mb-6">Daftar Teman Belajar</h3>{" "}
                <Link as="button" href={route("friend.request")}>
                    <img
                        className="shadow-sm"
                        src={count.request > 0 ? reqOnIcon : reqOffIcon}
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
        </Fragment>
    );
}

TemanBelajar.layout = (page) => (
    <Layout children={page} user={page.props.user} />
);

export default TemanBelajar;
