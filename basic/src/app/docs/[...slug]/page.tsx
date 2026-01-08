// Learing the catch all segment in next js
// Catch all segment is just like dynamic route but it can take multiple values in the url and store them in an array
// For example: /docs/class10/math  => ['class10', 'math']
// For example: /docs/class10/math/extra => ['class10', 'math', 'extra']

export default async function School({params,}: { params: Promise <{slug: string[]}>})
 {
    const slug = (await params).slug
    const length = slug.length
    if(length == 2 ){
        return(
            <div className="text-center mt-10">
                <h1 className="font-bold">
                    You are in class {slug[0]} and in subject {slug[1]}
                </h1>
            </div>
        )
    }
    return(
        <div className="">
            Hello, The length of slug is {length}
            <br />
        </div>
    )
 }
