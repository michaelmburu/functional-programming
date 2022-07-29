const isObject = x => typeof x === 'object' && x !== null;

export const RecursiveComponent = ({data}) => {

    //Define stopping case, where we stop recursing
    if(!isObject(data)){
        return (
            <li>{data}</li>
        )
    }

    //Start recursion, get entries of object, display list item of keys
    const pairs  = Object.entries(data);

    return (
        <>
            {pairs.map(([key, value]) => 
                <li>
                    {key}:
                    <ul>
                        <RecursiveComponent data={value} />
                    </ul>
                </li>
            )})
        </>
    )

}