import { Navbar } from "flowbite-react"
import { NavbarCollapse } from "flowbite-react/lib/esm/components/Navbar/NavbarCollapse"
import { NavbarLink } from "flowbite-react/lib/esm/components/Navbar/NavbarLink"
import { NavbarToggle } from "flowbite-react/lib/esm/components/Navbar/NavbarToggle"
import { NavLink } from "react-router-dom"

export default function NavbarMenu() {
  return (
    <Navbar fluid={true} rounded={true} className="md:hidden fixed max-w-fit bg-transparent z-20">
      <NavbarToggle />
      <NavbarCollapse className="bg-white">
        <NavbarLink active={true}>
          <NavLink to={"/"}>Home</NavLink>
        </NavbarLink>
        <NavbarLink>
          <NavLink to={"/about"}>About</NavLink>
        </NavbarLink>
        <NavbarLink>
          <NavLink to={"/projects"}>Project</NavLink>
        </NavbarLink>
        <NavbarLink>
          <NavLink to={"/contacts"}>Contact</NavLink>
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  )
}
