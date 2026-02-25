import { notFound } from "next/navigation"

    
export default async function reviewInfo({params,}: {params: Promise<{productId:string, reviewId:string}>}){
    const {productId, reviewId} = await params 
    if(parseInt(reviewId)>100){
        notFound()
    }
    return(
        <div className="text-center mt-19">
            <h1 className="text-xl font-bold">This is example of "Nexted Dynamic Routing" </h1>
            Here is the Review {reviewId} for product {productId}
            
        </div>
    )
}

