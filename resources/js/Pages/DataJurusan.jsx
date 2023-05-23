import React from "react";
import Layout from "../components/Layout";
import { InertiaLink } from "@inertiajs/inertia-react";
import { Helmet } from "react-helmet";

const parsePage = (path) => path.split("/");
const Kelembagaan = () => {
    console.log(pageActive);
    let pageActive = parsePage(window.location.pathname);

    const Tabs = [
        { tab: "Profile Lembaga", href: "/profile-lembaga" },
        { tab: "Data Pengguna", href: "/data-pengguna" },
        { tab: "Data Jurusan", href: "/kelembagaan/data-jurusan" },
    ];

    return (
        <React.Fragment>
            <Helmet>
                <title>Data Jurusan</title>
            </Helmet>
            <div className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                {Tabs.map((tab, index) => (
                    <Menu
                        key={index}
                        href={tab.href}
                        pageActive={`/${pageActive[1]}`}
                    >
                        {tab.tab}
                    </Menu>
                ))}
            </div>
        </React.Fragment>
    );
};

Kelembagaan.layout = (page) => (
    <Layout user={page.props.user} children={page} />
);

export default Kelembagaan;

const Menu = React.memo(({ children, href, pageActive }) => {
    console.log(pageActive);
    return (
        <div>
            <InertiaLink className="mr-2" href={href}>
                <button
                    className={` ${
                        href === pageActive ? "active" : ""
                    }inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg  dark:text-blue-500 dark:border-blue-500`}
                >
                    {/* <svg
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
                    </svg> */}
                    <p>{children}</p>
                </button>
            </InertiaLink>
        </div>
    );
});
