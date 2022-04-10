import React, {useState} from "react";
import {View,StyleSheet} from "react-native";
import { Button } from "react-native-elements";




const ComponentButton = (props: { title: string, main: boolean})=>{

    return(
            <Button
                containerStyle={styles.elementsContainer}
                title={props.title}
                buttonStyle={
                    props.main?styles.mainButton:styles.secundaryButton
                }
            />
    );
    
}

const styles = StyleSheet.create({
  
    elementsContainer:{
        padding:10,
        width:'100%'
    },

    mainButton:{
        backgroundColor:'#D3455B'
    },

    secundaryButton:{
        borderColor:'#EEBCC3',
        borderStyle:'solid',
        borderWidth:2,
        borderRadius:5
    },

  })
export default ComponentButton;


