import Header from '@/src/components/Header'
import Navbar from '@/src/components/Navbar'

export default function MainLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col w-full h-full">
      <Header />
      <div className="flex w-screen h-screen">
        <Navbar />
        {children}
      </div>
    </div>
  )
}
