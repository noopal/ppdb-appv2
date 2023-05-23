import React from "react";

const SelectInput = ({ options, value, onChange }) => {
    return (
        <select
            className={
                "my-1 flex w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
            }
            value={value}
            onChange={onChange}
        >
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

export default SelectInput;
