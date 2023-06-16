import React, { useState } from "react";
import SearchForm from "./SearchForm";
import SearchResults from "../components/SearchResult";
import axios from "axios";
import NavbarWebsiteCopy from "../components/NavbarWebsite copy";

const HasilWebsite = () => {
    const [results, setResults] = useState([]);
    const [selectedData, setSelectedData] = useState(null);

    const handleSearch = (query) => {
        // Kirim permintaan pencarian ke server, menggunakan Laravel dan Inertia JS
        // Contoh menggunakan sintaksis Axios
        axios.get(`/search?query=${query}`).then((response) => {
            setResults(response.data);
        });
    };

    const handleDetail = (id) => {
        // Kirim permintaan ke server untuk mendapatkan detail data berdasarkan ID
        axios.get(`/data/${id}`).then((response) => {
            setSelectedData(response.data);
        });
    };

    return (
        <React.Fragment>
            <NavbarWebsiteCopy />
            <div className="pt-28 pb-16 px-32">
                <SearchForm handleSearch={handleSearch} />
                <SearchResults results={results} handleDetail={handleDetail} />
                {selectedData && (
                    <div>
                        {selectedData.status === "lolos" ? (
                            <div className="text-white bg-green-600 rounded-lg flex flex-col items-center py-20">
                                <p className="text-3xl font-bold p-3">
                                    SELAMAT, ANDA LOLOS
                                </p>
                                <p>
                                    Silahkan melakukan pendaftaran ulang ke
                                    sekolah
                                </p>
                            </div>
                        ) : (
                            <div className="text-white bg-red-600 rounded-lg flex flex-col items-center py-20">
                                <p className="text-3xl font-bold p-3">
                                    Maaf, Anda tidak lolos
                                </p>
                                <p>Tetap semangat ya</p>
                            </div>
                        )}
                        {/* Tampilkan detail data lainnya sesuai kebutuhan */}
                    </div>
                )}
            </div>
        </React.Fragment>
    );
};

export default HasilWebsite;
