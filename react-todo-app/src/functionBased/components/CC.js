import React from "react"
import MyImage from "./Cookie.png"

const TodoContainer = props => {
  
        return (
          <ul>
            <button img src={MyImage} onClick={() => props.updateCookieClicker}>Cookie</button>
          </ul>
        )
      
  
}
export default TodoContainer