'use client'

import { forwardRef, useState } from 'react'
import { PiEyeBold, PiEyeClosed } from 'react-icons/pi'
import { InputProps } from '@/components/ui/input'
import { cn } from '@/lib/utils'

const PasswordInput = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false)
    const togglePasswordVisibility = () => setShowPassword(!showPassword)

    return (
      <div className='relative'>
        <input
          type={showPassword ? 'text' : 'password'}
          className={cn(
            'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
            className
          )}
          ref={ref}
          {...props}
        />
        <div className='absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3 text-gray-400'>
          {showPassword ? (
            <PiEyeBold className='h-4 w-4' onClick={togglePasswordVisibility} />
          ) : (
            <PiEyeClosed
              className='h-4 w-4'
              onClick={togglePasswordVisibility}
            />
          )}
        </div>
      </div>
    )
  }
)
PasswordInput.displayName = 'PasswordInput'

export { PasswordInput }
