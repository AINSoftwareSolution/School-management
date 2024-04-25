import { InputField } from "../component";

const ContactDetails = () => {
    return (
        <form className="space-y-4 md:space-y-6">
            <div className="grid grid-col-1 md:grid-cols-4 gap-4">
                <h6 className="font-[600]">Father Contact Details</h6>
                <div></div>
                <div></div>
                <div></div>
                <InputField label="First Name" name={"father_first_name"} />
                <InputField label="Middle Name" name={"father_middle_name"} />
                <InputField label="Last Name" name={"father_last_name"} />
                <InputField label="Email" name={"father_email"} />
                <InputField label="Date of Birth" type="date" name={"father_dob"} />
                <InputField label="Education" name={"father_education"} />
                <InputField label="Occupation" name={"father-occupation"} />
                <InputField label="organization" name={"father_organization"} />
                <InputField label="Designation" name={"father_designation"} />
                <InputField label="Annual Income" type="number" name={"father_annual_income"} />
                <InputField label="Primary Contact No." name={"father_primary_contact_no"} />
                <InputField label="Secondary Contact No." name={"father_secondary_contact_no"} />
               

                <h6 className="font-[600]">Mother Contact Details</h6>
                <div></div>
                <div></div>
                <div></div>
                <InputField label="First Name" name={"mother_first_name"} />
                <InputField label="Middle Name" name={"mother_middle_name"} />
                <InputField label="Last Name" name={"mother_last_name"} />
                <InputField label="Email" name={"mother_email"} />
                <InputField label="Date of Birth" type="date" name={"mother_dob"} />
                <InputField label="Education" name={"mother_education"} />
                <InputField label="Occupation" name={"father-occupation"} />
                <InputField label="organization" name={"mother_organization"} />
                <InputField label="Designation" name={"mother_designation"} />
                <InputField label="Annual Income" type="number" name={"mother_annual_income"} />
                <InputField label="Primary Contact No." name={"mother_primary_contact_no"} />
                <InputField label="Secondary Contact No." name={"mother_secondary_contact_no"} />
             

                <h6 className="font-[600]">Local Guardian Details</h6>
                <div></div>
                <div></div>
                <div></div>
                <InputField label="First Name" name={"guardian_first_name"} />
                <InputField label="Middle Name" name={"guardian_middle_name"} />
                <InputField label="Last Name" name={"guardian_last_name"} />
                <InputField label="Email" name={"guardian_email"} />
                <InputField label="Relation" name={"guardian_relation"} />
                <InputField label="Primary Contact No." name={"guardian_primary_contact_no"} />
                <InputField label="Secondary Contact No." name={"guardian_secondary_contact_no"} />

                <div></div>
                <h6 className="font-[600]">Address</h6>
                <div></div>
                <div></div>
                <div></div>
                <InputField label="Address Line 1" name={"address1"} />
                <InputField label="Address Line 2" name={"address2"} />
                <InputField label="City" name={"city"} />
                <InputField label="State" name={"state"} />
                <InputField label="Country" name={"country"} />
                <InputField label="PIN code" name={"pin_code"} />
            </div>
        </form>
    );
}

export default ContactDetails;
