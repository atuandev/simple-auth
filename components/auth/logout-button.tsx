import { logout } from '@/actions/logout'
import { Button } from '../ui/button'

interface LogoutButtonProps {
  children?: React.ReactNode
}

export default function LogoutButton({ children }: LogoutButtonProps) {
  return (
    <form
      action={async () => {
        'use server'
        await logout()
      }}
    >
      <Button type='submit' variant='link' className='p-0'>
        {children}
      </Button>
    </form>
  )
}
