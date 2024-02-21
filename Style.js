import { StyleSheet, Platform } from "react-native";

export const StyleLogin = StyleSheet.create ({
   
    centro: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },
      imagem: {
        top: -25,
        width: 200,
        height: 120,
        resizeMode:  'contain',
      },
      text: {
        fontFamily: 'sans-serif',
        fontSize: 25,
        fontWeight: 'normal',
      },
      input: {
        height: 40,
        margin: 15,
        borderRadius:5,
        shadowRadius:1,
        borderWidth: 1,
        padding: 10,
        textAlign: 'center'
      },
      input2: {
        height:40,
        margin: 15,
        shadowRadius: 1,
        marginTop:0,
        borderRadius:5,
        marginBottom: 50,
        borderWidth: 1,
        padding: 10,
        textAlign: 'center'
      },
      quadrado: {
        paddingVertical: 45,
        paddingTop:10,
        paddingHorizontal: 40,
        backgroundColor:'#FFFFFF',
        shadowColor: 'black',
        borderRadius:5,
        width:250,
        alignItems:'center',
        shadowRadius: 5,

        ...Platform.select({
          android: {
            elevation: 4,
          },
          ios: {
            shadowColor: 'black',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 2,
          },
        }),
      },
      button: {
        marginTop:10,
        borderWidth:1,
        backgroundColor:'#F1F1F1',
        margin:3,
        borderRadius:5,
        padding:10,
        alignItems:'center',
        width: 120,
      
      }
});