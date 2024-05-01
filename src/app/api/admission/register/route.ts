import { connectMongoDB } from "@/lib/mongodb";
import Admission from "@/modals/admission-enquiry";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
// import nodemailer from "nodemailer";
import { Resend } from "resend";
import { error } from "console";

export async function POST(request: Request) {
  try {
    const res = await request.json();
    await connectMongoDB();

    const password = Math.random().toString(36).slice(2).toUpperCase().slice(2);
    const salt = await bcryptjs.genSalt(12);
    const hashedPassword = await bcryptjs.hash(password, salt);
    const newRes = new Admission({
      password: hashedPassword,
      ...res,
    });

    newRes.username = `enq-wws-${newRes._id}`;
    const resend = new Resend("re_Gc5s4fuG_CkAZNmHUqYsxVcfKRJziSALW");

    resend.emails
      .send({
        from: "onboarding@resend.dev",
        to: res.primary_email_id,
        subject: "Wisdom waves school - Admission Enquiry",
        html: `<p>Dear Naeema Bargir,<br /> Thanks for registering with school for Admission.Please use the below details to access your online application form with below details.<br/>URL: <a href='https://school-management-six-theta.vercel.app/admission-enquiry/login'>Same Registration URL</a><br/>Username: ${`enq-wws-${newRes._id}`} <br/>Password: ${password}</p>`,
      })
      .then((res) => {
        Admission.create(newRes).then((res) => {
          return NextResponse.json(
            { message: `User registered. ${res.data}` },
            { status: 201 }
          );
        });
      })
 
  } catch (error) {
    return NextResponse.json(
      { message: `An error occurred while registering the user. ${error} ` },
      { status: 500 }
    );
  }
}
