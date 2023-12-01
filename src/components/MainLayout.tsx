import Header from '@/components/Header'
import Profile from './Profile'

export default function MainLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col w-screen h-screen">
      <Header />
      <div className="flex w-screen h-screen">
        <Profile />
        {children}
      </div>
    </div>
  )
}
