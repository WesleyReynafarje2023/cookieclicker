import React from "react"
import {
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';




const TodoContainer = props => {
        return (
          <ul>
          <TouchableOpacity 
          onPress = {() => {
            props.uCC()
            }
          }
          >
          
            <Image
              source={{
                uri:
                  'https://cdn.shopify.com/s/files/1/0267/4389/8308/t/30/assets/reviews-cookie.png?v=96532364958996679661675788666',
              }}
              class="center"
              style={styles.buttonImageIconStyle}
            />
          </TouchableOpacity>
          </ul>
        )
      
  
}

const styles = StyleSheet.create({
  buttonImageIconStyle: {
    padding: 10,
    margin: 80,
    marginleft: 100,
    height: 400,
    width: 400,
    resizeMode: 'cover',
    textalign: 'center'
  },
});



export default TodoContainer