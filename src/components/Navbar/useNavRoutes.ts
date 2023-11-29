'use client'

import HomeIcon from '@/assets/home.svg'
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
    HOME: {
      text: '홈',
      path: '/',
      icon: HomeIcon
    },
    ABOUT: {
      text: '소개',
      path: '/About',
      icon: AboutIcon
    },
    TECH: {
      text: '기술',
      path: '/Tech',
      icon: TechIcon
    },
    LIFE: {
      text: '일상',
      path: '/Life',
      icon: LifeIcon
    }
  } as const

  return NAV_ROUTES
}
