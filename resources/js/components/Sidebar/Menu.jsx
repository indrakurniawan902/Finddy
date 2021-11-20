import React from "react";
import { Link } from "@inertiajs/inertia-react";

function Menu({
    children,
    href,
    pageActive,
    iconDark,
    iconLight,
    method,
    hidden,
}) {
    const styles = {
        menu: "p-2 flex items-center justify-center md:justify-start md:px-6 md:py-3 h-16 w-16 md:w-auto md:h-auto rounded-lg md:rounded-md text-black-2 md:my-2 transition-all hover:bg-white-1",
        active_menu:
            "p-2 flex items-center justify-center md:justify-start md:px-6 md:py-3 h-16 w-16 md:w-auto md:h-auto rounded-lg md:rounded-md bg-blue-3 text-white-1 md:my-2 transition-all",
        text: "text-center font-light md:font-bold md:text-left md:block",
        active_text:
            "text-center font-light hidden md:block md:font-bold md:text-left md:block",
    };

    if (hidden) {
        styles.menu += " hidden";
        styles.active_menu += " hidden";
    }

    return (
        <div className={pageActive === href ? styles.active_menu : styles.menu}>
            <Link
                href={href}
                className="text-base font-bold flex flex-col md:flex-row justify-start md:justify-start md:gap-3 items-center md:items-start"
                as="button"
                type="button"
                method={method}
                aria-label={`${children} Button`}
            >
                <img src={pageActive === href ? iconLight : iconDark}></img>
                <p
                    className={
                        pageActive === href ? styles.active_text : styles.text
                    }
                >
                    {children}
                </p>
            </Link>
        </div>
    );
}

export default Menu;
