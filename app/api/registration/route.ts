import { NextResponse } from "next/server";

type User = {
    name: string;
    NickName: string;
    email: string;
    password: string;
};

export async function POST(req: any) {
    try {
        const data : User = await req.json();
        return NextResponse.json({ message: "User registered" }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: "Failed to register" }, { status: 500 });
    }
}

export { POST as default };