'use client'

import { GitHubLogoIcon } from '@radix-ui/react-icons'

export default function Footer() {
  return (
    <div className='absolute bottom-0 w-full flex justify-center py-3 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <nav className='w-[1200px] h-full px-4 flex items-center justify-between gap-8 text-foreground z-50'>
        <a
          href='https://github.com/atuandev'
          target='_blank'
          className='flex items-center gap-2'
        >
          <GitHubLogoIcon className='size-6' />
          @atuandev
        </a>
      </nav>
    </div>
  )
}
