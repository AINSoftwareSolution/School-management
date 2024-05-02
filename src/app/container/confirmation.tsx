const Confirmation = ({ values }: any) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2">
            <div></div>
            <div className="flex flex-col">
                <h4 className="font-[800] text-[1.2rem]">Application Details</h4>

                <h2 className="font-[600] mt-2 text-blue-600">Student Details:</h2>
                <label>First Name: {values?.first_name}</label>
                <label>Middle Name: {values?.middle_name}</label>
                <label>Last Name: {values?.last_name}</label>
                <label>Gender: {values?.gender}</label>
                <label>Date of Birth: {values?.dob}</label>
                <label>Nationality: {values?.nationality}</label>
                <label>Mother Tongue: {values?.mother_tongue}</label>
                <label>Place of Birth: {values?.place_of_birth}</label>
                <label>Religion: {values?.religion}</label>
                <label>Category: {values?.category}</label>
                <label>Identification Marks: {values?.identification_marks}</label>


                <h2 className="font-[600] mt-2 text-blue-600">Medical Details:</h2>
                <label>Blood Group: {values?.blood_group}</label>
                <label>Is your child differently abled: {values?.differently_abled}</label>
                <label>Remarks: {values?.remarks}</label>

                <h4 className="mt-4 font-[800] text-[1.2rem]">Contact Details</h4>
                <h2 className="font-[600] mt-2 text-blue-600">Father Contact Details:</h2>
                <label>First Name: {values?.father_first_name}</label>
                <label>Middle Name: {values?.father_middle_name}</label>
                <label>Last Name: {values?.father_last_name}</label>
                <label>Primary Contact No.: {values?.father_primary_contact_no}</label>
                <label>Secondary Contact No.: {values?.father_secondary_contact_no}</label>
                <label>Email: {values?.father_email}</label>
                <label>Date of Birth: {values?.father_dob}</label>
                <label>Education: {values?.father_education}</label>
                <label>Occupation: {values?.father_occupation}</label>
                <label>organization: {values?.father_organization}</label>
                <label>Designation: {values?.father_designation}</label>
                <label>Annual Income: {values?.father_annual_income}</label>

                <h2 className="font-[600] mt-2 text-blue-600">Mother Contact Details:</h2>
                <label>First Name: {values?.mother_first_name}</label>
                <label>Middle Name: {values?.mother_middle_name}</label>
                <label>Last Name: {values?.mother_last_name}</label>
                <label>Primary Contact No.: {values?.mother_primary_contact_no}</label>
                <label>Secondary Contact No.: {values?.mother_secondary_contact_no}</label>
                <label>Email: {values?.mother_email}</label>
                <label>Date of Birth: {values?.mother_dob}</label>
                <label>Education: {values?.mother_education}</label>
                <label>Occupation: {values?.mother_occupation}</label>
                <label>organization: {values?.mother_organization}</label>
                <label>Designation: {values?.mother_designation}</label>
                <label>Annual Income: {values?.mother_annual_income}</label>

                <h2 className="font-[600] mt-2 text-blue-600">Address:</h2>
                <label>Address Line 1: {values?.address1}</label>
                <label>Address Line 2: {values?.address2}</label>
                <label>Country: {values?.country}</label>
                <label>State: {values?.state}</label>
                <label>City: {values?.city}</label>
                <label>PIN code: {values?.pin_code}</label>

                <h2 className="font-[600] mt-2 text-blue-600">Local Guardian Details :</h2>
                <label>First Name: {values?.guardian_first_name}</label>
                <label>Middle Name: {values?.guardian_middle_name}</label>
                <label>Last Name: {values?.guardian_last_name}</label>
                <label>Relation: {values?.guardian_relation}</label>
                <label>Primary Contact No.: {values?.guardian_primary_contact_no}</label>
                <label>Secondary Contact No.: {values?.guardian_secondary_contact_no}</label>
                <label>Email: {values?.guardian_email}</label>

                <h4 className="mt-4 font-[800] text-[1.2rem]">Academic Details</h4>
                <h2 className="font-[600] mt-2 text-blue-600">School Details (Applying for)</h2>
                <label>Session: {values?.academic_year}</label>
                <label>Class: {values?.class}</label>
                <label>Medium: {values?.medium}</label>
                <label>Second Language: {values?.second_language}</label>

                <h2 className="font-[600] mt-2 text-blue-600">Previous School Details:</h2>
                <label>Previous School Name: {values?.previous_school_name}</label>
                <label>Board: {values?.board}</label>
                <label>Passing out Class: {values?.passing_out_school}</label>
                <label>Percentage Achieved (%): {values?.percentage_achieved}</label>
                <label>Year of Passing: {values?.year_of_passing}</label>
                <label>Reason for Withdrawal: {values?.reason_of_withdrawal}</label>
            </div>
        </div>
    )
}

export default Confirmation;
