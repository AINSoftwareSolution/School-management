import { connectMongoDB } from "@/lib/mongodb";
import Admission from "@/modals/admission-enquiry";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const res = await request.json();
    await connectMongoDB();

    const password = Math.random().toString(36).slice(2).toUpperCase().slice(2);
    console.log(password)
    const salt = await bcryptjs.genSalt(12);
    const hashedPassword = await bcryptjs.hash(password, salt);
    const newRes = new Admission({
      username: `enq-mlhs-${res.first_name}`,
      password: hashedPassword,
      ...res,
    });

    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
          user: 'lawrence.bartoletti81@ethereal.email',
          pass: 'QdbsUchW8aMgaqewXP'
      }
  });

    const mailOptions = {
      from: "shaina.auer@ethereal.email", // Sender's email address
      to: res.primary_email_id, // Receiver's email address
      subject: "username and password", // Email subject
      text: `username :'enq-wws-${res.first_name}' ,  password: ${password}`, // Email body text
    };

    const sendmail = await transporter.sendMail(mailOptions);

    console.log(sendmail.response);

    // const user = await Admission.findOne({
    //   primary_email_id: res?.primary_email_id,
    // });

    // if (user) {
    //   return new Response("Email already exist", { status: 400 });
    // }

    await Admission.create(newRes);
    return NextResponse.json(
      { message: `User registered. ${sendmail.response}` },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: `An error occurred while registering the user. ${error} ` },
      { status: 500 }
    );
  }
}
