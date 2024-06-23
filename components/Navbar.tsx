import { FaHome } from "react-icons/fa";
import { FloatingNav } from "./ui/floatingNavbar";
import { GoProject } from "react-icons/go";
import { IoMdContact } from "react-icons/io";
import { LuLayoutDashboard } from "react-icons/lu";
import { BiInfoCircle } from "react-icons/bi";

const navItems = [
    {
        name: 'Home',
        link: '/',
        icon: <FaHome />
    },
    {
        name: 'About',
        link: '/about',
        icon: <BiInfoCircle/>
    },
    {
        name: 'Services',
        link: '/service',
        icon: <LuLayoutDashboard />
    },
    {
        name: 'Portfolio',
        link: '/portfolio',
        icon: <GoProject />
    },
    {
        name: 'Contact',
        link: '#contact',
        icon: <IoMdContact />
    },
]

const Navbar = () => {
    return (
        <FloatingNav
            navItems={navItems}
        />
    );
}

export default Navbar;