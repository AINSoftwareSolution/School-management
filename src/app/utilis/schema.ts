import { object, string, date } from "yup";

export const admissionLoginvalidationSchema = object({
  username: string().required("Username is required"),
  password: string().required("Password is required"),
});

export const admissionRegistervalidationSchema = object().shape({
  first_name: string().required("First name is required"),
  middle_name: string().required("Middle name is required"),
  last_name: string().required("Last name is required"),
  academic_year: string().required("accademic session is required"),
  admission_class: string().required("Admission class is required"),
  gender: string().required("Gender is required"),
  dob: date().required("Date of birth is required"),
  about_school: string().required("fill this field"),
  primary_contact_name: string().required("Primary contact name is required"),
  primary_contact_relation: string().required(
    "Primary contact relation is required"
  ),
  primary_contact_number: string().required(
    "Primary contact number is required"
  ),
  primary_email_id: string()
    .email("Enter proper email ID")
    .required("Primary contact number is required"),
  secondary_contact_number: string(),
  address_1: string().required("Address is required"),
  address_2: string().required("Address is required"),
  country: string().required("Country is required"),
  state: string().required("State is required"),
  city: string().required("City is required"),
  pin_code: string().required("Pin code is required"),
});

// Schema for Student Details step
export const studentDetailsSchema = object().shape({
  first_name: string().required("First Name is required"),
  middle_name: string(),
  last_name: string().required("Last Name is required"),
  gender: string().required("Gender is required"),
  dob: date().required("Date of Birth is required"),
  nationality: string().required("Nationality is required"),
  mother_tongue: string().required("Mother Tongue is required"),
  place_of_birth: string().required("Place of Birth is required"),
  religion: string().required("Religion is required"),
  category: string().required("Category is required"),
  identification_marks: string(),
  blood_group: string().required("Blood Group is required"),
  differently_abled: string().required(
    "Please specify if your child is differently abled"
  ),
  remarks: string(),
});

// Schema for Contact Details step
export const contactDetailsSchema = object().shape({
  father_first_name: string(),
  father_middle_name: string(),
  father_last_name: string(),
  father_email: string(),
  father_dob: date(),
  father_education: string(),
  father_occupation: string(),
  father_organization: string(),
  father_designation: string(),
  father_annual_income: string(),
  father_primary_contact_no: string(),
  father_secondary_contact_no: string(),
  mother_first_name: string(),
  mother_middle_name: string(),
  mother_last_name: string(),
  mother_email: string(),
  mother_dob: date(),
  mother_education: string(),
  mother_occupation: string(),
  mother_organization: string(),
  mother_designation: string(),
  mother_annual_income: string(),
  mother_primary_contact_no: string(),
  mother_secondary_contact_no: string(),
  guardian_first_name: string(),
  guardian_middle_name: string(),
  guardian_last_name: string(),
  guardian_email: string(),
  guardian_relation: string(),
  guardian_primary_contact_no: string(),
  guardian_secondary_contact_no: string(),
  address1:string().required('Please enter address'),
  address2:string().required('Please enter address'),
  city:string().required('Please enter city'),
  state:string().required('Please enter state'),
  country:string().required('Please enter country'),
  pin_code:string().required('Please enter pin_code')
});

// Schema for Academic Details step
export const academicDetailsSchema = object().shape({
  academic_year: string().required("Academic Year is required"),
  class: string().required("Class is required"),
  medium: string().required("Medium is required"),
  second_language: string().required("Second Language is required"),
  previous_school_name: string(),
  board: string(),
  passing_out_school: string(),
  percentage_achieved: string(),
  year_of_passing: string(),
  reason_of_withdrawal: string(),
});
