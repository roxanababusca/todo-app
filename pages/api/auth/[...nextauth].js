import NextAuth from 'next-auth';
import EmailProvider from 'next-auth/providers/email';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import clientPromise from '../../../lib/mongodb';

export const authOptions = {
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM
    }),
  ],
  pages: {
    signIn: '/signin',
    verifyRequest: '/verifyrequest'
  },
  adapter: MongoDBAdapter(clientPromise),
};

export default NextAuth(authOptions);