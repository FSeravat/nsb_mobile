import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight:'bold',
        padding:25
    },

    input:{
        padding:5,
        borderStyle:'solid',
        borderWidth:2,
        borderRadius:5,
        borderColor:'#C4CED6'
    },

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

    fieldTitle:{
        textAlign:'left'
    }
  })