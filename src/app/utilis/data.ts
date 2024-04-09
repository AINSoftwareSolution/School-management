
export const admissionClassoption = [
    { value: 'nursary', label: 'Nursary' },
    { value: 'playGroup', label: 'Play Group' },
    { value: 'k1', label: 'k1' },
    { value: 'k2', label: 'k2' },
    { value: '1', label: '|' },
    { value: '2', label: '||' },
    { value: '3', label: '|||' },
    { value: '4', label: '|V' },
    { value: '5', label: 'V' }
]

export const GenderOptions = [
    { label: 'Female', value: 'female' },
    { label: 'Male', value: 'male' },
    { label: 'Other', value: 'other' }
]

export interface RegisterData {
    first_name: string;
    middle_name: string;
    last_name: string;
    academic_session: string;
    admission_class: string;
    gender: string;
    dob: string;
    about_school: string;
    primary_contact_name: string;
    primary_contact_relation: string;
    primary_contact_number: string;
    secondary_contact_number: string;
    address_1: string;
    address_2: string;
    country: string;
    state: string;
    city: string;
    pin_code: string;
}