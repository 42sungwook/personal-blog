'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import type { NavRoute } from './useNavRoutes'

export default function NavItem({ route }: { route: NavRoute }) {
  const pathname = usePathname()
  const { theme } = useTheme()

  const isFocused =
    route.path === '/' ? pathname === '/' : pathname.startsWith(route.path)
  const iconColor = isFocused
    ? '#00838f'
    : theme === 'light'
      ? 'black'
      : 'white'
  const Icon = route.icon

  return (
    <ul className="flex justify-center items-center w-12 py-1 rounded-sm">
      <Link href={route.path}>
        <div className="flex flex-col justify-center items-center">
          <Icon
            width={30}
            height={30}
            fill={iconColor}
          />
        </div>
      </Link>
    </ul>
  )
}
