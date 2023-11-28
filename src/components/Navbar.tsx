import NavItem from './NavItem'

export default function Navbar() {
  return (
    <div className="flex flex-col justify-center items-center space-y-3 w-20 h-full bg-black text-white">
      <NavItem route="/About" />
      <NavItem route="/Life" />
      <NavItem route="/Project" />
      <NavItem route="/Tech" />
    </div>
  )
}
