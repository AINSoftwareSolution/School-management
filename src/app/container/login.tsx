import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Button, InputField } from '../component';

const Login: React.FC = () => {
    // State to manage form inputs
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        rememberMe: false
    });

    // State to manage form errors
    const [errors, setErrors] = useState<{
        username: string;
        password: string;
    }>({
        username: '',
        password: ''
    });

    // Function to handle input changes
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    // Function to handle form submission
    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        // Perform validation
        const { username, password } = formData;
        const newErrors: { username: string; password: string } = { username: '', password: '' };
        if (!username.trim()) {
            newErrors.username = 'Username is required';
        }
        if (!password.trim()) {
            newErrors.password = 'Password is required';
        }
        setErrors(newErrors);
        // If there are no errors, submit the form
        if (!newErrors.username && !newErrors.password) {
            // Submit the form, you can add your logic here
            console.log('Form submitted:', formData);
        }
    };

    return (
        <form className="mt-4" onSubmit={handleSubmit}>
            <InputField
                label="Username"
                name="username"
                type="text"
                value={formData.username}
                onChange={handleInputChange}
                error={errors.username}
            />
            <InputField
                label="Password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleInputChange}
                error={errors.password}
            />
            <div className="flex items-start mb-5">
                <div className="flex items-center h-5">
                    <input
                        id="remember"
                        type="checkbox"
                        name="rememberMe"
                        checked={formData.rememberMe}
                        onChange={handleInputChange}
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                    />
                </div>
                <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
            </div>
            <Button />
        </form>
    );
};

export default Login;
