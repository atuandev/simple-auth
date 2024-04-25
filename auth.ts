import { PrismaAdapter } from '@auth/prisma-adapter'
import NextAuth from 'next-auth'

import authConfig from '@/auth.config'
import { db } from '@/lib/db'
import { UserRole } from '@prisma/client'
import { getUserById } from '@/data/user'

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut
} = NextAuth({
  pages: {
    signIn: '/auth/login',
    error: '/auth/error'
  },
  callbacks: {
    async signIn({ user }) {
      if (!user || !user.id) return false

      const existingUser = await getUserById(user.id)

      if (!existingUser) return false

      return true
    },
    async session({ session, token }) {
      if (session.user && token.sub) {
        session.user.id = token.sub
      }

      if (session.user && token.role) {
        session.user.role = token.role as UserRole
      }

      if (session.user && token.email) {
        session.user.email = token.email
      }

      if (session.user) {
        session.user.name = token.name
      }

      return session
    },
    async jwt({ token }) {
      if (!token.sub) return token

      const existingUser = await getUserById(token.sub)

      if (!existingUser) return token

      token.name = existingUser.name
      token.email = existingUser.email
      token.role = existingUser.role

      return token
    }
  },
  secret:
    process.env.AUTH_SECRET || 'xnsehngnK+3HQsXpScczVxy3E6Y3GtjExLSmxntdETk+',
  adapter: PrismaAdapter(db),
  session: { strategy: 'jwt' },
  ...authConfig
})
