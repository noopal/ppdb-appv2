import React, { useState } from "react";

const SearchForm = ({ handleSearch }) => {
    const styles = {
        classNameInput:
            "my-1 flex w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200",
        classNameLabel: "text-sm text-gray-500 font-semibold uppercase",
        classNameErros: "text-sm text-red-600 font-bold",
    };

    const [query, setQuery] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSearch(query);
    };

    return (
        <React.Fragment>
            <h1 className="text-4xl font-bold mb-1">
                Cek Hasil Pendaftaran Peserta Didik Baru
            </h1>
            <p>
                Form ini digunakan untuk melihat hasil pendaftaran. Silakan
                masukan data Nama Pendaftaran calon Peserta Didik.
            </p>
            <form onSubmit={handleSubmit} className="my-4">
                <div>
                    <label htmlFor="name" className={styles.classNameLabel}>
                        Nama Lengkap Peserta Didik*
                    </label>
                </div>
                <input
                    type="text"
                    name="name"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className={styles.classNameInput}
                />
                <button
                    type="submit"
                    className="w-full text-white my-2 py-2 rounded-lg bg-yellow-400"
                >
                    Search
                </button>
            </form>
        </React.Fragment>
    );
};

export default SearchForm;
