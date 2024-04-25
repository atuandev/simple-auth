import Header from './_components/header'

export default function AuthLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className='h-full'>
      <Header />
      <main className='h-full flex items-center justify-center bg-neutral-200 pt-20'>
        {children}
      </main>
    </div>
  )
}
