import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import Friend from "../../components/Friend";
import Layout from "../../components/Layout";
import MotivateCard from "../../components/MotivateCard";
import StatusCard from "../../partials/StatusCard";

function Dashboard({ user }) {
    console.log(user);
    return (
        <Fragment>
            <Helmet>
                <title>Dashboard</title>
            </Helmet>

            <h1 className="text-3xl font-bold text-black-1 mb-10">Dashboard</h1>
            <MotivateCard />

            <h3 className="h3 mt-8 mb-6">Status</h3>

            <div className="flex gap-2">
                <StatusCard number="12" href="#">
                    Teman Belajar
                </StatusCard>
                <StatusCard number="12" href="#">
                    Permintaan Pertemanan
                </StatusCard>
                <StatusCard number="12" href="#">
                    Diskusiku
                </StatusCard>
            </div>

            <h3 className="h3 mt-8 mb-6">Daftar Teman Belajar</h3>
            <div className="flex flex-col gap-3">
                <Friend
                    name="John Siregar"
                    bidang="Web Development"
                    avatar="./img/avatar.png"
                    href="#"
                />
                <Friend
                    name="John Simanjuntak"
                    bidang="UI/UX Design"
                    avatar="./img/avatar.png"
                    href="#"
                />
                <Friend
                    name="John Lennon"
                    bidang="Data Science"
                    avatar="./img/avatar.png"
                    href="#"
                />
            </div>
        </Fragment>
    );
}

Dashboard.layout = (page) => <Layout children={page} user={page.props.user} />;

export default Dashboard;
