'use client'

import { HomeIcon } from '@radix-ui/react-icons'
import { Button } from '../../../components/ui/button'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className='fixed w-full flex justify-center py-4 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <nav className='w-[1200px] h-full px-4 flex items-center justify-between gap-8 text-foreground z-50'>
        <div className='flex items-center gap-2 px-3 py-2 bg-black/90 text-white rounded-md'>
          <HomeIcon />
          <Link href='/'>Home</Link>
        </div>
        <div className='space-x-4'>
          <Button asChild variant='outline'>
            <Link href='/auth/login'>Login</Link>
          </Button>
          <Button asChild variant='default'>
            <Link href='/auth/register'>Register</Link>
          </Button>
        </div>
      </nav>
    </div>
  )
}
