import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
      padding:15,
      flexDirection: "row"
    },
    newsContainer: {
      marginLeft: 15,
    },
    newsDescription: {
      fontSize:14,
      maxWidth:'75%',
      maxHeight:75,
      flexWrap:"wrap",
    },
    newsShareContainer: {
      marginTop:10,
      flexDirection:'row'
    },
    newsShareText: {
      fontSize:14,
    }
  })