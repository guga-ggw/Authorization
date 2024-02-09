import { connectMongoDB } from "@/lib/mongodb";
import User from "@/moduls/user";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

type User = {
    name: string;
    NickName: string;
    email: string;
    password: string;
};

export async function POST(req: any) {
    try {
        await connectMongoDB();
        const data = await req.json();
        console.log("data is" + data.email);
        const user = await User.findOne({ email: data.email }).select('_id');
        return NextResponse.json({ user });
    } catch (error) {
        return NextResponse.json({ message: "Failed to register" }, { status: 500 });
    }
}