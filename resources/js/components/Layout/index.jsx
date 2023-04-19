import React from "react";
import Sidebar from "../Sidebar";
import { Link } from "@inertiajs/inertia-react";

const Layout = ({ children, user }) => {
    console.log("layout user", user);
    return (
        <React.Fragment>
            <div className="flex">
                <div className="flex flex-col p-3 bg-purple-500 shadow w-60">
                    <Sidebar />
                </div>
                <div className="w-full h-full overflow-y-auto relative">
                    <div className="text-center flex justify-between right-0 left-0 bg-gray-100 py-3">
                        <p>{user?.name}</p>
                        <Link
                            href={route("logout")}
                            method="post"
                            as="button"
                            type="button"
                            className="bg-red-200"
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
