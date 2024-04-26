import { currentUser } from '@/lib/auth'
import LogoutButton from './logout-button'
import { LogOutIcon } from 'lucide-react'

export default async function ButtonUser() {
  const user = await currentUser()

  return (
    <div className='flex items-center gap-4'>
      <p className='max-w-[100px] py-1 px-2 text-sm font-semibold truncate bg-slate-200 rounded-sm'>
        {user?.name}
      </p>
      <LogoutButton>
        <LogOutIcon className='size-6' />
      </LogoutButton>
    </div>
  )
}
