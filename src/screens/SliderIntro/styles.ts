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
    slide: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    image: {
      width: 300,
      height: 300,
      marginVertical: 32
    },
    text: {
      color: '#283744',
      textAlign: 'justify',
      fontSize:17,
      padding:15,
      marginBottom:100
    },
    title: {
      fontSize: 22,
      color: 'white',
      textAlign: 'center',
    }
  })