import React, { Fragment, useState } from "react";
import { Helmet } from "react-helmet";
import Button from "../../components/Button";
import Discussion from "../../components/Forum/Discussion";
import Layout from "../../components/Layout";
import { Inertia } from "@inertiajs/inertia";
import { Link } from "@inertiajs/inertia-react";

function ForumDiskusi({ user, discussions, keyword_value }) {
    const [keyword, setKeyword] = useState(keyword_value ? keyword_value : "");
    const [sort, setSort] = useState("default");

    const compareTime = (a, b) => {
        if (a.original_time < b.original_time) {
            return 1;
        }
        if (a.original_time > b.original_time) {
            return -1;
        }
        return 0;
    };

    const compareResponses = (a, b) => {
        if (a.totalResponse < b.totalResponse) {
            return 1;
        }
        if (a.totalResponse > b.totalResponse) {
            return -1;
        }
        return 0;
    };

    const handleSort = (e) => {
        setSort(e.target.value);
        switch (e.target.value) {
            case "time":
                discussions.sort(compareTime);
                break;

            case "response":
                discussions.sort(compareResponses);
                break;

            default:
                break;
        }
    };

    const handleChange = (e) => {
        setKeyword(e.target.value);
    };

    const handleSearch = (e) => {
        e.preventDefault();

        Inertia.get(
            route("forum.search"),
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
                <title>Forum Diskusi</title>
            </Helmet>

            <div className="flex flex-wrap justify-center md:justify-between items-center mb-10">
                <h1 className="text-3xl font-bold text-black-1 w-full md:w-auto text-left">
                    Forum Diskusi
                </h1>
                <div className="flex gap-6 mt-6 md:mt-0">
                    <Button href={route("forum.my")}>Diskusiku</Button>
                    <Button type="primary" href={route("forum.create")}>
                        Buat Diskusi
                    </Button>
                </div>
            </div>

            <h2 className="h3 mb-6">Cari Forum Diskusi</h2>
            <form
                className="flex gap-2 md:gap-5 max-h-10 md:max-h-full"
                onSubmit={handleSearch}
            >
                <input
                    type="text"
                    className="input-2 flex-grow"
                    onChange={handleChange}
                    value={keyword}
                    name="keyword"
                    required
                    placeholder="Cari dan mulailah berdiskusi"
                />
                <Button type="primary" isSubmit>
                    Cari
                </Button>
            </form>
            {keyword_value ? (
                <>
                    <p className="mb-1 mt-8 text-center">
                        Menampilkan hasil pencarian untuk{" "}
                        <span className="font-bold text-orange-3">
                            "{keyword_value}"
                        </span>
                    </p>
                    <Link
                        href={route("forum")}
                        className="font-bold text-base text-blue-3 text-center w-full block mb-6"
                    >
                        Kembali
                    </Link>
                </>
            ) : (
                <h2 className="h3 mb-6 mt-8">Daftar Diskusi</h2>
            )}

            {discussions.length > 0 ? (
                <div className="flex flex-col gap-1">
                    <p className="text-base text-black-1">Urut berdasarkan</p>
                    <select
                        name="sort-by"
                        id="sort"
                        className="bg-blue-3 text-white-1 py-2 px-3 rounded-md w-56 focus:outline-none border-4 border-blue-3 focus:border-blue-2 transition-all duration-500"
                        onChange={handleSort}
                        value={sort}
                    >
                        <option value="default">Tidak ada</option>
                        <option value="time">Waktu dibuat</option>
                        <option value="response">Jumlah response</option>
                    </select>
                </div>
            ) : keyword_value ? (
                <p className="text-center text-xl text-black-2 mt-20">
                    Hasil pencarian tidak ditemukan
                </p>
            ) : (
                <p className="text-center text-xl text-black-2 mt-20">
                    Maaf saat ini belum ada diskusi
                </p>
            )}

            <div className="flex flex-col gap-5 mt-6">
                {discussions.map((discussion, index) => (
                    <Discussion
                        key={index}
                        title={discussion.title}
                        discussion={discussion.body}
                        author={discussion.author}
                        status={1}
                        time={discussion.time}
                        totalResponse={discussion.totalResponse}
                        authorLink={
                            discussion.author === user.username
                                ? route("profil")
                                : route("user.show", discussion.author)
                        }
                        detailLink={route("forum.detail", discussion.id)}
                    />
                ))}
            </div>
        </Fragment>
    );
}

ForumDiskusi.layout = (page) => (
    <Layout children={page} user={page.props.user} />
);

export default ForumDiskusi;
