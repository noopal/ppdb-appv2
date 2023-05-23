import React, { useState } from "react";
import Layout from "../components/Layout";
import { Helmet } from "react-helmet";
import { Inertia } from "@inertiajs/inertia";
import Swal from "sweetalert2";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import Avatar from "../../../public/images/avatar.png";

const PendaftaranSiswa = ({ errors, editPendaftaran, jurusans }) => {
    console.log(errors);
    // console.log(editPendaftaran);
    const imageRef = React.useRef();
    const raportRef = React.useRef();
    const suratPernyataanRef = React.useRef();
    const [image, setImage] = React.useState(
        base_url + "/" + editPendaftaran?.image || ""
    );
    const [raport, setRaport] = React.useState(
        base_url + "/" + editPendaftaran?.raport || ""
    );
    const [suratPernyataan, setSuratPernyataan] = React.useState(
        base_url + "/" + editPendaftaran?.suratPernyataan || ""
    );

    const [values, setValues] = React.useState({
        name: editPendaftaran?.name || "",
        tempat_lahir: editPendaftaran?.tempat_lahir || "",
        tanggal_lahir: editPendaftaran?.tanggal_lahir || "",
        agama: editPendaftaran?.agama || "",
        asal: editPendaftaran?.asal || "",
        alamat: editPendaftaran?.alamat || "",
        nomor_handphone: editPendaftaran?.nomor_handphone || "",
        jarak: editPendaftaran?.jarak || "",
        jurusan: editPendaftaran?.jurusan || "",
    });
    console.log(values);
    const [error] = React.useState({
        name: "",
        tempat_lahir: "",
        tanggal_lahir: "",
        agama: "",
        asal: "",
        alamat: "",
        nomor_handphone: "",
        jarak: "",
        jurusan: "",
    });
    const handleChange = (e) => {
        const key = e.target.id;
        const value = e.target.value;
        setValues((values) => ({
            ...values,
            [key]: value,
        }));

        switch (key) {
            case "name":
                error.name = value === "" ? "Nama tidak boleh kosong" : "";
                break;
            case "tempat_lahir":
                error.tempat_lahir =
                    value === "" ? "Tempat Lahir tidak boleh kosong" : "";

                break;
            case "tanggal_lahir":
                error.tanggal_lahir =
                    value === "" ? "Tanggal lahir tidak boleh kosong" : "";
                break;
            case "agama":
                error.agama = value === "" ? "Agama tidak boleh kosong" : "";
                break;
            case "asal":
                error.asal = value === "" ? "Asal tidak boleh kosong" : "";
                break;
            case "alamat":
                error.alamat = value === "" ? "Alamat tidak boleh kosong" : "";
                break;
            case "nomor_handphone":
                error.nomor_handphone =
                    value === "" ? "Nomor Handphone tidak boleh kosong" : "";
                break;
            case "jarak":
                error.jarak = value === "" ? "Jarak tidak boleh kosong" : "";
                break;
            case "jurusan":
                error.jurusan =
                    value === "" ? "Jurusan tidak boleh kosong" : "";
                break;
            default:
                break;
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
        const formData = new FormData();
        for (let key in values) {
            formData.append(key, values[key]);
        }
        formData.append("image", imageRef.current.files[0]);
        formData.append("raport", raportRef.current.files[0]);
        formData.append("suratPernyataan", suratPernyataanRef.current.files[0]);
        Inertia.post(route("pendaftaran.store"), formData, {
            onSuccess: () => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Berhasil",
                    text: "Formulir berhasil dikirim",
                    showConfirmButton: true,
                });
            },
        });
    };
    const handleUpdate = (e) => {
        e.preventDefault();
        console.log(values);
        const formData = new FormData();
        formData.append("id", editPendaftaran.id);
        for (let key in values) {
            formData.append(key, values[key]);
        }
        formData.append("image", imageRef.current.files[0]);
        formData.append("raport", raportRef.current.files[0]);
        formData.append("suratPernyataan", suratPernyataanRef.current.files[0]);
        formData.append("_method", "put");
        Inertia.post(
            route("pendaftaran.update", editPendaftaran.id),
            formData,
            {
                onSuccess: () => {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Berhasil",
                        text: "Data user berhasil diupdate",
                        showConfirmButton: true,
                    });
                },
            }
        );
    };
    const buttonDisabled = () => {
        if (
            values.name === "" ||
            values.tempat_lahir === "" ||
            values.tanggal_lahir === "" ||
            values.agama === "" ||
            values.asal === "" ||
            values.alamat === "" ||
            values.nomor_handphone === "" ||
            values.jarak === "" ||
            values.jurusan === ""
        ) {
            return true;
        } else {
            return false;
        }
    };
    const buttonDisabledUpdate = () => {
        if (
            values.name === "" ||
            values.tempat_lahir === "" ||
            values.tanggal_lahir === "" ||
            values.agama === "" ||
            values.asal === "" ||
            values.alamat === "" ||
            values.nomor_handphone === "" ||
            values.jarak === "" ||
            values.jurusan === ""
        ) {
            return true;
        } else {
            return false;
        }
    };

    const handleUploadImage = (e) => {
        e.preventDefault();
        let reader = new FileReader();
        reader.onloadend = () => {
            if (reader.readyState === 2) {
                setImage(reader.result);
            }
        };
        reader.readAsDataURL(e.target.files[0]);
    };
    const handleUploadRaport = (e) => {
        e.preventDefault();
        let reader = new FileReader();
        reader.onloadend = () => {
            if (reader.readyState === 2) {
                setRaport(reader.result);
            }
        };
        reader.readAsDataURL(e.target.files[0]);
    };
    const handleUploadSuratPernyataan = (e) => {
        e.preventDefault();
        let reader = new FileReader();
        reader.onloadend = () => {
            if (reader.readyState === 2) {
                setSuratPernyataan(reader.result);
            }
        };
        reader.readAsDataURL(e.target.files[0]);
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
                <title>
                    {editPendaftaran
                        ? "Update Pendaftaran"
                        : "Create Pendaftaran"}
                </title>
            </Helmet>
            <h1>
                {editPendaftaran
                    ? "Form Update Pendaftaran"
                    : "Form Pendaftaran Peserta Didik Baru"}
            </h1>
            <div className="px-32">
                <h1>Biodata Calon Siswa</h1>
                <form
                    action="post"
                    onSubmit={editPendaftaran ? handleUpdate : handleSubmit}
                    encType="multipart/form-data"
                >
                    <div>
                        <label htmlFor="name" className={styles.classNameLabel}>
                            Nama
                        </label>
                        <input
                            type="text"
                            id="name"
                            className={styles.classNameInput}
                            value={values.name}
                            onChange={handleChange}
                            placeholder="Nama ...."
                        />
                        {errors.name && (
                            <div className={styles.classNameErros}>
                                {errors.name}
                            </div>
                        )}
                        <div className={styles.classNameErros}>
                            {error.name}
                        </div>
                    </div>
                    <div>
                        <label
                            htmlFor="tempat_lahir"
                            className={styles.classNameLabel}
                        >
                            Tempat Lahir
                        </label>
                        <input
                            type="text"
                            id="tempat_lahir"
                            className={styles.classNameInput}
                            value={values.tempat_lahir}
                            onChange={handleChange}
                            placeholder="Nama ...."
                        />
                        {errors.tempat_lahir && (
                            <div className={styles.classNameErros}>
                                {errors.tempat_lahir}
                            </div>
                        )}
                        <div className={styles.classNameErros}>
                            {error.tempat_lahir}
                        </div>
                    </div>
                    <div>
                        <label
                            htmlFor="tanggal_lahir"
                            className={styles.classNameLabel}
                        >
                            Tanggal Lahir
                        </label>
                        <input
                            type="date"
                            id="tanggal_lahir"
                            className={styles.classNameInput}
                            value={values.tanggal_lahir}
                            onChange={handleChange}
                            placeholder="Tanggal Lahir ...."
                        />
                        {errors.tanggal_lahir && (
                            <div className={styles.classNameErros}>
                                {errors.tanggal_lahir}
                            </div>
                        )}
                        <div className={styles.classNameErros}>
                            {error.tanggal_lahir}
                        </div>
                    </div>
                    <div>
                        <label
                            htmlFor="agama"
                            className={styles.classNameLabel}
                        >
                            Agama
                        </label>
                        <input
                            type="text"
                            id="agama"
                            className={styles.classNameInput}
                            value={values.agama}
                            onChange={handleChange}
                            placeholder="Email ...."
                        />
                        {errors.agama && (
                            <div className={styles.classNameErros}>
                                {errors.agama}
                            </div>
                        )}
                        <div className={styles.classNameErros}>
                            {error.agama}
                        </div>
                    </div>
                    <div>
                        <label htmlFor="asal" className={styles.classNameLabel}>
                            Asal
                        </label>
                        <input
                            type="text"
                            id="asal"
                            className={styles.classNameInput}
                            value={values.asal}
                            onChange={handleChange}
                            placeholder="Email ...."
                        />
                        {errors.asal && (
                            <div className={styles.classNameErros}>
                                {errors.asal}
                            </div>
                        )}
                        <div className={styles.classNameErros}>
                            {error.asal}
                        </div>
                    </div>
                    <div>
                        <label
                            htmlFor="alamat"
                            className={styles.classNameLabel}
                        >
                            Alamat
                        </label>
                        <input
                            type="text"
                            id="alamat"
                            className={styles.classNameInput}
                            value={values.alamat}
                            onChange={handleChange}
                            placeholder="Email ...."
                        />
                        {errors.alamat && (
                            <div className={styles.classNameErros}>
                                {errors.alamat}
                            </div>
                        )}
                        <div className={styles.classNameErros}>
                            {error.alamat}
                        </div>
                    </div>
                    <div>
                        <label
                            htmlFor="nomor_handphone"
                            className={styles.classNameLabel}
                        >
                            Nomor Handphone
                        </label>
                        <input
                            type="text"
                            id="nomor_handphone"
                            className={styles.classNameInput}
                            value={values.nomor_handphone}
                            onChange={handleChange}
                            placeholder="Email ...."
                        />
                        {errors.nomor_handphone && (
                            <div className={styles.classNameErros}>
                                {errors.nomor_handphone}
                            </div>
                        )}
                        <div className={styles.classNameErros}>
                            {error.nomor_handphone}
                        </div>
                    </div>
                    <div>
                        <label
                            htmlFor="jarak"
                            className={styles.classNameLabel}
                        >
                            Jarak
                        </label>
                        <input
                            type="text"
                            id="jarak"
                            className={styles.classNameInput}
                            value={values.jarak}
                            onChange={handleChange}
                            placeholder="Email ...."
                        />
                        {errors.jarak && (
                            <div className={styles.classNameErros}>
                                {errors.jarak}
                            </div>
                        )}
                        <div className={styles.classNameErros}>
                            {error.jarak}
                        </div>
                    </div>
                    <div>
                        <label
                            htmlFor="jurusan"
                            className={styles.classNameLabel}
                        >
                            jurusan
                        </label>
                        <input
                            type="text"
                            id="jurusan"
                            className={styles.classNameInput}
                            value={values.jurusan}
                            onChange={handleChange}
                            placeholder="Email ...."
                        />
                        {errors.jurusan && (
                            <div className={styles.classNameErros}>
                                {errors.jurusan}
                            </div>
                        )}
                        <div className={styles.classNameErros}>
                            {error.jurusan}
                        </div>
                    </div>
                    <div className="flex">
                        <div className="">
                            <SimpleReactLightbox>
                                <SRLWrapper>
                                    <img
                                        className="w-32 h-32 mx-auto border border-stone-400 overflow-hidden rounded-lg"
                                        src={raport === "" ? Avatar : raport}
                                        alt="avatar.png"
                                    />
                                </SRLWrapper>
                            </SimpleReactLightbox>
                        </div>
                        <div>
                            <label
                                htmlFor="raport"
                                className={styles.classNameLabel}
                            >
                                Raport
                            </label>
                            <input
                                type="file"
                                id="raport"
                                className={styles.classNameInput}
                                ref={raportRef}
                                onChange={handleUploadRaport}
                            />
                            {errors.raport && (
                                <div className={styles.classNameErros}>
                                    {errors.raport}
                                </div>
                            )}
                            <div className={styles.classNameErros}>
                                {error.raport}
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="">
                            <SimpleReactLightbox>
                                <SRLWrapper>
                                    <img
                                        className="w-32 h-32 mx-auto border border-stone-400 overflow-hidden rounded-lg"
                                        src={
                                            suratPernyataan === ""
                                                ? Avatar
                                                : suratPernyataan
                                        }
                                        alt="avatar.png"
                                    />
                                </SRLWrapper>
                            </SimpleReactLightbox>
                        </div>
                        <div>
                            <label
                                htmlFor="suratPernyataan"
                                className={styles.classNameLabel}
                            >
                                Surat Pernyataan
                            </label>
                            <input
                                type="file"
                                id="suratPernyataan"
                                className={styles.classNameInput}
                                ref={suratPernyataanRef}
                                onChange={handleUploadSuratPernyataan}
                            />
                            {errors.suratPernyataan && (
                                <div className={styles.classNameErros}>
                                    {errors.suratPernyataan}
                                </div>
                            )}
                            <div className={styles.classNameErros}>
                                {error.suratPernyataan}
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="">
                            <SimpleReactLightbox>
                                <SRLWrapper>
                                    <img
                                        className="w-32 h-32 mx-auto border border-stone-400 overflow-hidden rounded-lg"
                                        src={image === "" ? Avatar : image}
                                        alt="avatar.png"
                                    />
                                </SRLWrapper>
                            </SimpleReactLightbox>
                        </div>
                        <div>
                            <label
                                htmlFor="image"
                                className={styles.classNameLabel}
                            >
                                Foto Profile
                            </label>
                            <input
                                type="file"
                                id="image"
                                className={styles.classNameInput}
                                ref={imageRef}
                                onChange={handleUploadImage}
                            />
                            {errors.image && (
                                <div className={styles.classNameErros}>
                                    {errors.image}
                                </div>
                            )}
                            <div className={styles.classNameErros}>
                                {error.image}
                            </div>
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className={`w-full ${
                                (
                                    editPendaftaran
                                        ? buttonDisabledUpdate()
                                        : buttonDisabled()
                                )
                                    ? "bg-blue-200"
                                    : "bg-blue-500"
                            }`}
                            disabled={
                                editPendaftaran
                                    ? buttonDisabledUpdate()
                                    : buttonDisabled()
                            }
                        >
                            {editPendaftaran ? "Update" : "Register"}
                        </button>
                    </div>
                </form>
            </div>
        </React.Fragment>
    );
};

// PendaftaranSiswa.layout = (page) => <Layout children={page} />;

export default PendaftaranSiswa;
