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
}

export interface SelectProps {
    label: string
    name: string
    options: { value: string; label: string }[];
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    error?: string;
}