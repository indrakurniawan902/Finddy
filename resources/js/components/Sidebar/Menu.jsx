import React from "react";
import { Link } from "@inertiajs/inertia-react";

function Menu({ children, href, pageActive, icon, method }) {
    const styles = {
        menu: "px-6 py-3 rounded-md text-black-2 my-2 transition-all hover:bg-white-1",
        active_menu:
            "px-6 py-3 rounded-md bg-blue-3 text-white-1 my-2 transition-all",
    };

    return (
        <div className={pageActive === href ? styles.active_menu : styles.menu}>
            <Link
                href={href}
                className="text-base font-bold flex gap-2"
                as="button"
                type="button"
                method={method}
            >
                <img
                    src={
                        pageActive === href
                            ? `${icon}-white.svg`
                            : `${icon}-dark.svg`
                    }
                ></img>
                {children}
            </Link>
        </div>
    );
}

export default Menu;
