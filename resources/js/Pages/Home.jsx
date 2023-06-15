import React from "react";
import Layout from "../components/Layout";
import { Helmet } from "react-helmet";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import { InertiaLink } from "@inertiajs/inertia-react";

const Home = ({
    Sekolahs,
    Users,
    JurusanCount,
    PendaftarCount,
    pendaftaran,
}) => {
    console.log(Sekolahs);
    console.log(Users);
    return (
        <React.Fragment>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <div className="py-5 px-10">
                <div className="grid grid-cols-2">
                    <div className="bg-white shadow-md border-2 border-yellow-400 rounded-lg p-4 w-64 flex flex-col text-center">
                        <h2 className="text-xl font-semibold mb-2">
                            Jurusan Sekolah
                        </h2>
                        <p className="text-blue-600 h-full text-4xl font-semibold">
                            {JurusanCount}
                        </p>
                    </div>
                    <div className="bg-white shadow-md border-2 border-yellow-400 rounded-lg p-4 w-64 flex flex-col text-center">
                        <h2 className="text-xl font-semibold mb-2">
                            Jumlah Pendaftar
                        </h2>
                        <p className="text-blue-600 h-full text-4xl font-semibold">
                            {PendaftarCount}
                        </p>
                    </div>
                </div>
                {/* Tabel Pendaftaran */}
                <div className="mt-12">
                    <h1 className="text-2xl font-bold">
                        Daftar Tabel Pendaftar
                    </h1>
                    <div className="mt-8 overflow-x-auto rounded-lg border border-yellow-400 shadow-md">
                        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500 min-w-full">
                            <thead className="bg-yellow-400">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-4 py-4 font-medium text-white"
                                    >
                                        No
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-4 py-4 font-medium text-white"
                                    >
                                        Nama
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-4 py-4 font-medium text-white"
                                    >
                                        Asal
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-4 py-4 font-medium text-white"
                                    >
                                        Alamat
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-4 py-4 font-medium text-white"
                                    >
                                        Nomor Handphone
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-4 py-4 font-medium text-white"
                                    >
                                        Jurusan
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-4 py-4 font-medium text-white"
                                    >
                                        Pas Photo
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                                {pendaftaran.map((pendaftar, index) => (
                                    <tr
                                        className="hover:bg-gray-50"
                                        key={pendaftar.id}
                                    >
                                        <th className="px-4 py-4 font-normal text-gray-900">
                                            <div className="text-sm">
                                                <div className="font-medium text-gray-700">
                                                    {index + 1}
                                                </div>
                                            </div>
                                        </th>
                                        <td className="px-4 py-4">
                                            <div className="text-gray-400">
                                                {pendaftar.name}
                                            </div>
                                        </td>
                                        <td className="px-4 py-4">
                                            <div className="text-gray-400">
                                                {pendaftar.asal}
                                            </div>
                                        </td>
                                        <td className="px-4 py-4">
                                            <div className="text-gray-400">
                                                {pendaftar.alamat}
                                            </div>
                                        </td>
                                        <td className="px-4 py-4">
                                            <div className="text-gray-400">
                                                {pendaftar.nomor_handphone}
                                            </div>
                                        </td>
                                        <td className="px-4 py-4">
                                            <div className="text-gray-400">
                                                {pendaftar.jurusan}
                                            </div>
                                        </td>
                                        <td className="px-4 py-4">
                                            <div className="relative h-10 w-10">
                                                <SimpleReactLightbox>
                                                    <SRLWrapper>
                                                        <img
                                                            className="h-10 w-full rounded-full object-cover object-center border border-gray-200"
                                                            src={
                                                                pendaftar.image
                                                            }
                                                        />
                                                    </SRLWrapper>
                                                </SimpleReactLightbox>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

Home.layout = (page) => <Layout user={page.props.user} children={page} />;

export default Home;
