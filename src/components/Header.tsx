import { ThemeSwitcher } from '@/components/ThemeSwitcher'
import Logo from '@/components/Logo'
import Navbar from './Navbar/Navbar'

export default function Header() {
  return (
    <div className="flex justify-between items-center h-16 w-full py-3 px-5 bg-cyan dark:bg-cyan900">
      <div className="flex">
        <Logo />
        <Navbar />
      </div>
      <ThemeSwitcher />
    </div>
  )
}
