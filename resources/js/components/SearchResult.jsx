import React from "react";

const SearchResults = ({ results, handleDetail }) => {
    return (
        <div>
            {results.map((result) => (
                <div key={result.id}>
                    <div className="flex flex-row gap-3">
                        <p>Nama Lengkap :</p>
                        <p>{result.name}</p>
                    </div>

                    <button
                        onClick={() => handleDetail(result.id)}
                        className="text-white my-2 p-2 rounded-lg bg-blue-600"
                    >
                        Cek Hasil
                    </button>
                </div>
            ))}
        </div>
    );
};

export default SearchResults;
