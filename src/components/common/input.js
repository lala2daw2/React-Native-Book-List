import React, {Component} from 'react';
import {Text , View , StyleSheet , TextInput} from 'react-native';

const Input = ({text,inputPlaceholder,onChangeText,value,secureEntry})=>{
  const {inputWrapper,textStyle,inputStyle}=styles;
  return(
    <View style={inputWrapper}>
        <Text style={textStyle}>{text}</Text>
        <TextInput  style={inputStyle}
                  placeholder={inputPlaceholder}
                  onChangeText={onChangeText}
                  value={value}
                  secureTextEntry={secureEntry}
        />
    </View>
  )
}
const styles=StyleSheet.create({
  inputWrapper:{
      flexDirection:'row',
      height:50,
      width:'auto',
      borderColor:'#E5E5E8',
      borderBottomWidth:1,
      alignItems:'center'
  },
  textStyle:{
    fontSize:17,
    flexGrow:1,
    paddingLeft:20
  },
  inputStyle:{
    fontSize:17,
    flexGrow:2
  }
})

export {Input}
