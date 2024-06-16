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
        height: '60%'
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
        justifyContent:'center'
    },
    text:{
        fontWeight:'bold',
        fontSize:25
    },
    selectContainer:{
        height: '50%',
        justifyContent:'space-between',
        marginTop:60
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
        textAlign:'center',
        width:'70%',
        height:'40%',
        gap:15,
    },
    inputText:{
        backgroundColor:colors.verdeInput,
        padding:10,
        borderRadius:10,
        fontWeight:'bold'
    },
    button:{
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
