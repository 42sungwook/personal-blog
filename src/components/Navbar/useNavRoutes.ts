'use client'

import AboutIcon from '@/assets/person.svg'
import TechIcon from '@/assets/computer.svg'
import LifeIcon from '@/assets/nightlife.svg'

export type NavRoute = {
  text: string
  path: string
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
}

export const useNavRoutes = () => {
  const NAV_ROUTES: { [name: string]: NavRoute } = {
    ABOUT: {
      text: 'About',
      path: '/About',
      icon: AboutIcon
    },
    TECH: {
      text: 'Tech',
      path: '/Tech',
      icon: TechIcon
    },
    LIFE: {
      text: 'Life',
      path: '/Life',
      icon: LifeIcon
    }
  } as const

  return NAV_ROUTES
}
