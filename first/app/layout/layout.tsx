export default function JustLayout({children}:{children:React.ReactNode}){

    return(
        <div> 
            <h1 className="text-2xl">Just Top Section</h1>
            <div>{children}</div>
        </div>
    )
}