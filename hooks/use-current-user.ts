import { useSession } from 'next-auth/react'

export function useCurrentUser() {
  const session = useSession({ required: true })

  return session.data?.user
}
