import React from "react";
import { InputField, SelectField } from "../component"
import { BloodGroupOptions, CategoryOption, GenderOptions, MotherTongueOptions, YesNoOption } from "../utilis/data"

const StudentDetails: React.FC<any> = ({ values, errors, handleChange }) => {
    console.log('student' , values)
    return (
        <form className="space-y-4 md:space-y-6">
            <div className="grid grid-col-1 md:grid-cols-4 gap-4">
                <h6 className="font-[600]">Student Details</h6>
                <div></div>
                <div></div>
                <div></div>
                <InputField label="First Name" name="first_name" value={values?.first_name} onChange={handleChange} error={errors.first_name} />
                <InputField label="Middle Name" name="middle_name" value={values?.middle_name} onChange={handleChange} error={errors.middle_name} />
                <InputField label="Last name" name="last_name" value={values?.last_name} onChange={handleChange} error={errors.last_name}/>
                <SelectField label="Gender" name="gender" options={GenderOptions} value={values?.gender} onChange={handleChange} error={errors.gender}/>
                <InputField label="Date of birth" name="dob" type="date" value={values?.dob} onChange={handleChange} error={errors.dob}/>
                <InputField label="Nationality" name="nationality" value={values?.nationality} onChange={handleChange} error={errors.nationality}/>
                <SelectField label="Mother Tongue" name="mother_tongue" options={MotherTongueOptions} value={values?.mother_tongue} onChange={handleChange} error={errors.mother_tongue}/>
                <InputField label="Place of birth" name="place_of_birth" value={values?.place_of_birth} onChange={handleChange} error={errors.place_of_birth}/>
                <InputField label="Religion" name="religion" value={values?.religion} onChange={handleChange} error={errors.religion}/>
                <SelectField label="Category" name="category" options={CategoryOption} value={values?.category} onChange={handleChange} error={errors.category}/>
                <InputField label="Identification Marks" name="identification_marks" value={values?.identification_marks} onChange={handleChange} error={errors.identification_marks}/>
                <br />
                <h6 className="font-[600]">Medical Details</h6>
                <div></div>
                <div></div>
                <div></div>
                <SelectField label="Blood Group" name="blood_group" options={BloodGroupOptions} value={values?.blood_group} onChange={handleChange} error={errors.blood_group}/>
                <SelectField label="Is your child differently abled" name="differently_abled" options={YesNoOption} value={values?.differently_abled} onChange={handleChange} error={errors.differently_abled}/>
                <InputField label="Remarks" name="remarks" value={values?.remarks} onChange={handleChange} error={errors.remarks}/>
            </div>
        </form>
    )
}

export default StudentDetails;
