import Header from './_components/header'

export default function AuthLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className='h-full'>
      <Header />
      <main className='h-full bg-neutral-200 flex items-center justify-center pt-28'>
        {children}
      </main>
    </div>
  )
}
