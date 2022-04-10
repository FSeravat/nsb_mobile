import React, {useState} from "react";
import {View} from "react-native";
import { Button } from "react-native-elements";



const ComponentButton = (props: { title: string})=>{
    return(
            <Button 
                title={props.title}
            />
    );
    
}

export default ComponentButton;