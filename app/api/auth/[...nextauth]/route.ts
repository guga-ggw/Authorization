import { connectMongoDB } from "@/lib/mongodb"
import User from "@/moduls/user"
import { useAppDispatch } from "@/store/hooks"
import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"


export const authOptions = {
    pages: {
        signIn: "login"
    },
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {},
            async authorize(credentials : any) {
                const { email, password } = credentials;
                await connectMongoDB();
                const user = await User.findOne({ email });
                if (user) {
                    let typ
                    if (user.password === password) {
                        typ = user
                    } else {
                        throw new Error('wrong password')
                    }
                    return typ
                } else {
                    return null; 
                }
            } 
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }