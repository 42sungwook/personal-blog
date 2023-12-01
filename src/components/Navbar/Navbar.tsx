'use client'

import NavItem from '@/components/Navbar/NavItem'
import { useNavRoutes } from './useNavRoutes'

export default function Navbar() {
  const NAV_ROUTES = useNavRoutes()
  const isProfileOpen = localStorage.getItem('nav') === 'true'

  return (
    <>
      <div className="flex justify-center items-center p-2 text-white">
        <NavItem route={NAV_ROUTES.ABOUT} />
        <NavItem route={NAV_ROUTES.TECH} />
        <NavItem route={NAV_ROUTES.LIFE} />
      </div>
    </>
  )
}
