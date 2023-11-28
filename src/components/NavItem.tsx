'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function NavItem({ route }: { route: string }) {
  const pathname = usePathname()

  const isFocused = pathname.startsWith(route)

  return (
    <ul
      className={`flex justify-center items-center ${
        isFocused ? 'bg-grey' : ''
      }`}
    >
      <Link href={route}>{route}</Link>
    </ul>
  )
}
