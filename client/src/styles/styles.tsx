import { StyleSheet } from "react-native"
import { colors } from "../utils/colors"



export const loginStyles = StyleSheet.create({

    container: {
        width: '100%', 
        height: '100%', 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    forgotPassword: {
        marginTop: 20,
        color: 'blue',
        textAlign: 'center',
        justifyContent: 'center'
    },

    loginContainer: {
        justifyContent: 'space-between',
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center',
        height: '80%'
    },

    inputLogin: {
        backgroundColor: colors.verdeInput,
        width: '80%',
        borderRadius: 10,
        height: 35,
        padding: 5,
        fontWeight:'bold'
    },
    buttonInput: {
        backgroundColor: colors.verdeBoton,
        height: 45,
        borderRadius: 10,
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textButton: {
        fontWeight: 'bold'
    }

})

export const preRegisterStyles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        fontWeight:'bold',
        fontSize:25,
        textAlign:'center'
    },
    selectContainer:{
        textAlign:'center',
        height: '80%',
        width:'80%',
        justifyContent:'space-between',
    },
    select:{
        padding:30,
        backgroundColor:colors.verdeInput,
        borderRadius:12,
        alignItems:'center'
    },
    selectText:{
        fontWeight:'bold',
        fontSize:20
    }
})

export const stylesRegister = StyleSheet.create({
    content:{
        justifyContent:'center',
        width:'100%',
        height:'80%',
        gap:15,
    },
    inputText:{
        backgroundColor:colors.verdeInput,
        padding:10,
        borderRadius:10,
        fontWeight:'bold'
    },
    button:{
        alignSelf:'center',
        backgroundColor:colors.verdeBoton,
        width:'70%',
        padding:25,
        borderRadius:10,
        alignItems:'center',
        marginTop:55
    },
    textButton:{
        fontWeight:'bold'
    }
})

export const styleProfile = StyleSheet.create({
    container:{
        justifyContent:'space-between',
        height:'30%'
    },
    text:{
        color:colors.verdeBoton,
        fontWeight:'bold'
    }
})

export const stylesItem = StyleSheet.create({
    item: {
      backgroundColor: colors.verdeInput,
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      borderRadius:15
    },
    text:{
        fontWeight:'bold'
    }
  });

export const styleAppo = StyleSheet.create({
    container:{
        flex:1
    },
    press:{
        padding:20,
        backgroundColor:colors.verdeBoton,
        borderRadius:10,
        marginBottom:10
    }
})