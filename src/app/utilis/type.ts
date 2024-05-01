import { ChangeEvent, ReactNode } from "react";

export interface ContainerProps {
  children: ReactNode;
}

export interface InputProps {
  label: string;
  name: string;
  type?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  disabled?: boolean;
}

export interface SelectProps {
  label: string;
  name: string;
  options: { value: string; label: string }[];
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  error?: string;
}

export interface RegisterData {
  first_name: string;
  middle_name: string;
  last_name: string;
  academic_year: string;
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

export interface UploadProps {
  label: string;
}

export interface TabsProps {
  children: ReactNode[];
}

export interface Alertprops {
  message: string;
  mode: "success" | "danger";
}
