import { React, useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import { Helmet } from "react-helmet";
import { Link } from "@inertiajs/inertia-react";
import AOS from "AOS";

function ForgotPassword() {
    useEffect(() => {
        AOS.init();
    }, []);

    const [values, setValues] = useState({
        email: "",
    });

    const handleChange = (e) => {
        const key = e.target.id;
        const value = e.target.value;
        setValues((values) => ({
            ...values,
            [key]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Inertia.post("/users", values); tambah controller buat input data
    };

    return (
        <>
            <Helmet>
                <title>Halaman Lupa Password</title>
            </Helmet>

            <Navbar />

            <main>
                <div className="h-screen w-1/2 bg-blue-3 absolute hidden lg:block"></div>
                <div className="container-auto flex min-h-screen overflow-hidden">
                    <div className="flex-1 bg-blue-3 hidden lg:block">
                        <img
                            src="./img/illustration/girl-book.svg"
                            alt="girl-book-illustration"
                            className="absolute bottom-40 left-0 transform scale-150"
                        />
                    </div>

                    <div className="flex-1 flex flex-col items-center justify-center gap-8">
                        <div
                            className="lg:w-3/5 w-9/12 max-w-xl"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            <div className="mb-7">
                                <h1 className="text-black-1 text-4xl font-bold">
                                    Lupa Password?
                                </h1>
                                <h2 className="text-black-2 text-base">
                                    Silahkan masukkan email kamu di sini
                                </h2>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <label
                                    htmlFor="email"
                                    className="block text-xl"
                                >
                                    Email
                                </label>
                                <input
                                    type="text"
                                    name="email"
                                    id="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    className="input mb-6"
                                    placeholder="Masukkan email kamu"
                                    required
                                />

                                <Button type="primary" isSubmit isFull>
                                    Kirim Email
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default ForgotPassword;
