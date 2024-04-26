import Footer from './_components/footer'
import Navbar from './_components/navbar'

export default function MarketingLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className='h-screen'>
      <Navbar />
      <main className='h-[calc(100%-40px)] bg-neutral-200'>{children}</main>
      <Footer />
    </div>
  )
}
