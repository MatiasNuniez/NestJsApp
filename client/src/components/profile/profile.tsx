import { SafeAreaView } from "react-native-safe-area-context"
import { Image } from "react-native"
import { useState, useEffect } from "react"
import { ProfileUserComp } from "./profileUser"
import AsyncStorage from "@react-native-async-storage/async-storage"


export const Profile = ({ navigation }) => {

    const [token, setToken] = useState<string>('')

    const loadToken = async () => {
        try {
            const storedToken = await AsyncStorage.getItem('token');
            if (storedToken) {
                setToken(storedToken);
            }
        } catch (error) {
            console.error('Failed to load the token:', error);
        }
    };

    useEffect(() => {
        loadToken();
        if (token === '') {
            navigation.navigate('Login')
        }
    }, [token])

    const [data, setData] = useState({
        name: 'John Doe',
        phone: '123-456-7890',
        email: 'john.doe@example.com',
        role: 'User',
        password: '',
        status: true
    })

    return (

        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1077/1077114.png' }} style={{ width: 50, height: 50 }} />
            <ProfileUserComp data={data} />
        </SafeAreaView>

    )
}