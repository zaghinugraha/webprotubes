import { useState } from "react"
import Button from "./Button"
const Navbar = () =>{
    let Links = [{name:"HOME", link:"/"}, {name:"SERVICE", link:"/"}, {name:"ROADMAP", link:"/"}, {name:"COMPETITION", link:"/"}, {name:"ABOUT US", link:"/"}] 
    let [open, setOpen] = useState(false)
    return (
        <div className="shadow-md w-full top-0 left-0 sticky z-10">
            <div className="md:flex items-center justify-between bg-sky-950 py-4 md:px-10 px-7">
                <div className="font-bold text-2xl cursor-pointer flex item center font-[Poppins] text-white">
                    <span className="text-3xl text-white mr-1 pt-2">
                    <ion-icon name="logo-codepen"></ion-icon>
                    </span>
                    <span className="text-3xl text-white mr-1 pt-1.5">
                    CODEParadise
                    </span>
                </div>
                <div onClick={() => setOpen(!open)} className="text-3xl absolute right-8 top-6 cursor-pointer text-white md:hidden">
                <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                </div>
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-sky-950 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in-out ${open ? 'top-19 opacity-100' : 'top[-490px]'} md:opacity-100 opacity-0`}>
                    {
                        Links.map((Link) => (
                            <li key={Link.name} className="md:ml-8 text-xl md:my-0 my-7">
                                <a href={Link.link} className="text-white hover:text-gray-400 duration-500">{Link.name}</a>
                            </li>
                        ))
                    }
                    <Button>GET STARTED</Button>
                </ul>
            </div>
        </div>
    )
}

export default Navbar