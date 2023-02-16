import React, {useEffect} from "react"
import { Text } from 'react-native'

const Header = props => {

  useEffect

  const headerStyle = {
    padding: "20px 0",
    lineHeight: "1.5em",
  }

  
  return (
    <header style={headerStyle}>
      <h1
        style={{
          fontSize: "6rem",
          fontWeight: "600",
          marginBottom: "2rem",
          lineHeight: "0.5em",
          color: "#00ffc8",
          textTransform: "lowercase",
          textAlign: "center",
        }}
      >
      Cookies:
      <Text
        style={{
          fontSize: "6rem",
          fontWeight: "600",
          marginBottom: "2rem",
          lineHeight: "0.5em",
          color: "#00ffc8",
          textTransform: "lowercase",
          textAlign: "center",
        }}
      >
        {cC}
        
      </Text>
      
      </h1>
    </header>
  )
}

export default Header