import { currentUser } from '@/lib/auth'
import LogoutButton from './logout-button'

export default async function ButtonUser() {
  const user = await currentUser()

  console.log(user);

  return (
    <div className='flex items-center gap-4'>
      <p className='py-1 px-2 font-semibold bg-slate-200 rounded-sm'>
        {user?.name}
      </p>
      <LogoutButton>Log out</LogoutButton>
    </div>
  )
}
