import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const HomeWebsite = ({ Jurusans }) => {
    return (
        <div name="home" className="py-32 w-full bg-blue-600 text-white">
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row pt-12">
                <div className="flex flex-col justify-center h-full mx-4">
                    <h2 className="text-4xl sm:text-7xl font-bold text-white">
                        PPDB Online SMK PL Leonardo Klaten
                    </h2>
                    <p className="text-white-500 py-4 max-w-md text-justify">
                        Untuk calon pendaftar tahun ajaran 2023/2024 bisa
                        mendaftar melalui website ini atau langsung datang ke
                        tempat pendaftaran
                    </p>
                    <div>
                        <Link
                            to="portfolio"
                            className="group text-white w-48 px-6 py-3 my-2 flex items-center rounded-md bg-yellow-400 cursor-pointer duration-200 hover:scale-110"
                        >
                            Daftar Sekarang
                            <span className="group-hover:rotate-90 duration-300">
                                <MdOutlineKeyboardArrowRight
                                    size={20}
                                    className="ml-1"
                                />
                            </span>
                        </Link>
                    </div>
                </div>
                <div className="md:ml-8">
                    <img
                        src="https://smkleonardo.sch.id/wp-content/uploads/2021/10/cropped-WhatsApp-Image-2021-10-08-at-09.59.48-2-1536x922.jpeg"
                        alt="my profile pic"
                        className="mt-16 rounded-2xl w-2/3 md:w-4/5 md:mt-0 mx-auto"
                    />
                </div>
            </div>
        </div>
    );
};

export default HomeWebsite;
