import React from "react";
import Layout from "../components/Layout";
import { Helmet } from "react-helmet";
import { Inertia } from "@inertiajs/inertia";
import Swal from "sweetalert2";
const ProfilLembaga = ({ errors, Sekolahs, editSekolah }) => {
    console.log(Sekolahs);
    const [values, setValues] = React.useState({
        sejarah_sekolah: "",
        visi_sekolah: "",
        misi_sekolah: "",
    });
    const [error] = React.useState({
        sejarah_sekolah: "",
        visi_sekolah: "",
        misi_sekolah: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
        const formData = new FormData();
        for (let key in values) {
            formData.append(key, values[key]);
        }
        Inertia.post(route("profil-sekolah.store"), formData, {
            onSuccess: () => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Berhasil",
                    text: "Profil sekolah berhasil disimpan",
                    showConfirmButton: true,
                });
            },
        });
    };
    const handleChange = (e) => {
        const key = e.target.id;
        const value = e.target.value;
        setValues((values) => ({
            ...values,
            [key]: value,
        }));

        switch (key) {
            case "sejarah_sekolah":
                error.sejarah_sekolah =
                    value === "" ? "Sejarah sekolah tidak boleh kosong" : "";
                break;
            case "visi_sekolah":
                error.visi_sekolah =
                    value === "" ? "Visi sekolah tidak boleh kosong" : "";
                break;
            case "misi_sekolah":
                error.misi_sekolah =
                    value === "" ? "Misi sekolah tidak boleh kosong" : "";
                break;
            default:
                break;
        }
    };
    const handleUpdate = (e) => {
        e.preventDefault();
        console.log(values);
        const formData = new FormData();
        formData.append("id", editSekolah.id);
        for (let key in values) {
            formData.append(key, values[key]);
        }
        formData.append("_method", "put");
        Inertia.post(route("sekolahs.update", editSekolah.id), formData, {
            onSuccess: () => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Berhasil",
                    text: "Profil Sekolah berhasil diupdate",
                    showConfirmButton: true,
                });
            },
        });
    };
    const buttonDisabled = () => {
        if (
            values.sejarah_sekolah === "" ||
            values.visi_sekolah === "" ||
            values.misi_sekolah === ""
        ) {
            return false;
        }
    };
    const buttonDisabledUpdate = () => {
        if (
            values.sejarah_sekolah === "" ||
            values.visi_sekolah === "" ||
            values.misi_sekolah === ""
        ) {
            return true;
        } else {
            return false;
        }
    };
    const styles = {
        classNameInput:
            "my-1 flex w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200",
        classNameLabel: "text-sm text-gray-500 font-semibold uppercase",
        classNameErros: "text-sm text-red-600 font-bold",
    };
    return (
        <React.Fragment>
            <Helmet>
                <title>Profil Sekolah</title>
            </Helmet>
            <h1 className="text-2xl font-bold">Profil Sekolah</h1>
            <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5 p-3">
                <form
                    action="post"
                    onSubmit={editSekolah ? handleUpdate : handleSubmit}
                    encType="multipart/form-data"
                >
                    <div>
                        <h1 className="text-md font-medium pb-3">
                            Sejarah Sekolah
                        </h1>
                        <div className="flex justify-content-center pb-5">
                            <textarea
                                type="text"
                                id="sejarah_sekolah"
                                className={styles.classNameInput}
                                value={Sekolahs.sejarah_sekolah}
                                onChange={handleChange}
                                placeholder="Sejarah sekolah ...."
                            />
                            {errors.sejarah_sekolah && (
                                <div className={styles.classNameErros}>
                                    {errors.sejarah_sekolah}
                                </div>
                            )}
                            <div className={styles.classNameErros}>
                                {error.sejarah_sekolah}
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-md font-medium pb-3">
                            Visi Sekolah
                        </h1>
                        <div className="flex justify-content-center pb-5">
                            <textarea
                                type="text"
                                id="visi_sekolah"
                                className={styles.classNameInput}
                                value={Sekolahs.visi_sekolah}
                                onChange={handleChange}
                                placeholder="Visi sekolah ...."
                            />
                            {errors.visi_sekolah && (
                                <div className={styles.classNameErros}>
                                    {errors.visi_sekolah}
                                </div>
                            )}
                            <div className={styles.classNameErros}>
                                {error.visi_sekolah}
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-md font-medium pb-3">
                            Misi Sekolah
                        </h1>
                        <div className="flex justify-content-center pb-5">
                            <textarea
                                type="text"
                                id="misi_sekolah"
                                className={styles.classNameInput}
                                value={Sekolahs.misi_sekolah}
                                onChange={handleChange}
                                placeholder="Misi sekolah ...."
                            />
                            {errors.misi_sekolah && (
                                <div className={styles.classNameErros}>
                                    {errors.misi_sekolah}
                                </div>
                            )}
                            <div className={styles.classNameErros}>
                                {error.misi_sekolah}
                            </div>
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className={`w-full bg-yellow-400 rounded-lg py-2 text-white ${
                                (
                                    editSekolah
                                        ? buttonDisabledUpdate()
                                        : buttonDisabled()
                                )
                                    ? "bg-yellow-200"
                                    : "bg-yellow-500"
                            }`}
                            disabled={
                                editSekolah
                                    ? buttonDisabledUpdate()
                                    : buttonDisabled()
                            }
                        >
                            {editSekolah ? "Update" : "Simpan"}
                        </button>
                    </div>
                </form>
            </div>
        </React.Fragment>
    );
};
ProfilLembaga.layout = (page) => (
    <Layout user={page.props.user} children={page} />
);

export default ProfilLembaga;
