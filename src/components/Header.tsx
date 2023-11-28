import { ThemeSwitcher } from './ThemeSwitcher'
import Logo from './Logo'

export default function Header() {
  return (
    <div className="flex justify-between items-center h-15 w-full py-3 px-5 bg-cyan dark:bg-cyan500">
      <Logo />
      <ThemeSwitcher />
    </div>
  )
}
