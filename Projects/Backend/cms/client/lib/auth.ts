import { PrismaAdapter } from "@auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import { prisma } from "@/lib/prisma";

const authOptions = {
    adapter: PrismaAdapter(prisma),
    session: {
        strategy: "jwt"
    },
    pages: {
        signIn: "/sign-in"
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        })
    ],
    callbacks: {
        // For jwt create and update, this callback runs
        async jwt({ token, user }) {
            // Check User exist in the DB :-

            if (user) {
                const dbUser = await prisma.user.findUnique({
                    where: { email: user.email },
                    select: { id: true, name: true, email: true, username: true, role: true, image: true }
                })
                // User Exist :-
                if (dbUser) {
                    token.id = dbUser.id;
                    token.name = dbUser.name;
                    token.email = dbUser.email;
                    token.username = dbUser.username;
                    token.image = dbUser.image;
                    token.role = dbUser.role;
                } else { //Else to create a new user 
                    const newUser = await prisma.user.create({
                        data: {
                            email: user.email,
                            role: "user",
                            name:user.name,
                            image:user.image
                        }
                    });
                    token.id = newUser.id
                }
            }
            return token;
        },
        // For Session :-
        async session({ session, token }) {
            // If token exist :-
            if(token){
                session.user.id = token.id;
                session.user.name = token.name;
                session.user.username = token.username;
                session.user.email = token.email;
                session.user.image = token.image;
                session.user.role = token.role;
            }
            return session;
        },
        redirect(){
            return "/dashboard";
        }
    }
}

export default authOptions;