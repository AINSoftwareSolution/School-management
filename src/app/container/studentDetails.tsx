import { InputField, SelectField } from "../component"
import { BloodGroupOptions, CasteOption, CategoryOption, GenderOptions, MotherTongueOptions, Religionoptions, YesNoOption } from "../utilis/data"

const StudentDetails = () => {
    return (
        <form className="space-y-4 md:space-y-6">
            <div className="grid grid-col-1 md:grid-cols-4 gap-4">
                <h6 className="font-[600]">Student Details</h6>
                <div></div>
                <div></div>
                <div></div>
                <InputField label="First Name" name="first_name" />
                <InputField label="Middle Name" name="middle_name" />
                <InputField label="Last name" name="last_name" />
                <SelectField label="Gender" name="gender" options={GenderOptions} />
                <InputField label="Date of birth" name="dob" type="date" />
                <InputField label="Nationality" name="nationality" />
                <SelectField label="Mother Tongue" name="mother_tongue" options={MotherTongueOptions} />
                <InputField label="Place of birth" name="place_of_birth" />
                <SelectField label="Religion" name="religion" options={Religionoptions} />
                <SelectField label="Category" name="category" options={CategoryOption} />
                <SelectField label="Caste" name="caste" options={CasteOption} />
                <InputField label="Sub Caste" name="sub_caste" />
                <InputField label="Identification Marks" name="identification_marks" />
                <InputField label="How did you get to know about our school" name="how_did_you_get_to_know_about_our_school" />
                <SelectField label="Transport-Required" name="transport_required" options={YesNoOption} />
                <br />
                <h6 className="font-[600]">Medical Details</h6>
                <div></div>
                <div></div>
                <div></div>
                <SelectField label="Blood Group" name="blood_group" options={BloodGroupOptions} />
                <SelectField label="Is your child differently abled" name="differently_abled" options={YesNoOption} />
                <InputField label="Remarks" name="remarks" />
            </div>
        </form>
    )
}

export default StudentDetails;
