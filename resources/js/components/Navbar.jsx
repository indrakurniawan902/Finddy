import { React, Fragment, useState } from "react";
import { Link } from "@inertiajs/inertia-react";
import Button from "./Button";
import Navlink from "./NavLink";

const parsePage = (path) => path.substring(path.lastIndexOf("/"));

function Navbar() {
    let pageActive = parsePage(window.location.pathname);
    const [isDrawerOpen, setisDrawerOpen] = useState(false);
    let drawerStyle = isDrawerOpen
        ? "drawer lg:hidden items-center flex flex-col items-start py-8 px-6 gap-8 absolute bg-white-2 z-10 bg-white shadow-blueDefault w-full top-20 transition-all duration-700 shadow-sm"
        : "drawer lg:hidden items-center flex flex-col items-start py-8 px-6 gap-8 absolute bg-white-2 z-10 bg-white shadow-blueDefault w-full -top-120 transition-all duration-700 shadow-sm";

    let burgerIcon = isDrawerOpen ? "img/icon/close.svg" : "img/icon/menu.svg";

    return (
        <div className="sticky top-0 z-30">
            <nav className="bg-white-2 relative h-20 z-20 right">
                <div className="container-auto flex items-center justify-between h-full px-4 lg:px-0">
                    <div className="logo">
                        <Link href="/">
                            <img src="img/logo-full.svg" alt="logo" />
                        </Link>
                    </div>

                    <div className="lg:hidden">
                        <button onClick={() => setisDrawerOpen(!isDrawerOpen)}>
                            <img src={burgerIcon} alt="menu-icon" />
                        </button>
                    </div>

                    <div className="navlink hidden lg:flex gap-10 items-center">
                        <Navlink name="/" page={pageActive} href="/">
                            Beranda
                        </Navlink>
                        <Navlink
                            name="/bantuan"
                            page={pageActive}
                            href="/bantuan"
                        >
                            Bantuan
                        </Navlink>
                        <Button type="secondary" href="/register">
                            Daftar
                        </Button>
                        <Button type="primary" href="/login">
                            Login
                        </Button>
                    </div>
                </div>
            </nav>
            <div className={drawerStyle}>
                <Navlink name="/" href="/" page={pageActive}>
                    Beranda
                </Navlink>
                <Navlink name="/bantuan" href="/bantuan" page={pageActive}>
                    Bantuan
                </Navlink>
                <div className="flex gap-6">
                    <Button type="secondary" href="/register">
                        Daftar
                    </Button>
                    <Button type="primary" href="/login">
                        Login
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
