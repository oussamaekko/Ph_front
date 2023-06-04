import React, { useState } from 'react'
import { FcIdea, FcNoIdea } from "react-icons/fc";

function Course() {
    const [lampOn, setLampOn] = useState(false)
    const handleButtonClick = () => {
            setLampOn(!lampOn)
    }
  return (
    <div>
           {lampOn ?  <FcIdea /> : <FcNoIdea /> }
            <button onClick={handleButtonClick}>Test</button>    
    </div>
  )
}

export default Course