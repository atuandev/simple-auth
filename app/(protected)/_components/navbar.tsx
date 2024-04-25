'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import ButtonUser from '@/components/auth/button-user'

export default function Navbar() {
  const pathname = usePathname()

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

        <ButtonUser />
      </nav>
    </div>
  )
}
