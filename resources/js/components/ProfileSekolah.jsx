import React from "react";

const ProfileSekolah = ({ sekolahs }) => {
    console.log("Profil Sekolah", sekolahs);
    return (
        <div
            name="profil sekolah"
            className="w-full bg-gradient-to-b bg-white text-black py-28"
        >
            <div className="flex flex-col items-center">
                <div className="max-w-screen-lg p-4 justify-center mx-4 h-full">
                    <div className="pb-2 flex flex-col items-center ">
                        <p className="text-4xl font-bold">Profil Sekolah</p>
                    </div>

                    <p className="text-base text-center px-4">
                        {sekolahs.sejarah_sekolah}
                    </p>
                    <br />

                    <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-12 sm:px-0 my-12 text-white ">
                        <div className="shadow-md shadow-gray-600 rounded-lg pt-2 bg-yellow-400">
                            <p className="text-4xl text-center my-4 mx-2 font-bold tracking-wider">
                                VISI
                            </p>

                            <div className="flex text-center items-center justify-center pt-6 pb-6">
                                <p className="px-10">{sekolahs.visi_sekolah}</p>
                            </div>
                        </div>
                        <div className="shadow-md shadow-gray-600 rounded-lg pt-2 bg-yellow-400">
                            <p className="text-4xl text-center my-4 mx-2 font-bold tracking-wider">
                                MISI
                            </p>

                            <div className="flex text-center items-center justify-center pt-6 pb-6">
                                <p className="px-10">{sekolahs.misi_sekolah}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileSekolah;
