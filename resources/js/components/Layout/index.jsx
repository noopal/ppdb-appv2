import React from "react";
import Sidebar from "../Sidebar";
import { Link } from "@inertiajs/inertia-react";

const Layout = ({ children, user }) => {
    console.log("layout user", user);
    return (
        <React.Fragment>
            <div className="flex">
                <div className="flex flex-col p-3 bg-blue-600 shadow w-64">
                    <Sidebar />
                </div>
                <div className="w-full h-full overflow-y-auto relative">
                    <div className="text-center flex justify-between right-0 left-0 bg-blue-600 py-3 px-5">
                        <p className="text-white">{user?.name}</p>
                        <Link
                            href={route("logout")}
                            method="post"
                            as="button"
                            type="button"
                            className="bg-yellow-400 px-5 py-1 text-white rounded-lg"
                        >
                            Logout
                        </Link>
                    </div>
                    <div className="container mx-auto py-5 px-5 bg-slate-50">
                        {children}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Layout;
