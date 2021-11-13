import React, { Fragment } from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions ";
import Sidebar from "../Sidebar";

function Layout({ children, user }) {
    const { width } = useWindowDimensions();

    if (width >= 768) {
        return (
            <Fragment>
                <div className="flex relative bg-white-2">
                    <div className="sidebar lg:w-1/4 xl:w-1/5 h-screen bg-blue-1 z-10 sticky top-0 overflow-y-scroll">
                        <Sidebar user={user} />
                    </div>
                    <div className="py-8 px-6 lg:pr-20 w-4/5">{children}</div>
                </div>
            </Fragment>
        );
    } else {
        return (
            <Fragment>
                <div className="relative bg-white-2">
                    <div className="w-auto min-h-screen px-4 py-6">
                        {children}
                    </div>
                </div>
                <div className="sticky bottom-0 z-30 overflow-hidden">
                    <nav className="relative h-20 rounded-t-lg shadow-up bg-white-1 flex items-center">
                        <Sidebar user={user} />
                    </nav>
                </div>
            </Fragment>
        );
    }
}

export default Layout;
