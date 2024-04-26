import Footer from './_components/footer'
import Navbar from './_components/navbar'

export default function MarketingLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className='h-full'>
      <Navbar />
      <main className='h-screen flex items-center justify-center bg-neutral-200'>
        {children}
      </main>
      <Footer />
    </div>
  )
}
