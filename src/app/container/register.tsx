"use client"
import { InputField, SelectField, Button } from "../component"
import { GenderOptions, RegisterData, admissionClassoption } from "../utilis/data"
import { useState } from "react"

const Register = () => {

    const [formData, setFormData] = useState<RegisterData>({
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

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const validationErrors: Partial<any> = {};

        if (!formData.first_name.trim()) {
            validationErrors.first_name = "First name is required";
        }

        if (Object.keys(validationErrors).length === 0) {
            console.log("Form submitted:", formData);
        } else {
            setErrors(validationErrors);
        }
    };

    console.log(errors)

    return (
        <form onSubmit={handleSubmit}>
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
                <Button />
            </div>
        </form>
    )
}

export default Register