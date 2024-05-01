import bcryptjs from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import Admission from "@/modals/admission-enquiry";

export const POST = async (res: NextRequest) => {
  try {
    const body = await res.json();
    const { username, password } = body;

    if (!username || !password) {
      return new Response("Username and Password is required", { status: 401 });
    }

    const user = await Admission.findOne({ username });

    if (!user) {
      return new Response("Username does not exist", { status: 400 });
    }

    const validPassword = await bcryptjs.compare(password, user.password);
    if (!validPassword) {
      return new Response("Incorrect Password", { status: 400 });
    }

    const tokenData = {
      username: user.username,
      id: user._id,
    };

    const token = jwt.sign(tokenData, "naeemaproject", {
      expiresIn: "1d",
    });

    const response = NextResponse.json({ message: "Login successfull" , token});
    return response;
  } catch (error) {
    console.log("Error", error);
    return new Response("Something went wrong ", { status: 500 });
  }
};
