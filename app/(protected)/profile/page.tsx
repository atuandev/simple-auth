import { currentUser } from '@/lib/auth'
import ProfileCard from '../_components/profile-card'

export default async function ProfilePage() {
  const user = await currentUser() as any

  return <ProfileCard user={user} />
}
