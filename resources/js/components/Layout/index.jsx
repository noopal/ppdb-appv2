import React from "react";
import Sidebar from "../Sidebar";

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <div className="flex">
                <div className="flex flex-col p-3 bg-purple-500 shadow w-60">
                    <div className="space-y-3">
                        <Sidebar />
                    </div>
                </div>
                <div className="container mx-auto py-5 px-5 bg-slate-50">
                    {children}
                </div>
            </div>
        </React.Fragment>
    );
};

export default Layout;
