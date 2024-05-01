'use client'
import Link from "next/link"
import { InputField } from "@/app/component"
import { admissionLoginvalidationSchema } from "@/app/utilis/schema";
import { useFormik } from "formik";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Alert from "@/app/component/alert";
import { Alertprops } from "@/app/utilis/type";

const Login = () => {
    const [loading, setLoading] = useState(false)
    const [isAlert, setAlert] = useState<Alertprops>({ message: '', mode: 'danger' })

    const showAlert = ({ mode, message }: Alertprops) => {
        setAlert({ mode, message });
        setTimeout(() => {
            setAlert({ message: '', mode: 'danger' });
        }, 5000); // Hide the alert after 5 seconds
    };

    const router = useRouter();
    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        validationSchema: admissionLoginvalidationSchema,
        onSubmit: async values => {
            try {
                setLoading(true)
                fetch("/api/admission/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formik.values),
                }).then((res) => {
                    return res.json()
                }).then((data) => {
                    showAlert({ message: "Please check your mail for username and password", mode: "success" })
                    setLoading(false)
                    typeof window !== "undefined" && window?.localStorage.setItem('token', data?.token)
                    router.push('/admission-enquiry/details')
                }).catch((error) => {
                    showAlert({ message: "Something went wrong please try again!", mode: "danger" })
                    setLoading(false)
                })

            } catch (error) {
                console.error("An error occurred during registration:", error);
            }
        },
    })

    const { values, handleChange, errors, handleSubmit } = formik;

    return (
        <section className="bg-purple-50">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray md:text-2xl">
                            Sign in to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <InputField
                                    label="Username"
                                    name="username"
                                    type="text"
                                    value={values.username}
                                    onChange={handleChange}
                                    error={errors.username}
                                />
                            </div>
                            <div>
                                <InputField
                                    label="Password"
                                    name="password"
                                    type="password"
                                    value={values.password}
                                    onChange={handleChange}
                                    error={errors.password}
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <Link href="#" className="text-sm font-medium text-primary-600 hover:underline items-end">Forgot password?</Link>
                            </div>
                            <button type="submit" disabled={loading}
                                className="w-full text-white bg-purple-500 hover:bg-purle-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
                            <p className="text-sm font-light text-gray-500">
                                Don’t have an account yet? <Link href="/admission-enquiry/register" className="font-medium text-primary-600 hover:underline">Sign up</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
            {
                isAlert?.message && <Alert message={isAlert?.message} mode={isAlert.mode} />
            }
        </section>
    )
}

export default Login