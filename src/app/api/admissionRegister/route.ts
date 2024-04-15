import { connectMongoDB } from "@/app/lib/mongodb";
import Admission from "@/app/modals/admission-enquiry";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { first_name,
            middle_name,
            last_name,
            academic_session,
            admission_class,
            gender,
            dob,
            about_school,
            primary_contact_name,
            primary_contact_relation,
            primary_contact_number,
            secondary_contact_number,
            address_1,
            address_2,
            country,
            state,
            city,
            pin_code } = await req.json();
        await connectMongoDB();
        await Admission.create({
            first_name,
            middle_name,
            last_name,
            academic_session,
            admission_class,
            gender,
            dob,
            about_school,
            primary_contact_name,
            primary_contact_relation,
            primary_contact_number,
            secondary_contact_number,
            address_1,
            address_2,
            country,
            state,
            city,
            pin_code
        })
        return NextResponse.json({ message: "User registered." }, { status: 201 });
    } catch (error) {
        return NextResponse.json(
            { message: `An error occurred while registering the user. ${error} ` },
            { status: 500 }
        );
    }
}
