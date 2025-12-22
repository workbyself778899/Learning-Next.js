export default function LoginLayout({children,}:{children:React.ReactNode}){
    return(
        <div className="bg-red-300">
            <h1 className="bg-black text-white">Login Layout</h1>
            <div className="">
                {children}
            </div>
        </div>
    )
}