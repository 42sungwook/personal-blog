'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import type { NavRoute } from './useNavRoutes'

export default function NavItem({ route }: { route: NavRoute }) {
  const pathname = usePathname()

  const isFocused =
    route.path === '/' ? pathname === '/' : pathname.startsWith(route.path)
  const Icon = route.icon

  return (
    <ul
      className={`flex justify-center items-center w-full py-1 rounded-sm ${
        isFocused ? 'bg-grey' : ''
      }`}
    >
      <Link href={route.path}>
        <div className="flex flex-col justify-center items-center">
          <Icon
            width={30}
            height={30}
            fill="white"
          />
          {route.text}
        </div>
      </Link>
    </ul>
  )
}
