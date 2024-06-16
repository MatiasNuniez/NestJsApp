import { View, TextInput, Text, Pressable, TouchableOpacity, Image, Alert } from "react-native";
import { loginStyles } from "../../styles/styles";
import { useState } from "react";

export const Login: React.FC = () => {

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const login = async () => {

        if (email !== '' && password !== '') {
            try {
                const res = await fetch('http://10.0.2.2:3000/auth/login', {
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
        }else{
            Alert.alert('Por favor ingrese email y contraseña');
            return;
        }
};

    return (

        <View style={loginStyles.container}>

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

                <TouchableOpacity onPress={login}>
                    <Text>¿No tienes una cuenta? Registrate <Text style={loginStyles.forgotPassword}>aqui</Text></Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}