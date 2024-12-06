import { useState } from "react";

function UseState(){
    const [inputvalue,setInputvalue]=useState('')
    return(
        <div className="input">
<input type="text" onChange={handlechnage} value={inputvalue} placeholder="write a message"/>
        </div>
    )
}
export default UseState;