'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Navbar() {
  const pathname = usePathname()

  return (
    <div className='space-x-4'>
      <Button asChild variant={pathname === '/dashboard' ? 'default' : 'ghost'}>
        <Link href='/dashboard'>Dashboard</Link>
      </Button>
      <Button asChild variant={pathname === '/profile' ? 'default' : 'ghost'}>
        <Link href='/profile'>Profile</Link>
      </Button>
    </div>
  )
}
