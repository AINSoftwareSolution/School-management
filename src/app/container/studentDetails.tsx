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
                <InputField label="Religion" name="religion" />
                <SelectField label="Category" name="category" options={CategoryOption} />
                <InputField label="Identification Marks" name="identification_marks" />
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
