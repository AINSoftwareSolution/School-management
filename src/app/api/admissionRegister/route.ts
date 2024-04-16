import { connectMongoDB } from "@/lib/mongodb";
import Admission from "@/modals/admission-enquiry";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const res = await request.json();
    await connectMongoDB();
    const newRes = { username: res.first_name, password: "abcd", ...res };
    await Admission.create(newRes);
    
    return NextResponse.json({ message: `User registered.` }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: `An error occurred while registering the user. ${error} ` },
      { status: 500 }
    );
  }
}
