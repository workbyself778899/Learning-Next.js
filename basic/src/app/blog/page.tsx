"use client"

import { notFound } from "next/navigation";



export default function BlogPage(){
  notFound();
  
    return(
        <div>
            <h1 className="text-3xl font-bold "> Blog Page</h1> 
        </div>
    )
}