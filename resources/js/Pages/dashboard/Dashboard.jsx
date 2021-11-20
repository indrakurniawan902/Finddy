import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import Friend from "../../components/Friend";
import Layout from "../../components/Layout";
import MotivateCard from "../../components/MotivateCard";
import StatusCard from "../../partials/StatusCard";

function Dashboard({ user, users, request, friends, count }) {
    console.log("users:", users);
    console.log("req:", request);
    console.log("friend:", friends);
    return (
        <Fragment>
            <Helmet>
                <title>Dashboard</title>
            </Helmet>

            <h1 className="text-3xl font-bold text-black-1 mb-10">Dashboard</h1>
            <MotivateCard />

            <h3 className="h3 mt-8 mb-6">Status</h3>

            <div className="flex gap-3 flex-wrap justify-center md:justify-start">
                <StatusCard number={count.friends} href="/teman">
                    Teman Belajar
                </StatusCard>
                <StatusCard number={count.requests} href="#">
                    Permintaan Pertemanan
                </StatusCard>
                <StatusCard number="12" href={route("forum.my")}>
                    Diskusiku
                </StatusCard>
            </div>

            <h3 className="h3 mt-8 mb-6">Req Teman Belajar</h3>
            <div className="flex flex-col gap-3">
                {request.map((user, index) => (
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
            <h3 className="h3 mt-8 mb-6">All User</h3>
            <div className="flex flex-col gap-3">
                {users.map((user, index) => {
                    if (user.username !== null) {
                        return (
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
                        );
                    }
                })}
            </div>
            <h3 className="h3 mt-8 mb-6">Daftar Teman Belajar</h3>
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

Dashboard.layout = (page) => <Layout children={page} user={page.props.user} />;

export default Dashboard;
