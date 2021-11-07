import React, { Fragment, useState, useEffect } from "react";
import { Link } from "@inertiajs/inertia-react";
import { Menus } from "./data";
import Menu from "./Menu";

const parsePage = (path) => path.split("/");

function Sidebar() {
    let pageActive = parsePage(window.location.pathname);

    return (
        <>
            <aside className="py-7 px-8 w-full">
                <Link href={route("home")} className="logo mx-auto h-8 block">
                    <img
                        src="./img/logo-full.svg"
                        alt="logo-finddy"
                        className="mx-auto h-full"
                    />
                </Link>
                <div className="profil mt-9 text-center">
                    <div className="img w-24 h-24 rounded-full overflow-hidden bg-blue-2 mx-auto">
                        <img src="./img/avatar.png" alt="avatar" />
                    </div>
                    <p className="font-bold text-black-1 text-xl mt-2">
                        John Doe
                    </p>
                    <p className="text-black-2 text-sm">UI/UX Designer</p>
                </div>
                <div className="menu mt-10">
                    {Menus.map((menu, index) => (
                        <Menu
                            key={index}
                            href={menu.href}
                            pageActive={`/${pageActive[1]}`}
                            icon={menu.icon}
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
