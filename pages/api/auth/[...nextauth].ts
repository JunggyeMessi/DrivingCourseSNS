import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { verifyPassword } from "../../../lib/auth";
import { connectToDatabase } from "../../../lib/db";
import Credentials from "next-auth/providers/credentials";

interface Credentials {
  email: string;
  password: string;
}

interface IUser extends Document {
  email: string;
  password: string;
}

export default NextAuth({
  session: { strategy: "jwt" },
  providers: [
    Credentials({
      id: "credentials",
      name: "credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: { type: "text" },
        password: { type: "text" },
      },
      async authorize(credentials, req) : Promise<any> {
        if (!credentials) return;

        
        const { email, password } = credentials as Credentials;
        console.log(email);
        console.log(password);
        const client = await connectToDatabase();
        
        const usersCollection = client.db("auth-demo").collection("users");
        
        const user = await usersCollection.findOne({
            email: email,
        });
        
        console.log(user);

        if (!user) {
            client.close();
            throw new Error("No user found!");
        }
        
        const isValid = await verifyPassword(password, user.auth);
        
        if (!isValid) {
          client.close();
          throw new Error("Could not log you in!");
        }

        client.close();
        
        return {
            email: user.email
            /* add function to get user */
          }
      },
    }),
  ],
});
