import { InputField } from "../component";

const ContactDetails:React.FC<any> = ({ values, errors, handleChange }) => {
    return (
        <form className="space-y-4 md:space-y-6">
            <div className="grid grid-col-1 md:grid-cols-4 gap-4">
                <h6 className="font-[600]">Father Contact Details</h6>
                <div></div>
                <div></div>
                <div></div>
                <InputField label="First Name" name={"father_first_name"} value={values?.father_first_name} onChange={handleChange} error={errors.father_first_name}/>
                <InputField label="Middle Name" name={"father_middle_name"} value={values?.father_middle_name} onChange={handleChange} error={errors.father_middle_name}/>
                <InputField label="Last Name" name={"father_last_name"} value={values?.father_last_name} onChange={handleChange} error={errors.father_last_name}/>
                <InputField label="Email" name={"father_email"} value={values?.father_email} onChange={handleChange} error={errors.father_email}/>
                <InputField label="Date of Birth" type="date" name={"father_dob"} value={values?.father_dob} onChange={handleChange} error={errors.father_dob}/>
                <InputField label="Education" name={"father_education"} value={values?.father_education} onChange={handleChange} error={errors.father_education}/>
                <InputField label="Occupation" name={"father_occupation"} value={values?.father_occupation} onChange={handleChange} error={errors.father_occupation}/>
                <InputField label="organization" name={"father_organization"} value={values?.father_organization} onChange={handleChange} error={errors.father_organization}/>
                <InputField label="Designation" name={"father_designation"} value={values?.father_designation} onChange={handleChange} error={errors.father_designation}/>
                <InputField label="Annual Income" type="number" name={"father_annual_income"} value={values?.father_annual_income} onChange={handleChange} error={errors.father_annual_income}/>
                <InputField label="Primary Contact No." name={"father_primary_contact_no"} value={values?.father_primary_contact_no} onChange={handleChange} error={errors.father_primary_contact_no}/>
                <InputField label="Secondary Contact No." name={"father_secondary_contact_no"} value={values?.father_secondary_contact_no} onChange={handleChange} error={errors.father_secondary_contact_no}/>
               

                <h6 className="font-[600]">Mother Contact Details</h6>
                <div></div>
                <div></div>
                <div></div>
                <InputField label="First Name" name={"mother_first_name"} value={values?.mother_first_name} onChange={handleChange} error={errors.mother_first_name}/>
                <InputField label="Middle Name" name={"mother_middle_name"} value={values?.mother_middle_name} onChange={handleChange} error={errors.mother_middle_name}/>
                <InputField label="Last Name" name={"mother_last_name"} value={values?.mother_last_name} onChange={handleChange} error={errors.mother_last_name}/>
                <InputField label="Email" name={"mother_email"} value={values?.mother_email} onChange={handleChange} error={errors.mother_email}/>
                <InputField label="Date of Birth" type="date" name={"mother_dob"} value={values?.mother_dob} onChange={handleChange} error={errors.mother_dob}/>
                <InputField label="Education" name={"mother_education"} value={values?.mother_education} onChange={handleChange} error={errors.mother_education}/>
                <InputField label="Occupation" name={"mother_occupation"} value={values?.mother_occupation} onChange={handleChange} error={errors.mother_occupation}/>
                <InputField label="organization" name={"mother_organization"} value={values?.mother_organization} onChange={handleChange} error={errors.mother_organization}/>
                <InputField label="Designation" name={"mother_designation"} value={values?.mother_designation} onChange={handleChange} error={errors.mother_designation}/>
                <InputField label="Annual Income" type="number" name={"mother_annual_income"} value={values?.mother_annual_income} onChange={handleChange} error={errors.mother_annual_income}/>
                <InputField label="Primary Contact No." name={"mother_primary_contact_no"} value={values?.mother_primary_contact_no} onChange={handleChange} error={errors.mother_primary_contact_no}/>
                <InputField label="Secondary Contact No." name={"mother_secondary_contact_no"} value={values?.mother_secondary_contact_no} onChange={handleChange} error={errors.mother_secondary_contact_no}/>
             

                <h6 className="font-[600]">Local Guardian Details</h6>
                <div></div>
                <div></div>
                <div></div>
                <InputField label="First Name" name={"guardian_first_name"} value={values?.guardian_first_name} onChange={handleChange} error={errors.guardian_first_name}/>
                <InputField label="Middle Name" name={"guardian_middle_name"} value={values?.guardian_middle_name} onChange={handleChange} error={errors.guardian_middle_name}/>
                <InputField label="Last Name" name={"guardian_last_name"} value={values?.guardian_last_name} onChange={handleChange} error={errors.guardian_last_name}/>
                <InputField label="Email" name={"guardian_email"} value={values?.guardian_email} onChange={handleChange} error={errors.guardian_email}/>
                <InputField label="Relation" name={"guardian_relation"} value={values?.guardian_relation} onChange={handleChange} error={errors.guardian_relation}/>
                <InputField label="Primary Contact No." name={"guardian_primary_contact_no"} value={values?.guardian_primary_contact_no} onChange={handleChange} error={errors.guardian_primary_contact_no}/>
                <InputField label="Secondary Contact No." name={"guardian_secondary_contact_no"} value={values?.guardian_secondary_contact_no} onChange={handleChange} error={errors.guardian_secondary_contact_no}/>

                <div></div>
                <h6 className="font-[600]">Address</h6>
                <div></div>
                <div></div>
                <div></div>
                <InputField label="Address Line 1" name={"address1"} value={values?.address1} onChange={handleChange} error={errors.address1}/>
                <InputField label="Address Line 2" name={"address2"} value={values?.address2} onChange={handleChange} error={errors.address2}/>
                <InputField label="City" name={"city"} value={values?.city} onChange={handleChange} error={errors.city}/>
                <InputField label="State" name={"state"} value={values?.state} onChange={handleChange} error={errors.state}/>
                <InputField label="Country" name={"country"} value={values?.country} onChange={handleChange} error={errors.country}/>
                <InputField label="PIN code" name={"pin_code"} value={values?.pin_code} onChange={handleChange} error={errors.pin_code}/>
            </div>
        </form>
    );
}

export default ContactDetails;
