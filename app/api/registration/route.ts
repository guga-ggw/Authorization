import { connectMongoDB } from "@/lib/mongodb";
import User from "@/moduls/user";
import { NextResponse } from "next/server";


export async function POST(req: any) {
    try {
        const data = await req.json()
        console.log(data)
        await connectMongoDB()
        await User.create({
            name : data.name,
            NickName : data.NickName,
            email : data.email.email,
            password : data.email.password
        })
        return NextResponse.json({ message: "User registered" }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: "Failed to register" }, { status: 500 });
    }
}
