
const Confirmation = ({values}:any) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2">
            <div></div>
            <div className="flex flex-col">
                <h4 className="font-[800] text-[1.2rem]">Application Details</h4>

                <h2 className="font-[600] mt-2 text-blue-600">Student Details:</h2>
                <label>First Name: {values?.first_name}</label>
                <label>Middle Name: {values?.first_name}</label>
                <label>Last Name: {values?.first_name}</label>
                <label>Gender: {values?.first_name}</label>
                <label>Date of Birth: {values?.first_name}</label>
                <label>Nationality: {values?.first_name}</label>
                <label>Mother Tongue: {values?.first_name}</label>
                <label>Place of Birth: {values?.first_name}</label>
                <label>Religion: {values?.first_name}</label>
                <label>Category: {values?.first_name}</label>
                <label>Identification Marks: {values?.first_name}</label>


                <h2 className="font-[600] mt-2 text-blue-600">Medical Details:</h2>
                <label>Blood Group: {values?.first_name}</label>
                <label>Is your child differently abled: {values?.first_name}</label>
                <label>Remarks: {values?.first_name}</label>

                <h4 className="mt-4 font-[800] text-[1.2rem]">Contact Details</h4>
                <h2 className="font-[600] mt-2 text-blue-600">Father Contact Details:</h2>
                <label>First Name: {values?.first_name}</label>
                <label>Middle Name: {values?.first_name}</label>
                <label>Last Name: {values?.first_name}</label>
                <label>Primary Contact No.: {values?.first_name}</label>
                <label>Secondary Contact No.: {values?.first_name}</label>
                <label>Email: {values?.first_name}</label>
                <label>Date of Birth: {values?.first_name}</label>
                <label>Education: {values?.first_name}</label>
                <label>Occupation: {values?.first_name}</label>
                <label>organization: {values?.first_name}</label>
                <label>Designation: {values?.first_name}</label>
                <label>Annual Income: {values?.first_name}</label>

                <h2 className="font-[600] mt-2 text-blue-600">Mother Contact Details:</h2>
                <label>First Name: {values?.first_name}</label>
                <label>Middle Name: {values?.first_name}</label>
                <label>Last Name: {values?.first_name}</label>
                <label>Primary Contact No.: {values?.first_name}</label>
                <label>Secondary Contact No.: {values?.first_name}</label>
                <label>Email: {values?.first_name}</label>
                <label>Date of Birth: {values?.first_name}</label>
                <label>Education: {values?.first_name}</label>
                <label>Occupation: {values?.first_name}</label>
                <label>organization: {values?.first_name}</label>
                <label>Designation: {values?.first_name}</label>
                <label>Annual Income: {values?.first_name}</label>

                <h2 className="font-[600] mt-2 text-blue-600">Address:</h2>
                <label>Address Line 1: {values?.first_name}</label>
                <label>Address Line 2: {values?.first_name}</label>
                <label>Country: {values?.first_name}</label>
                <label>State: {values?.first_name}</label>
                <label>City: {values?.first_name}</label>
                <label>PIN code: {values?.first_name}</label>

                <h2 className="font-[600] mt-2 text-blue-600">Local Guardian Details :</h2>
                <label>First Name: {values?.first_name}</label>
                <label>Middle Name: {values?.first_name}</label>
                <label>Last Name: {values?.first_name}</label>
                <label>Relation: {values?.first_name}</label>
                <label>Primary Contact No.: {values?.first_name}</label>
                <label>Secondary Contact No.: {values?.first_name}</label>
                <label>Email: {values?.first_name}</label>

                <h4 className="mt-4 font-[800] text-[1.2rem]">Acadamic Details</h4>
                <h2 className="font-[600] mt-2 text-blue-600">School Details (Applying for)</h2>
                <label>Session: {values?.first_name}</label>
                <label>Class: {values?.first_name}</label>
                <label>Medium: {values?.first_name}</label>
                <label>Second Language: {values?.first_name}</label>

                <h2 className="font-[600] mt-2 text-blue-600">Previous School Details:</h2>
                <label>Previous School Name: {values?.first_name}</label>
                <label>Board: {values?.first_name}</label>
                <label>Passing out Class: {values?.first_name}</label>
                <label>Percentage Achieved (%): {values?.first_name}</label>
                <label>Year of Passing: {values?.first_name}</label>
                <label>Reason for Withdrawal: {values?.first_name}</label>
            </div>

        </div>
    )
}

export default Confirmation