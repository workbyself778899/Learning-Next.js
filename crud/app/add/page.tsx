export default function Add(){
    
    return(
        <div className="flex items-center justify-center h-[60vh]">
            
            <form className="w-[50vw] border justify-center p-12">
                <input type="text" placeholder="Title" className="border p-2  w-[40vw]" /> <br />
                <textarea name="message" placeholder="Message"  className="border p-2 w-[40vw] mt-9" ></textarea> <br />
                <button  className="border bg-amber-400 text-white p-2 px-9 mt-9">Add</button>
            </form>

        </div>
    )
}