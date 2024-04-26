import ButtonUser from '@/components/auth/button-user'
import Navbar from './navbar'

export default function Header() {
  return (
    <div className='fixed w-full flex items-center justify-center py-4 px-2 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50'>
      <nav className='md:w-[1200px] h-full flex items-center justify-between gap-8 text-foreground z-50'>
        <Navbar />
        <ButtonUser />
      </nav>
    </div>
  )
}
