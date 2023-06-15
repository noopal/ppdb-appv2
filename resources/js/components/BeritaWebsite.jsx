import React from "react";

const BeritaWebsite = () => {
    return (
        <div
            name="berita"
            className="w-full bg-gradient-to-b bg-yellow-400 text-white py-36"
        >
            <div className="flex flex-col items-center">
                <div className="max-w-screen-lg p-4 justify-center mx-4 h-full w-full">
                    <div className="pb-2 flex flex-col items-center ">
                        <p className="text-4xl font-bold">Berita</p>
                    </div>
                    <div className="grid justify-center sm:grid-cols-1 md:grid-cols-1 gap-8 px-12 sm:px-0 my-12 text-white">
                        <div className="shadow-md shadow-gray-600 rounded-lg pt-2 bg-yellow-400 border-4 border-white">
                            <div className="flex text-center items-center justify-center pt-6 pb-6">
                                <p className="px-10">
                                    I can work as a frontend developer using
                                    React JS, Redux, Redux Toolkit. I can work
                                    as a frontend developer using React JS,
                                    Redux, Redux Toolkit.I can work as a
                                    frontend developer using React JS, Redux,
                                    Redux Toolkit.I can work as a frontend
                                    developer using React JS, Redux, Redux
                                    Toolkit.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BeritaWebsite;
