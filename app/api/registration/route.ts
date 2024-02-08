import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

type User = {
    name: string;
    NickName: string;
    email: string;
    password: string;
};

// Import the Psubmit function

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
            const data: User = req.body;
            console.log(data)

            // Return a success response
            return NextResponse.json({ message: "User registered" }, { status: 201 });
        } catch (error) {
            // Return an error response
            return NextResponse.json({ message: "Failed to register" }, { status: 500 });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}