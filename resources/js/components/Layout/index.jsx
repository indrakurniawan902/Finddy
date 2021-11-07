import React, { Fragment } from "react";
import Sidebar from "../Sidebar";

function Layout({ children }) {
    return (
        <Fragment>
            <div className="flex relative">
                <div className="sidebar w-1/5 h-screen bg-blue-1 z-10 sticky top-0 overflow-y-scroll">
                    <Sidebar />
                </div>
                <div className="py-8 px-6 pr-20 w-4/5">{children}</div>
                <div className="absolute left-0 h-screen bg-blue-1 w-1/5 z-0"></div>
            </div>
        </Fragment>
    );
}

export default Layout;
