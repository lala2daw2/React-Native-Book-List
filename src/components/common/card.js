import React from 'react';
import {StyleSheet,View,Text} from 'react-native';

const Card = (props)=>{
  return(
    <View style={styles.cardWrapper}>
      <Text style={styles.cardTextStyle}>{props.children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
cardWrapper:{
  alignItems:'center',
  height:50,
  justifyContent:'center',
  borderWidth:1,
  borderRadius:2,
  margin:5,
  
  borderColor:'#dddddd'

},
cardTextStyle:{
  fontSize:16,
  fontWeight:'bold',

}
})

export {Card};
