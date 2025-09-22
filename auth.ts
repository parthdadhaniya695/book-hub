import NextAuth, { DefaultSession } from "next-auth";
import { prisma } from "./lib/prisma";
import Credentials from 'next-auth/providers/credentials'
import bcrypt from "bcryptjs";

declare module 'next-auth' {
    interface Session {
        user: {
            user_id: number,
            role?: string,
            profile_status?: string | null,
            is_active?: boolean
        } & DefaultSession['user']
    }

    interface User {
        user_id?: number,
        profile_status?: string | null,
        role?: string,
        is_active?: boolean
    }
}

export const { handlers, signIn, signOut, auth }  = NextAuth({
    // The application uses a custom users table and JWT sessions, so no adapter is required.
    debug: true,
    providers: [
        Credentials({
            credentials:{
                email: {},
                password: {}
            },
            authorize: async (credentials) => {

                let user = null 

                user = await prisma.users.findUnique({
                    where: {
                        email: credentials.email as string
                    }
                })

                if (!user) {
                    throw new Error('Invalid credentials')
                } else {
                    
                    if (user.role === 'staff') {
                        const passwordMatch = await bcrypt.compare(
                            credentials.password as string, user.password
                        )

                        if (!passwordMatch) {
                             throw new Error('Invalid credentials')
                        }
                    } else if (user.role === 'member') {

                        if (user.library_card_no !== credentials.password) {
                            throw new Error('Invalid credentials')
                        }
                    }
                }

                return user
            }
        })
    ],
    session: {
        strategy: 'jwt',
        maxAge: 24 * 60 * 60
    },
    callbacks: {
        async jwt({ token, user }) {

            if (user) {
                // Ensure the session carries our numeric user_id consistently.
                token.id = String((user as any).user_id)
                token.email = (user as any).email
                token.name = (user as any).name
                token.role = (user as any).role
                token.profile_status = (user as any).profile_status
                token.is_active = (user as any).is_active
                token.user_id = (user as any).user_id
            }

            return token
        },
        async session({ session, token }) {

            if (session) {
                // Keep id as a string (NextAuth default) and expose numeric user_id separately.
                session.user.id = token.id as string
                session.user.email = token.email as string
                session.user.name = token.name
                session.user.role = token.role as string
                session.user.profile_status = token.profile_status as string
                session.user.is_active = token.is_active as boolean
                session.user.user_id = token.user_id as number
            }

            return session
        }
    },
    pages: {
        signIn: '/auth/signin'
    },
    basePath: '/auth',
    logger: {
        error(code, ...message) {
            console.error(code, message)
        },
        warn(code, ...message) {
            console.warn(code, message)
        },
        debug(code, ...message) {
            console.debug(code, message)
        },
    },
})
