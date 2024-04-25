import { UserRole } from '@prisma/client'
import * as z from 'zod'

export const ProfileSchema = z.object({
  name: z.string().min(1, {
    message: 'Name is required'
  }),
  email: z.string().email({
    message: 'Email is required!'
  }),
  role: z.enum([UserRole.USER, UserRole.ADMIN]),
})

export const LoginSchema = z.object({
  email: z.string().email({
    message: 'Email is required!'
  }),
  password: z.string().min(1, {
    message: 'Password is required'
  }),
  code: z.optional(z.string())
})

export const RegisterSchema = z.object({
  email: z.string().email({
    message: 'Email is required!'
  }),
  password: z.string().min(6, {
    message: 'Minimum password length is 6 characters'
  }),
  name: z.string().min(1, {
    message: 'Name is required'
  })
})
