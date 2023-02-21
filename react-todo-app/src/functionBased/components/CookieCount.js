import React from "react"
import { Text } from 'react-native'

const CookieCount = props => {

  
  const headerStyle = {
    padding: "20px 0",
    lineHeight: "1.5em",
  }

  
  return (
    <header style={headerStyle}>
      <Text
        style={{
          fontSize: "6rem",
          fontWeight: "600",
          marginBottom: "2rem",
          marginLeft: 220,
          lineHeight: "0.5em",
          color: "#00ffc8",
          class: "center",
          textTransform: "lowercase",
          textAlign: "center",
        }}
      >
        {props.cC}
      </Text>
    </header>
  )
}

export default CookieCount