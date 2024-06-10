import axios from "axios";
import { NextResponse } from "next/server";

interface UserData {
  full_name: string;
  email: string;
  phone_number: string;
  password: string;
}

export async function POST(request: Request) {
  try {
    const userData: UserData = await request.json();
    const API_URL_REGISTER = process.env.API_URL_REGISTER;
    if (!API_URL_REGISTER) {
      throw new Error('API URL is not defined');
    }
    const response = await axios.post(API_URL_REGISTER, userData, {
      headers: {
        'Content-Type': 'application/json',
      }
    });

    return NextResponse.json(response.data, {
      status: 200
    })
  }
  catch (error: any) {
    console.error('Error registering user:', error.response ? error.response.data : error.message);
    
    if (error.response && error.response.status === 400) {
      return NextResponse.json({
        message: "Masukan Data valid dan tidak boleh kosong!",
      }, { status: 400 })
    }

    const message = error.response.data.error
    return NextResponse.json({
      message: message[0].toUpperCase() + message.substring(1),
    }, {
      status: error.response ? error.response.status : 500,
    });
  }
}
