import React, { Fragment, useState, useRef } from "react";
import { Helmet } from "react-helmet";
import Layout from "../../components/Layout";
import Button from "../../components/Button";
import Loading from "../../components/Loading";
import swal from "sweetalert2";
import { Inertia } from "@inertiajs/inertia";

function Edit({ user, editUser, errors }) {
    console.log(errors);
    const [values, setValues] = useState({
        username: editUser.username,
        nama_lengkap: editUser.nama_lengkap,
        perguruan_tinggi: editUser.perguruan_tinggi,
        jurusan: editUser.jurusan,
        no_hp: editUser.no_hp,
        instagram: editUser.instagram,
        bidang_minat: editUser.bidang_minat,
        foto_profil: editUser.foto_profil,
    });
    const [error] = useState({
        username: "",
        nama_lengkap: "",
        perguruan_tinggi: "",
        jurusan: "",
        no_hp: "",
        instagram: "",
        bidang_minat: "",
        foto_profil: "",
    });
    const [image, setImage] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const imageRef = useRef();

    const buttonDisabled = () => {
        if (
            values.username === "" ||
            values.username.length < 4 ||
            values.nama_lengkap === "" ||
            values.perguruan_tinggi === "" ||
            values.jurusan === "" ||
            values.no_hp === "" ||
            values.instagram === "" ||
            values.bidang_minat === ""
        ) {
            return true;
        } else {
            return false;
        }
    };

    const handleChange = (e) => {
        const key = e.target.id;
        const value = e.target.value;
        setValues((values) => ({
            ...values,
            [key]: value,
        }));

        //VALIDASI SISI USER
        switch (key) {
            case "username":
                error.username =
                    value === ""
                        ? "Username tidak boleh kosong"
                        : value.length < 4
                        ? "Username minimal 4 karakter"
                        : "";
                break;
            case "nama_lengkap":
                error.nama_lengkap =
                    value === "" ? "Nama lengkap tidak boleh kosong" : "";
                break;
            case "perguruan_tinggi":
                error.perguruan_tinggi =
                    value === "" ? "Perguruan tinggi tidak boleh kosong" : "";
                break;
            case "jurusan":
                error.jurusan =
                    value === "" ? "Jurusan tidak boleh kosong" : "";
                break;
            case "no_hp":
                error.no_hp = value === "" ? "Nomor HP tidak boleh kosong" : "";
                break;
            case "instagram":
                error.instagram =
                    value === "" ? "Instagram tidak boleh kosong" : "";
                break;
            case "bidang_minat":
                error.bidang_minat =
                    value === "" ? "Bidang minat tidak boleh kosong" : "";
                break;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        for (let key in values) {
            formData.append(key, values[key]);
        }
        if (imageRef.current.files[0])
            formData.append("foto_profil", imageRef.current.files[0]);
        // else formData.append("foto_profil", null);
        formData.append("_method", "put");

        Inertia.post(route("user.update", user.id), formData, {
            onStart: () => {
                setIsLoading(true);
            },
            onSuccess: () => {
                setIsLoading(false);
                swal.fire({
                    icon: "success",
                    title: "Berhasil!",
                    text: "Data berhasil diperbarui!",
                    confirmButtonColor: "#607EF5",
                });
            },
            onError: () => {
                setIsLoading(false);
                swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Terjadi kesalahan, silahkan coba lagi",
                    confirmButtonColor: "#607EF5",
                });
            },
        });
    };

    const handleUpload = (e) => {
        e.preventDefault();
        let reader = new FileReader();
        reader.onloadend = () => {
            if (reader.readyState === 2) {
                setImage(reader.result);
            }
        };
        reader.readAsDataURL(e.target.files[0]);
    };

    return (
        <Fragment>
            <Helmet>
                <title>Edit</title>
            </Helmet>

            {isLoading && <Loading message="Loading..." />}

            <div className="flex flex-wrap justify-center md:justify-between items-center mb-10">
                <h1 className="text-3xl font-bold text-black-1 w-full md:w-auto text-left">
                    Edit profile
                </h1>
            </div>
            <div className="py-3 px-5 flex flex-col gap-2 md:gap-4 rounded-lg w-auto lg:w-4/4 shadow-md bg-white-1">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="nama_lengkap" className="block text-xl">
                        Nama Lengkap
                    </label>
                    <input
                        type="text"
                        name="nama_lengkap"
                        id="nama_lengkap"
                        value={values.nama_lengkap}
                        onChange={handleChange}
                        className="input"
                        placeholder="Nama lengkap"
                        required
                    />
                    {errors.nama_lengkap && (
                        <div className="text-sm text-red-4 mt-1">
                            {errors.nama_lengkap}
                        </div>
                    )}
                    <div className="text-sm text-red-4 mt-1">
                        {error.nama_lengkap}
                    </div>

                    <label htmlFor="username" className="block text-xl mt-4">
                        Username
                    </label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        value={values.username}
                        onChange={handleChange}
                        className="input"
                        placeholder="Username"
                        required
                    />
                    {errors.username && (
                        <div className="text-sm text-red-4 mt-1">
                            {errors.username}
                        </div>
                    )}
                    <div className="text-sm text-red-4 mt-1">
                        {error.username}
                    </div>

                    <label
                        htmlFor="perguruan_tinggi"
                        className="block text-xl mt-4"
                    >
                        Perguruan Tinggi
                    </label>
                    <input
                        type="text"
                        name="perguruan_tinggi"
                        id="perguruan_tinggi"
                        value={values.perguruan_tinggi}
                        onChange={handleChange}
                        className="input"
                        placeholder="Perguruan tinggi"
                        required
                    />
                    {errors.perguruan_tinggi && (
                        <div className="text-sm text-red-4 mt-1">
                            {errors.perguruan_tinggi}
                        </div>
                    )}
                    <div className="text-sm text-red-4 mt-1">
                        {error.perguruan_tinggi}
                    </div>

                    <label htmlFor="jurusan" className="block text-xl mt-4">
                        Jurusan
                    </label>
                    <input
                        type="text"
                        name="jurusan"
                        id="jurusan"
                        value={values.jurusan}
                        onChange={handleChange}
                        className="input"
                        placeholder="Jurusan"
                        required
                    />
                    {errors.jurusan && (
                        <div className="text-sm text-red-4 mt-1">
                            {errors.jurusan}
                        </div>
                    )}
                    <div className="text-sm text-red-4 mt-1">
                        {error.jurusan}
                    </div>

                    <label
                        htmlFor="bidang_minat"
                        className="block text-xl mt-4"
                    >
                        Bidang/minat
                    </label>
                    <input
                        type="text"
                        name="bidang_minat"
                        id="bidang_minat"
                        value={values.bidang_minat}
                        onChange={handleChange}
                        className="input"
                        placeholder="Bidang/minat"
                        required
                    />
                    {errors.bidang_minat && (
                        <div className="text-sm text-red-4 mt-1">
                            {errors.bidang_minat}
                        </div>
                    )}
                    <div className="text-sm text-red-4 mt-1">
                        {error.bidang_minat}
                    </div>

                    <label htmlFor="no_hp" className="block text-xl mt-4">
                        Nomor HP
                    </label>
                    <input
                        type="text"
                        name="no_hp"
                        id="no_hp"
                        value={values.no_hp}
                        onChange={handleChange}
                        className="input"
                        placeholder="Nomor HP"
                        required
                    />
                    {errors.no_hp && (
                        <div className="text-sm text-red-4 mt-1">
                            {errors.no_hp}
                        </div>
                    )}
                    <div className="text-sm text-red-4 mt-1">{error.no_hp}</div>

                    <label htmlFor="instagram" className="block text-xl mt-4">
                        Instagram
                    </label>
                    <input
                        type="text"
                        name="instagram"
                        id="instagram"
                        value={values.instagram}
                        onChange={handleChange}
                        className="input"
                        placeholder="Username instagram"
                        required
                    />
                    {errors.instagram && (
                        <div className="text-sm text-red-4 mt-1">
                            {errors.instagram}
                        </div>
                    )}
                    <div className="text-sm text-red-4 mt-1">
                        {error.instagram}
                    </div>

                    <label htmlFor="foto" className="block text-xl mt-4">
                        Foto profile
                    </label>

                    <input
                        type="file"
                        name="foto"
                        id="foto"
                        ref={imageRef}
                        onChange={handleUpload}
                        className="input mb-8"
                    />

                    <div className="gap-3">
                        <Button
                            type="primary"
                            isSubmit
                            isDisabled={buttonDisabled()}
                        >
                            Simpan data
                        </Button>
                    </div>
                </form>
            </div>
        </Fragment>
    );
}

Edit.layout = (page) => <Layout children={page} user={page.props.user} />;

export default Edit;
