import React from "react";
import { Link } from "@inertiajs/inertia-react";

function Button({
    children,
    href,
    type,
    method,
    isFull,
    isSubmit,
    isDisabled,
}) {
    let style =
        "rounded-lg font-semibold text-lg transition box-border disabled:opacity-50 disabled:cursor-not-allowed ";
    style +=
        type === "primary"
            ? "px-6 py-3 text-white-1 bg-blue-3 shadow-blue hover:bg-blue-4 "
            : "px-5 py-2 text-blue-3 border-4 border-blue-3 hover:border-blue-4 hover:bg-blue-1 ";

    style += isFull ? "w-full" : "";

    return (
        <>
            {isSubmit ? (
                <button
                    className={style}
                    type={isSubmit ? "submit" : null}
                    disabled={isDisabled}
                >
                    {children}
                </button>
            ) : (
                <Link
                    className={style}
                    type={isSubmit ? "submit" : null}
                    href={href}
                    disabled={isDisabled}
                    as="button"
                    type="button"
                    method={method}
                >
                    {children}
                </Link>
            )}
        </>
    );
}

export default Button;
