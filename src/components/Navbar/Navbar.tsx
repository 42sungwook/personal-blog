'use client'

import NavItem from '@/components/Navbar/NavItem'
import { useNavRoutes } from './useNavRoutes'

export default function Navbar() {
  const NAV_ROUTES = useNavRoutes()

  return (
    <div className="flex flex-col justify-center items-center space-y-3 w-20 h-full p-2 bg-black text-white">
      <NavItem route={NAV_ROUTES.HOME} />
      <NavItem route={NAV_ROUTES.ABOUT} />
      <NavItem route={NAV_ROUTES.TECH} />
      <NavItem route={NAV_ROUTES.LIFE} />
    </div>
  )
}
