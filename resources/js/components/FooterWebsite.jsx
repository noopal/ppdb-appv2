import React from "react";

const FooterWebsite = () => {
    return (
        <div className="w-full mx-auto">
            <footer className="p-4 bg-yellow-400 shadow md:px-6 md:py-8 dark:bg-white">
                <div className="flex flex-col sm:flex sm:items-center sm:justify-between">
                    <a
                        href="#"
                        target="_blank"
                        className="flex items-center mb-4 text-white sm:mb-0"
                    >
                        <img
                            src="https://smkleonardo.sch.id/wp-content/uploads/2021/10/cropped-logo-leo-3.png"
                            className="mr-4 h-8"
                            alt="SMK PL Leonardo Klaten Logo"
                        />
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                            SMK PL Leonardo Klaten
                        </span>
                    </a>
                </div>
                <hr className="my-6 border-white sm:mx-auto dark:border-white lg:my-8" />
                <span className="block text-sm text-white sm:text-center dark:text-white">
                    © 2022 SMK PL LEONARDO KLATEN
                </span>
            </footer>
        </div>
    );
};

export default FooterWebsite;
