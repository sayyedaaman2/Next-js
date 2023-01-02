import NextAuth from 'next-auth';
import GoogleProvider from "next-auth/providers/google";

/**
 * GOOGLE_ID=854406897784-1uj39oaes73vgnudshhpiq1usuph1rgb.apps.googleusercontent.com
GOOGLE_SECRET=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
 */
export default NextAuth({
    providers : [
        // Google Provider
        GoogleProvider({
            clientId: "854406897784-1uj39oaes73vgnudshhpiq1usuph1rgb.apps.googleusercontent.com",
            clientSecret: "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"
        }),
        
    ],
    secret: "XH6bp/TkLvnUkQiPDEZNyHc0CV+VV5RL/n+HdVHoHN0=",
    session: {
        strategy: 'jwt',
    }
})