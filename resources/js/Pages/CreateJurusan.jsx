import React from "react";
import Layout from "../components/Layout";
import { Helmet } from "react-helmet";
import { Inertia } from "@inertiajs/inertia";
import Swal from "sweetalert2";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import Avatar from "../../../public/images/avatar.png";

const CreateJurusan = ({ errors, editJurusans }) => {
    console.log(errors);
    console.log(editJurusans);
    const imageRef = React.useRef();
    const [thumbnail, setImage] = React.useState(
        base_url + "/" + editJurusans?.thumbnail || ""
    );

    const [values, setValues] = React.useState({
        nama_jurusan: editJurusans?.nama_jurusan || "",
    });
    const [error] = React.useState({
        nama_jurusan: "",
    });
    const regExp = RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    const handleChange = (e) => {
        const key = e.target.id;
        const value = e.target.value;
        setValues((values) => ({
            ...values,
            [key]: value,
        }));

        switch (key) {
            case "nama_jurusan":
                error.nama_jurusan =
                    value === "" ? "Nama tidak boleh kosong" : "";
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
        formData.append("thumbnail", imageRef.current.files[0]);
        Inertia.post(route("jurusan.store"), formData, {
            onSuccess: () => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Berhasil",
                    text: "Data jurusan berhasil ditambahkan",
                    showConfirmButton: true,
                });
            },
        });
    };
    const handleUpdate = (e) => {
        e.preventDefault();
        console.log(values);
        const formData = new FormData();
        formData.append("id", editJurusans.id);
        for (let key in values) {
            formData.append(key, values[key]);
        }
        formData.append("thumbnail", imageRef.current.files[0]);
        formData.append("_method", "put");
        Inertia.post(route("jurusan.update", editJurusans.id), formData, {
            onSuccess: () => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Berhasil",
                    text: "Data jurusan berhasil diupdate",
                    showConfirmButton: true,
                });
            },
        });
    };
    const buttonDisabled = () => {
        if (values.nama_jurusan === "") {
            return true;
        } else {
            return false;
        }
    };
    const buttonDisabledUpdate = () => {
        if (values.nama_jurusan === "") {
            return true;
        } else {
            return false;
        }
    };

    const handleUpload = (e) => {
        e.preventDefault();
        let reader = new FileReader();
        reader.onloadend = () => {
            if (reader.readyState === 2) {
                setImage(reader.result);
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
                    {editJurusans ? "Update Jurusan" : "Tambah Jurusan"}
                </title>
            </Helmet>
            <h1>
                {editJurusans ? "Form Update Jurusan" : "Form Tambah Jurusan"}
            </h1>
            <div>
                <div>
                    <SimpleReactLightbox>
                        <SRLWrapper>
                            <img
                                className="w-32 h-32 mx-auto border border-stone-400 overflow-hidden rounded-full"
                                src={thumbnail === "" ? Avatar : thumbnail}
                                alt="avatar.png"
                            />
                        </SRLWrapper>
                    </SimpleReactLightbox>
                </div>
                <form
                    action="post"
                    onSubmit={editJurusans ? handleUpdate : handleSubmit}
                    encType="multipart/form-data"
                >
                    <div>
                        <label
                            htmlFor="nama_jurusan"
                            className={styles.classNameLabel}
                        >
                            Nama Jurusan
                        </label>
                        <input
                            type="text"
                            id="nama_jurusan"
                            className={styles.classNameInput}
                            value={values.nama_jurusan}
                            onChange={handleChange}
                            placeholder="Nama Jurusan ...."
                        />
                        {errors.nama_jurusan && (
                            <div className={styles.classNameErros}>
                                {errors.nama_jurusan}
                            </div>
                        )}
                        <div className={styles.classNameErros}>
                            {error.nama_jurusan}
                        </div>
                    </div>
                    <div>
                        <label
                            htmlFor="thumbnail"
                            className={styles.classNameLabel}
                        >
                            Thumbnail Jurusan
                        </label>
                        <input
                            type="file"
                            id="thumbnail"
                            className={styles.classNameInput}
                            ref={imageRef}
                            onChange={handleUpload}
                        />
                        {errors.thumbnail && (
                            <div className={styles.classNameErros}>
                                {errors.thumbnail}
                            </div>
                        )}
                        <div className={styles.classNameErros}>
                            {error.thumbnail}
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className={`w-full ${
                                (
                                    editJurusans
                                        ? buttonDisabledUpdate()
                                        : buttonDisabled()
                                )
                                    ? "bg-yellow-200"
                                    : "bg-yellow-400"
                            }`}
                            disabled={
                                editJurusans
                                    ? buttonDisabledUpdate()
                                    : buttonDisabled()
                            }
                        >
                            {editJurusans ? "Update Jurusan" : "Tambah Jurusan"}
                        </button>
                    </div>
                </form>
            </div>
        </React.Fragment>
    );
};

CreateJurusan.layout = (page) => <Layout children={page} />;

export default CreateJurusan;
