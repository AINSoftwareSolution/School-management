import { object, string, date} from "yup";

export const admissionLoginvalidationSchema = object({
  username: string().required("Username is required"),
  password: string().required("Password is required"),
});

export const admissionRegistervalidationSchema = object().shape({
    first_name: string().required("First name is required"),
    middle_name: string().required("Middle name is required"),
    last_name: string().required("Last name is required"),
    academic_session: string().required("accademic session is required"),
    admission_class: string().required("Admission class is required"),
    gender: string().required("Gender is required"),
    dob: date().required("Date of birth is required"),
    about_school: string().required("fill this field"),
    primary_contact_name: string().required("Primary contact name is required"),
    primary_contact_relation: string().required("Primary contact relation is required"),
    primary_contact_number: string().required("Primary contact number is required"),
    secondary_contact_number: string(),
    address_1: string().required("Address is required"),
    address_2: string().required("Address is required"),
    country: string().required("Country is required"),
    state: string().required("State is required"),
    city: string().required("City is required"),
    pin_code: string().required("Pin code is required"),
});
