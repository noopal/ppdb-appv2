import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";

const parsePage = (path) => path.split("/");
const Sidebar = () => {
    // console.log(pageActive);
    let pageActive = parsePage(window.location.pathname);

    const Menus = [
        { menu: "Home", href: "/dashboard" },
        // { menu: "Users", href: "/users" },
        // { menu: "Profile", href: "/profile" },
        { menu: "Profil Sekolah", href: "/sekolah" },
        { menu: "Jurusan", href: "/jurusan" },
        { menu: "Pendaftaran", href: "/daftar-pendaftar" },
    ];

    return (
        <React.Fragment>
            <div className="h-screen text-white">
                <div className="flex justify-center items-center p-2">
                    <p className="text-2xl font-semibold ">PPDB APP</p>
                </div>
                {Menus.map((menu, index, children) => (
                    <Menu
                        pageActive={`/${pageActive[1]}`}
                        key={index}
                        href={menu.href}
                        children={children}
                    >
                        {menu.menu}
                    </Menu>
                ))}
            </div>
        </React.Fragment>
    );
};

export default Sidebar;

const Menu = React.memo(({ children, href, pageActive }) => {
    console.log(pageActive);
    return (
        <div>
            <InertiaLink className="ml-4   " href={href}>
                <button
                    className={` ${
                        href === pageActive ? "bg-yellow-400 rounded-lg" : ""
                    } py-2  font-semibold text-sm flex items-center px-8 w-full`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-5 h-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h7"
                        />
                    </svg>
                    <p>{children}</p>
                </button>
            </InertiaLink>
        </div>
    );
});
