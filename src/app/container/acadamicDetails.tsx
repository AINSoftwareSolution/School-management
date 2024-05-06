import { InputField } from "../component";

const AcadamicDetails:React.FC<any> = ({ values, errors, handleChange }) => {
    return (
        <form className="space-y-4 md:space-y-6">
            <div className="grid grid-col-1 md:grid-cols-4 gap-4">
                <h6 className="font-[600]">School Details (Applying for)</h6>
                <div></div>
                <div></div>
                <div></div>
                <InputField label="Academic year" name={"academic_year"}  value={values?.academic_year} onChange={handleChange} error={errors.academic_year}/>
                <InputField label="Class" name={"class"}  value={values?.class} onChange={handleChange} error={errors.class}/>
                <InputField label="Medium" name={"medium"}  value={values?.medium} onChange={handleChange} error={errors.medium}/>
                <InputField label="Second Language" name={"second_language"}  value={values?.second_language} onChange={handleChange} error={errors.second_language}/>

                <h6 className="font-[600]">Previous School Details</h6>
                <div></div>
                <div></div>
                <div></div>
                <InputField label="Previous School Name" name={"previous_school_name"}  value={values?.previous_school_name} onChange={handleChange} error={errors.previous_school_name}/>
                <InputField label="Board" name={"board"}  value={values?.board} onChange={handleChange} error={errors.board}/>
                <InputField label="Passing out Class" name={"passing_out_school"} value={values?.passing_out_school} onChange={handleChange} error={errors.passing_out_school} />
                <InputField label="Percentage Achieved (%)"  name={"percentage_achived"}  value={values?.percentage_achived} onChange={handleChange} error={errors.percentage_achived}/>
                <InputField label="Year of Passing"  name={"year_of_passing"}  value={values?.year_of_passing} onChange={handleChange} error={errors.year_of_passing}/>
                <InputField label="Reason for Withdrawal" name={"reason_of_withdrawal"}  value={values?.reason_of_withdrawal} onChange={handleChange} error={errors.reason_of_withdrawal}/>
            </div>
        </form>
    );
}

export default AcadamicDetails;
