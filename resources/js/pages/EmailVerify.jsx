import { Inertia } from "@inertiajs/inertia";
import { Link } from "@inertiajs/inertia-react";
import React, { useState } from "react";
import swal from "sweetalert2";
import Button from "../components/Button";
import logo from "../../img/logo-full.svg";
import email_sent from "../../img/email-sent.svg";
import Loading from "../components/Loading";

function EmailVerify(props) {
    console.log(props);
    const email = props.user.email;
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.post(route("verification.send"), email, {
            onStart: () => {
                setIsLoading(true);
            },
            onSuccess: () => {
                setIsLoading(false);
                swal.fire({
                    icon: "success",
                    title: "Berhasil!",
                    text: "Email verifikasi sudah dikirimkan, silakan cek kembali email kamu",
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
        <>
            {isLoading && (
                <Loading message="Mengirim ulang email verifikasi..." />
            )}
            <div className="bg-white-2 min-h-screen">
                <div className="container-auto flex flex-col items-center justify-center min-h-screen gap-8">
                    <Link
                        href={route("home")}
                        className="logo mx-auto h-10 block"
                    >
                        <img
                            src={logo}
                            alt="logo-finddy"
                            className="mx-auto h-full"
                        />
                    </Link>
                    <img
                        src={email_sent}
                        alt="email sent"
                        height="300px"
                        width="300px"
                    />
                    <div className="flex flex-col gap-1 items-center">
                        <h1 className="h2">
                            Email Verifikasi Berhasil Dikirim!
                        </h1>
                        <p className="text-base text-black-2 max-w-md text-center">
                            Silakan cek email kamu sekarang untuk menyelesaikan
                            proses pendaftaran akunmu.
                        </p>
                    </div>

                    <div className="flex gap-4">
                        <Button href="/logout" type="secondary" method="post">
                            Logout
                        </Button>
                        <form onSubmit={handleSubmit} method="post">
                            <Button type="primary" method="post" isSubmit>
                                Kirim Ulang
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EmailVerify;
