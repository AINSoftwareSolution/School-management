import { InputField, SelectField } from "../component"
import { GenderOptions } from "../utilis/data"

const StudentDetails = () => {
    return (
        <form className="space-y-4 md:space-y-6">
            <div className="grid grid-col-1 md:grid-cols-4 gap-4">
                <InputField label="First Name" name="first_name" />
                <InputField label="Middle Name" name="middle_name" />
                <InputField label="Last name" name="last_name" />
                <SelectField label="Gender" name="gender" options={GenderOptions} />
                <InputField label="Date of birth" name="dob" type="date" />
                <SelectField label="Nationality" name="nationality" options={GenderOptions} />
                <SelectField label="Mother Tongue" name="mother_tongue" options={GenderOptions} />
                <InputField label="Place of birth" name="place_of_birth" />
                <SelectField label="Religion" name="religion" options={GenderOptions} />
                <SelectField label="Category" name="category" options={GenderOptions} />
                <SelectField label="Caste" name="caste" options={GenderOptions} />
                <SelectField label="Sub Caste" name="sub_caste" options={GenderOptions} />
                <InputField label="Identification Marks" name="identification_marks" />
                <InputField label="How did you get to know about our school" name="how_did_you_get_to_know_about_our_school" />
                <SelectField label="Transport-Required" name="transport_required" options={[{ value: 'Yes', label: 'yes' }, { value: 'No', label: 'no' }]} />
            </div>
        </form>
    )
}

export default StudentDetails