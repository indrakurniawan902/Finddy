import React from "react";
import { Link } from "@inertiajs/inertia-react";
import { Menus } from "./data";
import Menu from "./Menu";
import logoFull from "../../../img/logo-full.svg";
import avatar from "../../../img/avatar.png";

const parsePage = (path) => path.split("/");

function Sidebar({ user }) {
    let pageActive = parsePage(window.location.pathname);

    return (
        <>
            <aside className="py-7 px-8 w-full">
                <Link href={route("home")} className="logo mx-auto h-8 block">
                    <img
                        src={logoFull}
                        alt="logo-finddy"
                        className="mx-auto h-full"
                    />
                </Link>
                <div className="profil mt-9 text-center">
                    <div className="img w-24 h-24 rounded-full overflow-hidden bg-blue-2 mx-auto">
                        <img src={avatar} alt="avatar" />
                    </div>
                    <p className="font-bold text-black-1 text-xl mt-2">
                        {user.nama_lengkap}
                    </p>
                    <p className="text-black-2 text-sm">{user.bidang_minat}</p>
                </div>
                <div className="menu mt-10">
                    {Menus.map((menu, index) => (
                        <Menu
                            key={index}
                            href={menu.href}
                            pageActive={`/${pageActive[1]}`}
                            iconDark={menu.iconDark}
                            iconLight={menu.iconLight}
                            method={menu.method}
                        >
                            {menu.menu}
                        </Menu>
                    ))}
                </div>
            </aside>
        </>
    );
}

export default Sidebar;
