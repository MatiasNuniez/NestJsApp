import { View, TextInput, Text, Pressable, TouchableOpacity, Image } from "react-native";
import { loginStyles } from "../styles/styles";

export const Login = () => {


    const login = () => {
        console.log('Login');
    }


    return (

        <View style={loginStyles.container}>

            <View style={loginStyles.loginContainer}>

            <Image source={require('../../assets/doctor.jpg')} style={{ width: 200, height: 200 }} />

            <View style={{ width: '100%', alignItems: 'center', gap: 20 }}>
                <TextInput style={loginStyles.inputLogin} placeholder="Email" />
                <TextInput secureTextEntry={true} style={loginStyles.inputLogin} placeholder="Contraseña" />
                <TouchableOpacity onPress={login}>
                    <Text style={loginStyles.forgotPassword}>¿Olvidaste tu contraseña?</Text>
                </TouchableOpacity>
            </View>

            <Pressable onPress={login} style={loginStyles.buttonInput}>
                <Text style={loginStyles.textButton}>Login</Text>
            </Pressable>

            <TouchableOpacity onPress={login}>
                <Text>¿No tienes una cuenta? Registrate <Text style={loginStyles.forgotPassword}>aqui</Text></Text>
            </TouchableOpacity>

        </View>

        </View>
    )
}