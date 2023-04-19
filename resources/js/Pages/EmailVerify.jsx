import { Inertia } from "@inertiajs/inertia";
import React from "react";
import Swal from "sweetalert2";

const EmailVerify = (props) => {
    const email = props.user.email;
    const [isLoading, setIsLoading] = React.useState(false);
    console.log(props);
    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.post(route("verification.send"), email, {
            onStart: () => {
                setIsLoading(true);
            },
            onSuccess: () => {
                setIsLoading(false);
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Email sudah terkirim",
                    showConfirmButton: true,
                });
            },
        });
    };
    return (
        <React.Fragment>
            {/* <div>
                <InertiaLink href={"/logout"}>Logout</InertiaLink>
            </div> */}
            <div>
                <p>Silahkan cek email anda untuk verifikasi email</p>
                <form onSubmit={handleSubmit}>
                    <button type="submit">
                        {isLoading
                            ? "Sedang mengirim..."
                            : "Kirim email kembali"}
                    </button>
                </form>
            </div>
        </React.Fragment>
    );
};

export default EmailVerify;
