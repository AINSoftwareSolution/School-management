import React from 'react';
import { InputProps } from '../utilis/type';

const InputField: React.FC<InputProps> = ({ label, name, type = 'text', value, onChange, error, disabled = false }) => {
    return (
        <div className="relative z-0 my-4">
            <input
                type={type}
                name={name}
                id={name}
                value={value}
                onChange={onChange}
                disabled={disabled}
                className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 
                appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer ${error ? 'border-red-500' : ''}`}
                placeholder=" "
            />
            <label
                htmlFor={name}
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                {label}
            </label>
            {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
        </div>
    );
};

export default InputField;
