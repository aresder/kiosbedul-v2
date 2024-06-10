import axios from "axios";
import { NextResponse } from "next/server";

interface UserData {
  email: string;
  password: string;
}

export async function POST(request: Request) {
  try {
    const userData: UserData = await request.json();
    const API_URL_LOGIN = process.env.API_URL_LOGIN;
    if (!API_URL_LOGIN) {
      throw new Error("API URL is not defined");
    }

    const response = await axios.post(API_URL_LOGIN, userData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const { token } = response.data.data;

    const responseCookie = NextResponse.json({ success: true });
    const maxAge = 30 * 24 * 60 * 60; 
    responseCookie.cookies.set("TOKEN:Admin", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      maxAge: maxAge,
      expires: new Date(Date.now() + maxAge * 1000),
      path: "/",
      priority: "high",
    });

    return responseCookie;
  } catch (error: any) {
    console.log("Error loging in user: ", error.response.data.error);

    if (error.response && error.response.status === 400) {
      return NextResponse.json({
        message: "Data tidak valid!"
      }, {status: 400})
    }

    const message = await error.response.data.error 
    return NextResponse.json(
      {
        message: message[0].toUpperCase() + message.substring(1),
      },
      { status: error.response ? error.response.status : 500 }
    );
  }
}
