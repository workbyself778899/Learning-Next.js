import { Metadata } from "next";
import { resolve } from "path";
import { resourceLimits } from "worker_threads";

type Props = {

    params: {productId:String}
}

// This is dynamic Meta data routing 

// We can not use "generateMetadata" and "metadata" object in one file 
export const generateMetadata = async( {params} : Props ) : Promise<Metadata> =>{
    const id = (await params).productId;
    const title = await new Promise( (resolve)=>{
        setTimeout(()=>{
            resolve(`new ${id}`)
        },100)  
    } )
    return{
        title:`Product ${title}`,
    };
};

export default async function Oneproduct( {params}:Props)
    {
    const name = (await params).productId;
    return(
        <div className="">
            Product name = {name}
        </div>
    )
}

