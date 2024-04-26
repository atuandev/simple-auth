import Header from './_components/header'

export default function AuthLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className='h-full relative bg-neutral-200 '>
      <Header />
      <main className='h-fit flex items-center justify-center pt-24 pb-10'>
        {children}
      </main>
    </div>
  )
}
