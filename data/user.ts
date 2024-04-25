import { db } from '@/lib/db'

export const getUserByEmail = async (email: string) => {
  try {
    return db.user.findUnique({ where: { email } })
  } catch (error) {
    return null
  }
}

export const getUserById = async (id: string) => {
  try {
    return db.user.findUnique({ where: { id } })
  } catch (error) {
    return null
  }
}

// getAllUsers
export const getAllUsers = async () => {
  try {
    return db.user.findMany()
  } catch (error) {
    return null
  }
}