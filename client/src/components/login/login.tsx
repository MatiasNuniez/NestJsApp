import { View, TextInput, Text, Pressable, TouchableOpacity, Image, Alert } from "react-native";
import { loginStyles } from "../../styles/styles";
import { useState } from "react";
import { EXPO_PUBLIC_API_URL } from "../../utils/enviroment";
import { SafeAreaView } from "react-native-safe-area-context";
import { LoginProps } from "../../../App";

export const Login = ({ navigation }: LoginProps) => {

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const login = async () => {

        if (email !== '' && password !== '') {
            try {
                const res = await fetch(`${EXPO_PUBLIC_API_URL}auth/login`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email, password })
                });
                const data = await res.json();
                console.log(data);
                Alert.alert('Inicio de sesion exitoso');
            } catch (error) {
                console.log('Error al iniciar sesión:', error);
                Alert.alert('Error', 'Hubo un problema al iniciar sesión');
            }
        } else {
            Alert.alert('Por favor ingrese email y contraseña');
            return;
        }
    };

    return (

        <SafeAreaView style={loginStyles.container}>

            <View style={loginStyles.loginContainer}>

                <Image source={require('../../../assets/doctor.jpg')} style={{ width: 200, height: 200 }} />

                <View style={{ width: '100%', alignItems: 'center', gap: 20 }}>
                    <TextInput style={loginStyles.inputLogin} placeholder="Email" value={email} onChangeText={setEmail} textContentType="emailAddress" />
                    <TextInput secureTextEntry={true} style={loginStyles.inputLogin} placeholder="Contraseña" value={password} onChangeText={setPassword} textContentType="password" />
                    <TouchableOpacity onPress={login}>
                        <Text style={loginStyles.forgotPassword}>¿Olvidaste tu contraseña?</Text>
                    </TouchableOpacity>
                </View>

                <Pressable onPress={login} style={loginStyles.buttonInput}>
                    <Text style={loginStyles.textButton}>Login</Text>
                </Pressable>

                <TouchableOpacity onPress={() => navigation.navigate("RegisterOption")}>
                    <Text>¿No tienes una cuenta? Registrate <Text style={loginStyles.forgotPassword}>aqui</Text></Text>
                </TouchableOpacity>

            </View>

        </SafeAreaView>
    )
}