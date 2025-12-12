
export default async function productDetails( {params,}:{params: Promise <{productId:string}>} ){
    const getvalue= (await params).productId  // Takign the value from promise
    return(
        <div>
           
            <h1 className="text-2xl">All product will we render here  </h1>
            <p>Our params is  = {getvalue} </p>
            <p className="font-bold">
                It's the example of Dynamic Route
            </p>
        </div>
    )
}   