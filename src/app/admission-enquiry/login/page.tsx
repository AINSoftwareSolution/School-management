'use client'
import Link from "next/link"
import { InputField } from "@/component"
import { admissionLoginvalidationSchema } from "@/app/utilis/schema";
import { useFormik } from "formik";

const Login = () => {
    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        validationSchema: admissionLoginvalidationSchema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    const { values, handleChange, errors, handleSubmit } = formik;

    return (
        <section className="bg-gray-50">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                {/* <Link href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
                    <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
                    School
                </Link> */}
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
                            <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
                            <p className="text-sm font-light text-gray-500">
                                Don’t have an account yet? <Link href="/admission-enquiry/register" className="font-medium text-primary-600 hover:underline">Sign up</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Login