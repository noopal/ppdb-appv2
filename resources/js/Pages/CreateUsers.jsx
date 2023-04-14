import React from "react";
import Layout from "../components/Layout";
import { Helmet } from "react-helmet";
import { Inertia } from "@inertiajs/inertia";
import Swal from "sweetalert2";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import Avatar from "../../../public/images/avatar.png";

const CreateUsers = ({ errors, editUsers }) => {
    console.log(errors);
    console.log(editUsers);
    const imageRef = React.useRef();
    const [image, setImage] = React.useState(
        base_url + "/" + editUsers?.image || ""
    );
    const [values, setValues] = React.useState({
        name: editUsers?.name || "",
        email: editUsers?.email || "",
        password: "",
        password_confirmation: "",
    });
    const [error] = React.useState({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
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
            case "name":
                error.name = value === "" ? "Nama tidak boleh kosong" : "";
                break;
            case "email":
                error.email =
                    value === ""
                        ? "Email tidak boleh kosong"
                        : regExp.test(value)
                        ? ""
                        : "Format email salah";
                break;
            case "password":
                error.password =
                    value === ""
                        ? "Password tidak boleh kosong"
                        : value.length < 8
                        ? "Password minimal 8 karakter"
                        : "";
                break;
            case "password_confirmation":
                error.password_confirmation =
                    value === ""
                        ? "Password Confirmation tidak boleh kosong"
                        : value.length < 8
                        ? "Password Confirmation minimal 8 karakter"
                        : "";
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
        Inertia.post(route("users.store"), formData, {
            onSuccess: () => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Data user berhasil ditambahkan",
                    showConfirmButton: true,
                });
            },
        });
    };
    const handleUpdate = (e) => {
        e.preventDefault();
        console.log(values);
        const formData = new FormData();
        formData.append("id", editUsers.id);
        for (let key in values) {
            formData.append(key, values[key]);
        }
        formData.append("image", imageRef.current.files[0]);
        formData.append("_method", "put");
        Inertia.post(route("users.update", editUsers.id), formData, {
            onSuccess: () => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Data user berhasil diupdate",
                    showConfirmButton: true,
                });
            },
        });
    };
    const buttonDisabled = () => {
        if (
            values.name === "" ||
            values.email === "" ||
            values.password === "" ||
            values.password_confirmation === ""
        ) {
            return true;
        } else if (values.password !== values.password_confirmation) {
            return true;
        } else {
            return false;
        }
    };
    const buttonDisabledUpdate = () => {
        if (values.name === "" || values.email === "") {
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
                <title>Create Users</title>
            </Helmet>
            <h1>{editUsers ? "Form Update Users" : "Form Registrasi User"}</h1>
            <div>
                <div>
                    <SimpleReactLightbox>
                        <SRLWrapper>
                            <img
                                className="w-32 h-32 mx-auto border border-stone-400 overflow-hidden rounded-full"
                                src={image === "" ? Avatar : image}
                                alt="avatar.png"
                            />
                        </SRLWrapper>
                    </SimpleReactLightbox>
                </div>
                <form
                    action="post"
                    onSubmit={editUsers ? handleUpdate : handleSubmit}
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
                            htmlFor="email"
                            className={styles.classNameLabel}
                        >
                            Email
                        </label>
                        <input
                            type="text"
                            id="email"
                            className={styles.classNameInput}
                            value={values.email}
                            onChange={handleChange}
                            placeholder="Email ...."
                        />
                        {errors.email && (
                            <div className={styles.classNameErros}>
                                {errors.email}
                            </div>
                        )}
                        <div className={styles.classNameErros}>
                            {error.email}
                        </div>
                    </div>
                    {editUsers ? (
                        ""
                    ) : (
                        <div>
                            <div>
                                <label
                                    htmlFor="password"
                                    className={styles.classNameLabel}
                                >
                                    Password
                                </label>
                                <input
                                    type="text"
                                    id="password"
                                    className={styles.classNameInput}
                                    value={values.password}
                                    onChange={handleChange}
                                    placeholder="Password ...."
                                />
                                {errors.password && (
                                    <div className={styles.classNameErros}>
                                        {errors.password}
                                    </div>
                                )}
                                <div className={styles.classNameErros}>
                                    {error.password}
                                </div>
                            </div>
                            <div>
                                <label
                                    htmlFor="password_confirmation"
                                    className={styles.classNameLabel}
                                >
                                    Confirmation Password
                                </label>
                                <input
                                    type="text"
                                    id="password_confirmation"
                                    className={styles.classNameInput}
                                    value={values.password_confirmation}
                                    onChange={handleChange}
                                    placeholder="Password confirmation ...."
                                />
                                {errors.password_confirmation && (
                                    <div className={styles.classNameErros}>
                                        {errors.password_confirmation}
                                    </div>
                                )}
                                <div className={styles.classNameErros}>
                                    {values.password !==
                                    values.password_confirmation
                                        ? "Password dan Password Confirmation tidak sama"
                                        : ""}
                                </div>
                            </div>
                        </div>
                    )}
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
                            onChange={handleUpload}
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
                    <div>
                        <button
                            type="submit"
                            className={`w-full ${
                                (
                                    editUsers
                                        ? buttonDisabledUpdate()
                                        : buttonDisabled()
                                )
                                    ? "bg-blue-200"
                                    : "bg-blue-500"
                            }`}
                            disabled={
                                editUsers
                                    ? buttonDisabledUpdate()
                                    : buttonDisabled()
                            }
                        >
                            {editUsers ? "Update" : "Register"}
                        </button>
                    </div>
                </form>
            </div>
        </React.Fragment>
    );
};

CreateUsers.layout = (page) => <Layout children={page} />;

export default CreateUsers;
