import { InputField } from "../component";

const AcadamicDetails = () => {
    return (
        <form className="space-y-4 md:space-y-6">
            <div className="grid grid-col-1 md:grid-cols-4 gap-4">
                <h6 className="font-[600]">School Details (Applying for)</h6>
                <div></div>
                <div></div>
                <div></div>
                <InputField label="Academic year" name={"academic_year"} />
                <InputField label="Class" name={"class"} />
                <InputField label="Medium" name={"medium"} />
                <InputField label="Second Language" name={"second_language"} />

                <h6 className="font-[600]">Previous School Details</h6>
                <div></div>
                <div></div>
                <div></div>
                <InputField label="Previous School Name" name={"previous_school_name"} />
                <InputField label="Board" name={"board"} />
                <InputField label="Passing out Class" name={"passing_out_school"} />
                <InputField label="Percentage Achieved (%)" type="number" name={"percentage_achived"} />
                <InputField label="Year of Passing" type="number" name={"year_of_passing"} />
                <InputField label="Reason for Withdrawal" name={"reason_of_withdrawal"} />
            </div>
        </form>
    );
}

export default AcadamicDetails;
