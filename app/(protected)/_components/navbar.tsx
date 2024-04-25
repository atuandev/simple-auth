'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import useCurrentUser from '@/hooks/use-current-user'
import { Button } from '@/components/ui/button'
import LogoutButton from '@/components/auth/logout-button'

export default function Navbar() {
  const pathname = usePathname()
  const user = useCurrentUser()

  return (
    <div className='fixed w-full flex justify-center py-4 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50'>
      <nav className='w-[1200px] h-full px-4 flex items-center justify-between gap-8 text-foreground z-50'>
        <div className='space-x-4'>
          <Button
            asChild
            variant={pathname === '/dashboard' ? 'default' : 'ghost'}
          >
            <Link href='/dashboard'>Dashboard</Link>
          </Button>
          <Button
            asChild
            variant={pathname === '/profile' ? 'default' : 'ghost'}
          >
            <Link href='/profile'>Profile</Link>
          </Button>
        </div>

        {user ? (
          <div className='flex items-center gap-4'>
            <p className='py-1 px-2 font-semibold bg-slate-200 rounded-sm'>
              {user.name}
            </p>
            <LogoutButton>Log out</LogoutButton>
          </div>
        ) : null}
      </nav>
    </div>
  )
}
