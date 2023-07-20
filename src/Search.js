import { useState } from "react";

export const Search=()=>{
    const [search,setSearch]=useState("");
const handleChange=(e)=>{
    let data=e.target.value
    setSearch(data)
    console.log(data,"data")
}
    return(
        <>
        <div>
            <input type="text" placeholder="serch data" onChange={handleChange} value={search}/>
        </div>
        </>
    )
}
export default Search;