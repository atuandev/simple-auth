'use server'

import { getUserById } from '@/data/user'
import { currentUser } from '@/lib/auth'
import { db } from '@/lib/db'
import { ProfileSchema } from '@/schemas'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'

export const profile = async (values: z.infer<typeof ProfileSchema>) => {
  const user = await currentUser()

  if (!user || !user.id) {
    return { error: 'Unauthorized!' }
  }

  const dbUser = await getUserById(user.id)

  if (!dbUser) {
    return { error: 'Unauthorized!' }
  }

  await db.user.update({
    where: { id: dbUser.id },
    data: {
      name: values.name,
      email: values.email,
      role: values.role
    }
  })

  revalidatePath('/profile')
  return { success: 'Settings Updated!' }
}
