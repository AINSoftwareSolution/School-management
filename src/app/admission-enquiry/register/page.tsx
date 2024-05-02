'use client'
import Link from "next/link"
import { admissionRegistervalidationSchema } from "@/app/utilis/schema";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { GenderOptions, admissionClassoption, registerIntialData } from "@/app/utilis/data";
import { InputField, SelectField } from "@/app/component";
import { useState } from "react";
import Alert from "@/app/component/alert";
import { Alertprops } from "@/app/utilis/type";

const Register = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const router = useRouter()
    const [isAlert, setAlert] = useState<Alertprops>({ message: '', mode: 'danger' })

    const showAlert = ({ mode, message }: Alertprops) => {
        setAlert({ mode, message });
        setTimeout(() => {
            if(mode == 'success'){
                router.push('/admission-enquiry/login')
            }
            setAlert({ message: '', mode: 'danger' });
        }, 5000); // Hide the alert after 5 seconds
    };

    const formik = useFormik({
        initialValues: registerIntialData,
        validationSchema: admissionRegistervalidationSchema,
        onSubmit: async values => {
            alert(JSON.stringify(values, null, 2));
            try {
                setLoading(true)
                fetch("/api/admission/register", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formik.values),
                }).then((res) => {
                    if (res.ok) {
                        showAlert({ mode: 'success', message: 'Success' })
                        setLoading(false)
                    }
                }).catch((error) =>
                    showAlert({ mode: 'danger', message: 'Something went wrong try again!' })
                )
            } catch (error) {
                console.error("An error occurred during registration:", error);
            }
        },
    });
    const { values, handleChange, errors, handleSubmit } = formik;

    return (
        <section className="bg-purple-50 ">
            <div className="flex flex-col items-center justify-center px-8 pb-8 mx-auto pt-[12rem] md:pt-[8rem]">
                <div className="w-full bg-white rounded-lg shadow md:mt-0  xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray md:text-2xl">
                            Create and account
                        </h1>
                        <p className="font-[400]">Enter the name as mentioned in the birth certificate.</p>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-col-1 md:grid-cols-4 gap-4">
                                <InputField label="Applicant First Name" name="first_name" value={values?.first_name} onChange={handleChange} error={errors.first_name} />
                                <InputField label="Middle Name" name="middle_name" value={values?.middle_name} onChange={handleChange} error={errors.middle_name} />
                                <InputField label="Last name" name="last_name" value={values?.last_name} onChange={handleChange} error={errors.last_name} />
                                <InputField label="Academic Year" name="academic_year" value={values?.academic_year} onChange={handleChange} error={errors.academic_year} disabled />
                                <SelectField label="Admission Class" name="admission_class" options={admissionClassoption} value={values?.admission_class} onChange={handleChange} error={errors.admission_class} />
                                <SelectField label="Gender" name="gender" options={GenderOptions} value={values?.gender} onChange={handleChange} error={errors.gender} />
                                <InputField label="Date of birth" name="dob" type="date" value={values?.dob} onChange={handleChange} error={errors.dob} />
                                <InputField label="How Did You Get To Know About Our School" name='about_school' value={values?.about_school} onChange={handleChange} error={errors.about_school} />
                                <InputField label="Primary Contact Name" name='primary_contact_name' value={values?.primary_contact_name} onChange={handleChange} error={errors.primary_contact_name} />
                                <InputField label="Primary Contact Relation" name='primary_contact_relation' value={values?.primary_contact_relation} onChange={handleChange} error={errors.primary_contact_relation} />
                                <InputField label="Primary Email Id" name='primary_email_id' value={values?.primary_email_id} onChange={handleChange} error={errors.primary_email_id} />
                                <InputField label="Primary Contact Number" name='primary_contact_number' value={values?.primary_contact_number} onChange={handleChange} error={errors.primary_contact_number} />
                                <InputField label="Secondary Contact Number" name='secondary_contact_number' value={values?.secondary_contact_number} onChange={handleChange} error={errors.secondary_contact_number} />
                                <div></div>
                                <div></div>
                                <div></div>
                                <h6 className="font-[600]"> Address </h6>
                                <div></div>
                                <div></div>
                                <div></div>
                                <InputField label="Address line  1" name='address_1' value={values?.address_1} onChange={handleChange} error={errors.address_1} />
                                <InputField label="Address line  2" name='address_2' value={values?.address_2} onChange={handleChange} error={errors.address_2} />
                                <InputField label="city" name='city' value={values?.city} onChange={handleChange} error={errors.city} />
                                <InputField label="state" name='state' value={values?.state} onChange={handleChange} error={errors.state} />
                                <InputField label="country" name='country' value={values?.country} onChange={handleChange} error={errors.country} />
                                <InputField label="Pin Code" name='pin_code' value={values?.pin_code} onChange={handleChange} error={errors.pin_code} />
                                <div></div>
                                <div></div>
                            </div>
                            <button
                                type="submit"
                                disabled={loading}
                                className=" text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Create and account</button>
                            <p className="text-sm font-light text-gray-500">
                                Already have an account? <Link href="/admission-enquiry/login" className="font-medium text-primary-600 hover:underline">Login Here</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
            {isAlert?.message && <Alert message={isAlert?.message} mode={isAlert.mode} />}
        </section>
    )
}
export default Register