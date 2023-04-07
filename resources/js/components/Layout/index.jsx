import React from "react";
import Sidebar from "../Sidebar";

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <div className="flex">
                <div className="w-1/6 bg-purple-500 h-screen">
                    <Sidebar />
                </div>
                <div className="p-4">{children}</div>
            </div>
        </React.Fragment>
    );
};

export default Layout;
