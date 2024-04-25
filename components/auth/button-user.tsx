import LogoutButton from './logout-button'
import useCurrentUser from '@/hooks/use-current-user'

export default function ButtonUser() {
  const user = useCurrentUser()

  return (
    <div className='flex items-center gap-4'>
      <p className='py-1 px-2 font-semibold bg-slate-200 rounded-sm'>
        {user?.name}
      </p>
      <LogoutButton>Log out</LogoutButton>
    </div>
  )
}
