import { useState } from "react";

function UseState(){
    const [inputvalue,setInputvalue]=useState('')
    const handlechange= (e)=>{
        setInputvalue(e.target.value)
    }
    return(
        <div className="input">
            <h2>value = {inputvalue}</h2>
<input type="text" onChange={handlechange} value={inputvalue} placeholder="write a message"/>
        </div>
    )
}
export default UseState;