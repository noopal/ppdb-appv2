import { InertiaLink } from "@inertiajs/inertia-react";
import React from "react";
import Layout from "../components/Layout";
import { Helmet } from "react-helmet";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import Swal from "sweetalert2";
import { Inertia } from "@inertiajs/inertia";

const Pendaftaran = ({ pendaftaran, user }) => {
    console.log("user login", user);
    console.log(pendaftaran);
    const handleDelete = (id) => {
        Swal.fire({
            title: "Apakah anda yakin?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Delete",
        }).then((result) => {
            if (result.isConfirmed) {
                Inertia.delete(route("pendaftaran.destroy", id), {
                    onSuccess: () => {
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Berhasil",
                            text: "Data berhasil dihapus",
                            showConfirmButton: true,
                        });
                    },
                });
            }
        });
    };
    return (
        <React.Fragment>
            <Helmet>
                <title>Pendaftaran</title>
            </Helmet>

            <InertiaLink href={route("pendaftaran.create")}>
                Create User
            </InertiaLink>
            <h1 className="mt-3 font-semibold text-2xl">Test</h1>
            <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-md m-5">
                <table className="w-full border-collapse bg-white text-left text-sm text-gray-500 min-w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th
                                scope="col"
                                className="px-4 py-4 font-medium text-gray-900"
                            >
                                No
                            </th>
                            <th
                                scope="col"
                                className="px-4 py-4 font-medium text-gray-900"
                            >
                                Nama
                            </th>
                            <th
                                scope="col"
                                className="px-4 py-4 font-medium text-gray-900"
                            >
                                Tempat Lahir
                            </th>
                            <th
                                scope="col"
                                className="px-4 py-4 font-medium text-gray-900"
                            >
                                Tanggal Lahir
                            </th>
                            <th
                                scope="col"
                                className="px-4 py-4 font-medium text-gray-900"
                            >
                                Agama
                            </th>
                            <th
                                scope="col"
                                className="px-4 py-4 font-medium text-gray-900"
                            >
                                Asal
                            </th>
                            <th
                                scope="col"
                                className="px-4 py-4 font-medium text-gray-900"
                            >
                                Alamat
                            </th>
                            <th
                                scope="col"
                                className="px-4 py-4 font-medium text-gray-900"
                            >
                                Nomor Handphone
                            </th>
                            <th
                                scope="col"
                                className="px-4 py-4 font-medium text-gray-900"
                            >
                                Jarak
                            </th>
                            <th
                                scope="col"
                                className="px-4 py-4 font-medium text-gray-900"
                            >
                                Jurusan
                            </th>
                            <th
                                scope="col"
                                className="px-4 py-4 font-medium text-gray-900"
                            >
                                Pas Photo
                            </th>
                            <th
                                scope="col"
                                className="px-4 py-4 font-medium text-gray-900"
                            >
                                Raport
                            </th>
                            <th
                                scope="col"
                                className="px-4 py-4 font-medium text-gray-900"
                            >
                                Surat Pernyataan
                            </th>
                            <th
                                scope="col"
                                className="px-4 py-4 font-medium text-gray-900"
                            >
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                        {pendaftaran.map((pendaftar, index) => (
                            <tr className="hover:bg-gray-50" key={pendaftar.id}>
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
                                        {pendaftar.tempat_lahir}
                                    </div>
                                </td>
                                <td className="px-4 py-4">
                                    <div className="text-gray-400">
                                        {pendaftar.tanggal_lahir}
                                    </div>
                                </td>
                                <td className="px-4 py-4">
                                    <div className="text-gray-400">
                                        {pendaftar.agama}
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
                                        {pendaftar.jarak}
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
                                                    src={pendaftar.image}
                                                />
                                            </SRLWrapper>
                                        </SimpleReactLightbox>
                                    </div>
                                </td>
                                <td className="flex gap-3 items-center px-4 py-4">
                                    <div className="relative h-10 w-10">
                                        <SimpleReactLightbox>
                                            <SRLWrapper>
                                                <img
                                                    className="h-10 w-full rounded-full object-cover object-center border border-gray-200"
                                                    src={pendaftar.raport}
                                                />
                                            </SRLWrapper>
                                        </SimpleReactLightbox>
                                    </div>
                                </td>
                                <td className="px-4 py-4">
                                    <div className="relative h-10 w-10">
                                        <SimpleReactLightbox>
                                            <SRLWrapper>
                                                <img
                                                    className="h-10 w-full rounded-full object-cover object-center border border-gray-200"
                                                    src={
                                                        pendaftar.suratPernyataan
                                                    }
                                                />
                                            </SRLWrapper>
                                        </SimpleReactLightbox>
                                    </div>
                                </td>
                                <td className="px-4 py-4">
                                    <div className="flex justify-start gap-4">
                                        <InertiaLink
                                            onClick={handleDelete.bind(
                                                this,
                                                pendaftar.id
                                            )}
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="h-6 w-6"
                                                x-tooltip="tooltip"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                                />
                                            </svg>
                                        </InertiaLink>
                                        <InertiaLink
                                            href={route(
                                                "pendaftaran.edit",
                                                pendaftar.id
                                            )}
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="h-6 w-6"
                                                x-tooltip="tooltip"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                                                />
                                            </svg>
                                        </InertiaLink>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    );
};

Pendaftaran.layout = (page) => (
    <Layout user={page.props.user} children={page} />
);

export default Pendaftaran;
