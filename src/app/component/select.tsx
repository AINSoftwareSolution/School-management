import React from "react";
import { SelectProps } from "../utilis/type";

const SelectField: React.FC<SelectProps> = ({ name, label, options, value, onChange, error }) => {
    return (
        <div className="relative z-0 my-4">
            <select
                name={name}
                id="floating_select"
                value={value}
                onChange={onChange}
                className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 
                appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer ${error ? 'border-red-500' : ''}`}
            >
                <option value="" disabled>Select an option</option>
                {
                    options.map((option, index) => (
                        <option key={index} value={option.value}> {option.label} </option>
                    ))
                }
            </select>
            <label htmlFor="floating_select"
                className={`absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3
                -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 
                peer-placeholder-shown:translate-y-0 peer-focus:scale-75 
                peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto 
                ${value ? 'text-blue-600' : ''} ${error ? 'text-red-500' : ''}`}
            >
                {label}
            </label>
            {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
        </div>
    );
};

export default SelectField;
