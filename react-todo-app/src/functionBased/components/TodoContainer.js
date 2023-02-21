import React, {useState} from 'react';
import Header from "./Header"
import CookieCount from './CookieCount';

import CC from "./CC"


const TodoContainer = () => {

  const [count, setCount] = useState(0);

  const uCC = () => {
    console.log("clicked!")
    setCount(count + 1);
  }

  return (
    <div className="container">
      <div className="inner">
        <Header/>
        <CookieCount cC = {count}/>
        <CC uCC={uCC}/>

        
      </div>
    </div>
  )
}

export default TodoContainer