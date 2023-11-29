import Header from '@/components/Header'
import Navbar from '@/components/Navbar/Navbar'

export default function MainLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col w-screen h-screen">
      <Header />
      <div className="flex w-screen h-screen">
        <Navbar />
        {children}
      </div>
    </div>
  )
}
