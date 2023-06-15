import React from "react";

const JurusanWebsite = ({ jurusans }) => {
    console.log("Jurusans website", jurusans);
    return (
        <div
            name="jurusan"
            className="w-full bg-gradient-to-b bg-white text-black py-28"
        >
            <div className="flex flex-col items-center">
                <div className="max-w-screen-lg p-4 justify-center mx-4 h-full">
                    <div className="pb-2 flex flex-col items-center ">
                        <p className="text-4xl font-bold">Jurusan</p>
                    </div>

                    <p className="text-base text-center">
                        Terdapat 2 pilihan kompetensi keahlian unggulan yang
                        bisa dipilih sesuai dengan minat kalian.
                    </p>
                    <br />

                    <div
                        key={jurusans.id}
                        className="grid justify-center sm:grid-cols-2 md:grid-cols-2 gap-8 px-12 sm:px-0 my-12 text-white "
                    >
                        {jurusans.map((jurusans) => (
                            <div className="shadow-md shadow-gray-600 rounded-lg pt-2 bg-yellow-400 w-96">
                                <p className="text-xl text-center my-4 mx-2 py-12 font-bold tracking-wider">
                                    {jurusans.nama_jurusan}
                                </p>

                                {/* <div>
                                    <img
                                        src={jurusans.thumbnail}
                                        alt="my profile pic"
                                        className="mt-16 w-full md:w-4/5 md:mt-0 mx-auto"
                                    />
                                </div> */}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JurusanWebsite;
