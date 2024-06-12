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
        padding: 5
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
