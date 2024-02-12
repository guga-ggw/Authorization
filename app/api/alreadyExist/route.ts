import { connectMongoDB } from "@/lib/mongodb";
import User from "@/moduls/user";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(req: any) {
    try {
        await connectMongoDB();
        const data = await req.json();
        const user = await User.findOne({ email: data.email }).select('_id');
        return NextResponse.json({ user });
    } catch (error) {
        return NextResponse.json({ message: "Failed to register" }, { status: 500 });
    }
}