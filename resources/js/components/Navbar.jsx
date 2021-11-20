import { React, useState } from "react";
import { Link } from "@inertiajs/inertia-react";
import Button from "./Button";
import Navlink from "../partials/Navlink";
import Hamburger from "../partials/Hamburger";
import profilIcon from "../../img/icon/profil-dark.svg";

const parsePage = (path) => path.substring(path.lastIndexOf("/"));

function Navbar({ user }) {
    let pageActive = parsePage(window.location.pathname);
    const [isDrawerOpen, setisDrawerOpen] = useState(false);
    const defaultDrawer =
        "drawer lg:hidden items-center flex flex-col items-start py-8 px-6 gap-8 absolute bg-blue-1 z-10 shadow-blueDefault w-full top-20 transition-all duration-700 shadow-sm";

    return (
        <div className="sticky top-0 z-30">
            <nav className="bg-white-2 relative h-20 z-20 right">
                <div className="container-auto flex items-center justify-between h-full px-4 lg:px-0">
                    <div className="logo">
                        <Link href={route("home")}>
                            <picture>
                                <source
                                    media="(max-width: 700px)"
                                    srcSet="./img/logo.svg"
                                />
                                <img src="./img/logo-full.svg" alt="logo"></img>
                            </picture>
                        </Link>
                    </div>

                    <div className="lg:hidden">
                        <button
                            aria-label="menu"
                            className="h-10 w-10 flex flex-col justify-center items-center group"
                            onClick={() => setisDrawerOpen(!isDrawerOpen)}
                        >
                            <Hamburger isOpen={isDrawerOpen}></Hamburger>
                        </button>
                    </div>

                    <div className="navlink hidden lg:flex gap-10 items-center">
                        <Navlink
                            name="/"
                            page={pageActive}
                            href={route("home")}
                        >
                            Beranda
                        </Navlink>
                        <Navlink
                            name="/bantuan"
                            page={pageActive}
                            href={route("home.bantuan")}
                        >
                            Bantuan
                        </Navlink>
                        {user ? (
                            <>
                                <div className="flex gap-2">
                                    <img src={profilIcon} alt="profil icon" />
                                    <Navlink
                                        name="/dashboard"
                                        page={pageActive}
                                        href={route("dashboard")}
                                    >
                                        Halo {user.nama_lengkap}
                                    </Navlink>
                                </div>
                                <Button
                                    type="primary"
                                    href="/logout"
                                    method="post"
                                >
                                    Logout
                                </Button>
                            </>
                        ) : (
                            <>
                                <Button
                                    type="secondary"
                                    href={route("register")}
                                >
                                    Daftar
                                </Button>
                                <Button type="primary" href={route("login")}>
                                    Login
                                </Button>
                            </>
                        )}
                    </div>
                </div>
            </nav>

            <div
                className={`${defaultDrawer} ${
                    isDrawerOpen ? "top-20" : "-top-120"
                }`}
            >
                <Navlink name="/" href={route("home")} page={pageActive}>
                    Beranda
                </Navlink>
                <Navlink
                    name="/bantuan"
                    href={route("home.bantuan")}
                    page={pageActive}
                >
                    Bantuan
                </Navlink>
                {user ? (
                    <div className="flex flex-col gap-3 mt-2">
                        <p className="text-xl text-center">
                            Halo {user.nama_lengkap}
                        </p>
                        <Button type="primary" href={route("dashboard")}>
                            Dashboard
                        </Button>
                        <Button type="secondary" href="/logout" method="post">
                            Logout
                        </Button>
                    </div>
                ) : (
                    <div className="flex gap-6">
                        <Button type="secondary" href={route("register")}>
                            Daftar
                        </Button>
                        <Button type="primary" href={route("login")}>
                            Login
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Navbar;
