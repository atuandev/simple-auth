import Header from './_components/header'

export default function AuthLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className='h-full bg-neutral-200'>
      <Header />
      <main className='h-auto bg-neutral-200 flex justify-center pt-24 pb-10'>
        {children}
      </main>
    </div>
  )
}
