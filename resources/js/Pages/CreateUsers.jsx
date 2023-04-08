import React from "react";
import Layout from "../components/Layout";
import { Helmet } from "react-helmet";
import { Inertia } from "@inertiajs/inertia";
import Swal from "sweetalert2";

const CreateUsers = ({ errors }) => {
    console.log(errors);
    const [values, setValues] = React.useState({
        name: "",
        email: "",
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
        Inertia.post(route("users.post"), values, {
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
            <h1>Create Users</h1>
            <form action="post" onSubmit={handleSubmit}>
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
                    <div className={styles.classNameErros}>{error.name}</div>
                </div>
                <div>
                    <label htmlFor="email" className={styles.classNameLabel}>
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
                    <div className={styles.classNameErros}>{error.email}</div>
                </div>
                <div>
                    <label htmlFor="password" className={styles.classNameLabel}>
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
                        Nama
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
                        {values.password !== values.password_confirmation
                            ? "Password dan Password Confirmation tidak sama"
                            : ""}
                    </div>
                </div>
                <div>
                    <button
                        type="submit"
                        className={`w-full ${
                            buttonDisabled() ? "bg-blue-200" : "bg-blue-500"
                        }`}
                        disabled={buttonDisabled}
                    >
                        Register
                    </button>
                </div>
            </form>
        </React.Fragment>
    );
};

CreateUsers.layout = (page) => <Layout children={page} />;

export default CreateUsers;
