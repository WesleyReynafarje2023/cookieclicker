import React, {useEffect}from "react"
import { Text } from 'react-native'

const cookies = 0

const Header = props => {
  const headerStyle = {
    padding: "20px 0",
    lineHeight: "1.5em",
  }
  
  useEffect(() => {
    cookies = props.count;
  });

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
        {cookies}
        
      </Text>
      
      </h1>
    </header>
  )
}

export default Header