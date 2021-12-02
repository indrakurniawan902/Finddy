import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import Discussion from "../../../components/Forum/Discussion";
import Layout from "../../../components/Layout";
import BackButton from "../../../partials/BackButton";

function MyForum({ discussions }) {
    return (
        <Fragment>
            <Helmet>
                <title>Forum Diskusi</title>
            </Helmet>

            <div className="flex justify-between items-center mb-10">
                <h1 className="text-3xl font-bold text-black-1">
                    Forum Diskusi
                </h1>
            </div>
            <BackButton href={route("forum")}></BackButton>
            <h2 className="h3 mt-6 mb-6">Diskusiku</h2>

            <div className="flex flex-col gap-5">
                {discussions ? (
                    discussions.map((discussion, index) => (
                        <Discussion
                            key={index}
                            id={discussion.id}
                            title={discussion.title}
                            discussion={discussion.body}
                            author={discussion.author}
                            time={discussion.time}
                            totalResponse={discussion.totalResponse}
                            authorLink="#"
                            detailLink={route("forum.detail", discussion.id)}
                            isEditable
                            editLink={route("forum.edit", discussion.id)}
                            deleteLink={route("forum.delete", discussion.id)}
                            status={discussion.isAdmit}
                        />
                    ))
                ) : (
                    <p className="mt-4">Belum ada diskusi yang kamu buat</p>
                )}
            </div>
        </Fragment>
    );
}

MyForum.layout = (page) => <Layout children={page} user={page.props.user} />;

export default MyForum;
