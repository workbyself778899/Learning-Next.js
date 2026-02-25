"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Nav(){
    const usePath =usePathname();
    const navLinks=[
        {name:'Home',path:"/"},
        {name:'Login',path:"/login"},
        {name:'Product',path:"/product"}
    ]
    return(
        <div className="text-4xl flex gap-9">
            {navLinks.map((link,id)=>{
                const isActive = usePath === link.path || (usePath.startsWith(link.path) && link.path !== "/" ) ;
                console.log(isActive, "is")
                return (
                <nav className={`${isActive ? "text-blue-500" : "text-red-500" } `} key={id}>
                {id}
                <Link href={link.path}> {link.name} </Link>
            </nav>)
        })}
        </div>
    )
}