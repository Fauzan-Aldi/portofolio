
import logo from '../assets/logo.png'
import logoLinkedin from '../assets/linkedin.png'
import logogithub from '../assets/github.png'
import logotiktok from '../assets/tiktok.png'
import DarkMode from './DarkMode';
const Menu = [
    {
        id: 1,
        name: "Home",
        link: "/#"
    },
    {
        id: 2,
        name: "About",
        link: "#About"
    },
    {
        id: 3,
        name: "Experience",
        link: "#Experience"
    },
    {
        id: 4,
        name: "Certificate",
        link: "#Certificate"
    },
    {
        id: 5,
        name: "Contact",
        link: "#Contact"
    }
];


function Navbar() {
    return (
        <>
            <div className="shadow-md min-w-full  bg-white dark:bg-gray-900 duration-200">
                <div className="container mx-auto py-3 sm:py-0">
                    <div className="flex justify-between items-center">
                        <div className="flex justify-center items-center gap-4">
                            <a href="https://www.instagram.com/fauzanaldi_0a/?hl=en" target='_blank' className="font-bold text-2xl sm:text-3xl text flex gap-2">
                            <img src={logo} alt="Logo" className="size-6 object-cover dark:bg-white dark:rounded-full " />
                        </a>
                        <a href="#" className="font-bold text-2xl sm:text-3xl text flex gap-2">
                            <img src={logoLinkedin} alt="Logo" className="size-6 dark:bg-white dark:rounded-full " />
                        </a>
                        <a href="#" className="font-bold text-2xl sm:text-3xl text flex gap-2">
                            <img src={logogithub} alt="Logo" className="size-6 object-cover dark:bg-white dark:rounded-full " />
                        </a>
                        <a href="https://www.tiktok.com/@aldi.pentest" target='_blank' className="font-bold text-2xl sm:text-3xl text flex gap-2">
                            <img src={logotiktok} alt="Logo" className="size-6 object-cover dark:bg-white dark:rounded-full " />
                        </a>
                        </div>


                        <div className="flex justify-between items-center gap-8">
                            <div>
                                <DarkMode />
                            </div>
                            <ul className="hidden sm:flex items-center gap-4">
                                {Menu.map((menu) => (
                                    <li key={menu.id}>
                                        <a
                                            href={menu.link}
                                            className="inline-block py-4 px-4 hover:text-primary duration-300"
                                        >
                                            {menu.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>

                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar 