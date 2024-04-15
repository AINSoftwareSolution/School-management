'use client'
import Link from "next/link"
import { GenderOptions, RegisterData, admissionClassoption } from "@/app/utilis/data";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { InputField, SelectField, Button } from "@/app/component";

const Register = () => {
    const intialData = {
        first_name: "",
        middle_name: "",
        last_name: "",
        academic_session: "",
        admission_class: "",
        gender: "",
        dob: "",
        about_school: "",
        primary_contact_name: "",
        primary_contact_relation: "",
        primary_contact_number: "",
        secondary_contact_number: "",
        address_1: "",
        address_2: "",
        country: "",
        state: "",
        city: "",
        pin_code: ""
    }
    const router = useRouter()
    const [formData, setFormData] = useState<RegisterData>(intialData);

    const [errors, setErrors] = useState<any>({
        first_name: "",
        middle_name: "",
        last_name: "",
        academic_session: "",
        admission_class: "",
        gender: "",
        dob: "",
        about_school: "",
        primary_contact_name: "",
        primary_contact_relation: "",
        primary_contact_number: "",
        secondary_contact_number: "",
        address_1: "",
        address_2: "",
        country: "",
        state: "",
        city: "",
        pin_code: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => { // Add async keyword to handleSubmit
        e.preventDefault();
        const validationErrors: Partial<any> = {};

        if (!formData.first_name.trim()) {
            validationErrors.first_name = "First name is required";
        }

        if (Object.keys(validationErrors).length === 0) {
            try {
                const res = await fetch("api/admissionRegister", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                });

                if (res.ok) {
                    setFormData(intialData)
                    alert('user regsiter')
                } else {
                    console.log("User registration failed.");
                }
            } catch (error) {
                console.error("An error occurred during registration:", error);
            }
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <section className="bg-gray-50">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow md:mt-0  xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray md:text-2xl">
                            Create and account
                        </h1>
                        <form className="space-y-4 md:space-y-6">
                            <div className="grid grid-col-1 md:grid-cols-4 gap-4">
                                <InputField label="First Name" name="first_name" value={formData.first_name} onChange={handleChange} error={errors.first_name} />
                                <InputField label="Middle Name" name="middle_name" value={formData.middle_name} onChange={handleChange} error={errors.middle_name} />
                                <InputField label="Last name" name="last_name" value={formData.last_name} onChange={handleChange} error={errors.last_name} />
                                <InputField label="Academic Session" name="academic_session" value={formData.academic_session} onChange={handleChange} error={errors.academic_session} />
                                <SelectField label="Admission Class" name="admission_class" options={admissionClassoption} value={formData.admission_class} onChange={handleChange} error={errors.admission_class} />
                                <SelectField label="Gender" name="gender" options={GenderOptions} value={formData.gender} onChange={handleChange} error={errors.gender} />
                                <InputField label="Date of birth" name="dob" type="date" value={formData.dob} onChange={handleChange} error={errors.dob} />
                                <InputField label="How Did You Get To Know About Our School" name='about_school' value={formData.about_school} onChange={handleChange} error={errors.about_school} />
                                <InputField label="Primary Contact Name" name='primary_contact_name' value={formData.primary_contact_name} onChange={handleChange} error={errors.primary_contact_name} />
                                <InputField label="Primary Contact Relation" name='primary_contact_relation' value={formData.primary_contact_relation} onChange={handleChange} error={errors.primary_contact_relation} />
                                <InputField label="Primary Contact Number" name='primary_contact_number' value={formData.primary_contact_number} onChange={handleChange} error={errors.primary_contact_number} />
                                <InputField label="Secondary Contact Number" name='secondary_contact_number' value={formData.secondary_contact_number} onChange={handleChange} error={errors.secondary_contact_number} />
                                <h6 className=""> Address </h6>
                                <div></div>
                                <div></div>
                                <div></div>
                                <InputField label="Address line  1" name='address_1' value={formData.address_1} onChange={handleChange} error={errors.address_1} />
                                <InputField label="Address line  2" name='address_2' value={formData.address_2} onChange={handleChange} error={errors.address_2} />
                                <InputField label="country" name='country' value={formData.country} onChange={handleChange} error={errors.country} />
                                <InputField label="state" name='state' value={formData.state} onChange={handleChange} error={errors.state} />
                                <InputField label="city" name='city' value={formData.city} onChange={handleChange} error={errors.city} />
                                <InputField label="Pin Code" name='pin_code' value={formData.pin_code} onChange={handleChange} error={errors.pin_code} />
                                <div></div>
                                <div></div>
                            </div>
                            <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Create and account</button>
                            <p className="text-sm font-light text-gray-500">
                                Already have an account? <Link href="/admission-enquiry/login" className="font-medium text-primary-600 hover:underline">Login Here</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Register