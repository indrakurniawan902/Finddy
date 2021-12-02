import { Inertia } from "@inertiajs/inertia";
import { Link } from "@inertiajs/inertia-react";
import React from "react";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import Layout from "../../components/Layout";

function Admin({ discussions }) {
    const handleAccept = (discussId) => {
        Inertia.put(route("forum.accept", discussId));
        Swal.fire({
            icon: "success",
            title: "Berhasil",
            text: "Forum diskusi berhasil diizinkan",
            confirmButtonColor: "#607EF5",
        });
    };

    const handleDelete = (discussId) => {
        Swal.fire({
            title: "Apakah kamu yakin?",
            text: "Kamu tidak bisa membatalkan ini",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#607EF5",
            cancelButtonColor: "#d33",
            confirmButtonText: "Ya, Hapus diskusi",
            cancelButtonText: "Batalkan",
        }).then((result) => {
            if (result.isConfirmed) {
                Inertia.delete(route("forum.delete", discussId));
                Swal.fire({
                    title: "Dihapus!",
                    text: "Diskusi berhasil dihapus",
                    icon: "success",
                    confirmButtonColor: "#607EF5",
                });
            }
        });
    };

    return (
        <>
            <Helmet>
                <title>Halaman Admin</title>
            </Helmet>
            <div className="flex flex-wrap justify-center md:justify-between items-center mb-10">
                <h1 className="text-3xl font-bold text-black-1 w-full md:w-auto text-left">
                    Semua Forum Diskusi
                </h1>
            </div>
            <table className="border-collapse w-full my-4 rounded-lg overflow-hidden">
                <thead>
                    <tr>
                        <th className="p-3 font-bold uppercase bg-blue-3 text-white-1 hidden lg:table-cell">
                            ID
                        </th>
                        <th className="p-3 font-bold uppercase bg-blue-3 text-white-1 hidden lg:table-cell">
                            Judul Diskusi
                        </th>
                        <th className="p-3 font-bold uppercase bg-blue-3 text-white-1 hidden lg:table-cell">
                            Pertanyaan
                        </th>
                        <th className="p-3 font-bold uppercase bg-blue-3 text-white-1 hidden lg:table-cell">
                            Author
                        </th>
                        <th className="p-3 font-bold uppercase bg-blue-3 text-white-1 hidden lg:table-cell">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {discussions.map((discussion) => (
                        <tr
                            key={discussion.id}
                            className="bg-white lg:hover:bg-blue-1 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0"
                        >
                            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border-b-2 border-white-4 block lg:table-cell relative lg:static">
                                {discussion.id}
                            </td>
                            <td className="w-full lg:w-auto p-3 text-gray-800 text-left border-b-2 border-white-4 block lg:table-cell relative lg:static">
                                {discussion.title}
                            </td>
                            <td className="w-full lg:w-auto p-3 text-gray-800 border-b-2 border-white-4 text-left block lg:table-cell relative lg:static">
                                {discussion.body}
                            </td>
                            <td className="w-full lg:w-auto p-3 text-gray-800 border-b-2 border-white-4 text-center block lg:table-cell relative lg:static">
                                <Link
                                    href={route("user.show", discussion.author)}
                                    className="font-semibold text-blue-3"
                                >
                                    {discussion.author}
                                </Link>
                            </td>
                            <td className="w-full lg:w-auto p-3 text-gray-800 border-b-2 border-white-4 text-center block lg:table-cell relative lg:static">
                                {discussion.isAdmit == 0 && (
                                    <Link
                                        onClick={() =>
                                            handleAccept(discussion.id)
                                        }
                                        className="text-blue-3 hover:text-blue-4 font-bold"
                                    >
                                        Accept
                                    </Link>
                                )}
                                <Link
                                    onClick={() => handleDelete(discussion.id)}
                                    className="text-red-3 hover:text-red-4 font-bold ml-3"
                                >
                                    Delete
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

Admin.layout = (page) => <Layout children={page} user={page.props.user} />;

export default Admin;
