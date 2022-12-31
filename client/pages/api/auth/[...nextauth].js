import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import {googleClient,googleSecrect} from "../../../config/auth.config"

export default NextAuth({
    providers:[
        //Google Provider
        GoogleProvider({
            clientId : googleClient,
            clientSecret : googleSecrect
        })
    ]
})