import { InertiaLink } from "@inertiajs/inertia-react";
import React from "react";
import { Helmet } from "react-helmet";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavbarWebsite = ({ user }) => {
    console.log("pendaftaran siswa", user);
    const [hamburger, setHamburger] = React.useState(false);

    //array untuk navbar links
    const navbarLinks = [
        { id: 1, link: "home" },
        { id: 2, link: "jurusan" },
        { id: 3, link: "berita" },
        { id: 4, link: "profil sekolah" },
        { id: 5, link: "berita" },
    ];
    return (
        <div className="flex justify-between items-center w-full h-20 text-white bg-blue-600 fixed p-4">
            <div>
                <img
                    src="https://smkleonardo.sch.id/wp-content/uploads/2021/10/cropped-logo-leo-3.png"
                    className="mr-4 h-12"
                    alt="SMK PL Leonardo Klaten Logo"
                />
            </div>
            {/* untuk versi deskrop */}
            <ul className="hidden md:flex">
                {navbarLinks.map((element) => {
                    return (
                        <li
                            key={element.id}
                            className="px-4 cursor-pointer capitalize font-medium text-white-500 hover:scale-110 duration-200"
                        >
                            <Link to={element.link} smooth duration={500}>
                                {element.link}
                            </Link>
                        </li>
                    );
                })}
            </ul>
            {/* hamburger menu for mobile */}
            <div
                onClick={() => setHamburger((prev) => !prev)}
                className="cursor-pointer pr-4 z-10 text-white-500 md:hidden"
            >
                {hamburger ? <FaTimes size={20} /> : <FaBars size={20} />}
            </div>
            {/* this is the pop down menu */}
            {hamburger && (
                <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-blue-800 text-white-500">
                    {navbarLinks.map((element) => {
                        return (
                            <li
                                key={element.id}
                                className="px-4 cursor-pointer capitalize py-6 text-4xl text-white-500"
                            >
                                <a
                                    onClick={() =>
                                        setHamburger((prev) => !prev)
                                    }
                                    to={element.link}
                                >
                                    {element.link}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            )}
            <InertiaLink
                className="bg-yellow-400 rounded-lg px-6 py-2"
                href={route("pendaftaran.index")}
            >
                Daftar PPDB
            </InertiaLink>
        </div>
    );
};

export default NavbarWebsite;
