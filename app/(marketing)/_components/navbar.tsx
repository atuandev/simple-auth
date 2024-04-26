'use client'

import { HomeIcon } from 'lucide-react'
import { Button } from '../../../components/ui/button'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className='absolute top-0 w-full flex justify-center py-4 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <nav className='w-[1200px] h-full px-4 flex items-center justify-between gap-8 text-foreground z-50'>
        <Link href='/' className='font-bold'>
          <HomeIcon className='size-6' />
        </Link>
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
