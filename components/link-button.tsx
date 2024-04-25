'use client'

import Link from 'next/link'
import { Button } from './ui/button'

interface LinkButtonProps {
  label: string
  href: string
  className?: string
}

export default function LinkButton({ label, href, className }: LinkButtonProps) {
  return (
    <Button variant='link' className={className} asChild>
      <Link href={href}>{label}</Link>
    </Button>
  )
}
