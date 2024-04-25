export default function AuthLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className='h-full flex items-center justify-center bg-neutral-200'>
      {children}
    </div>
  )
}
