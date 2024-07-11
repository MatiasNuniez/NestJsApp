import { useState } from "react"
import { Pressable, TextInput, View, Text } from "react-native"
import { stylesRegister } from '../../styles/styles'
import { EXPO_PUBLIC_API_URL } from "../../utils/enviroment"
import { EspecialidadDoctors, userOrDoc } from "./enum/enums"
import { User, Doctor } from "./interfaces/interfacesRegister"
import { Picker } from '@react-native-picker/picker';
import { especialidadesArray } from "../../utils/constans"
import { SafeAreaView } from "react-native-safe-area-context"
import { RegisterProps } from "../../../App"

export const Register = ({ navigation, route}: RegisterProps) => {

    const [userOrDoctor, setUserOrDoctor] = useState<string>(route.params.typeUser)

    const [user, setUser] = useState<User>({
        name: '',
        phone: '',
        email: '',
        password: '',
        role: userOrDoc.user
    })

    const [doctor, setDoctor] = useState<Doctor>({
        name: '',
        phone: '',
        email: '',
        password: '',
        role: userOrDoc.doctor,
        especialidad: EspecialidadDoctors.GENERAL
    })


    const updateUserField = (field: keyof User, value: string) => {
        setUser(prevUser => ({
            ...prevUser,
            [field]: value
        }));
    };

    const updateDoctorField = (field: keyof Doctor, value: string) => {
        setDoctor(prevDoctor => ({
            ...prevDoctor,
            [field]: value
        }));
    };

    const register = async () => {
        try {
            const res = await fetch(`${EXPO_PUBLIC_API_URL}auth/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: userOrDoctor === 'user' ? JSON.stringify(user) :
                    JSON.stringify(doctor)
            })

        } catch (error) {
            console.log(error);
        }
    }


    return (
            <SafeAreaView style={stylesRegister.content}>
                {userOrDoctor === 'user' ?
                    <>
                        <TextInput style={stylesRegister.inputText} placeholder="name" onChangeText={(value) => updateUserField('name', value)} value={user.name} />
                        <TextInput style={stylesRegister.inputText} placeholder="phone" onChangeText={(value) => updateUserField('phone', value)} value={user.phone} />
                        <TextInput style={stylesRegister.inputText} placeholder="email" onChangeText={(value) => updateUserField('email', value)} value={user.email} />
                        <TextInput style={stylesRegister.inputText} placeholder="password" onChangeText={(value) => updateUserField('password', value)} value={user.password} />
                    </>

                    :
                    <>
                        <TextInput style={stylesRegister.inputText} placeholder="name" onChangeText={(value) => updateDoctorField('name', value)} value={doctor.name} />
                        <TextInput style={stylesRegister.inputText} placeholder="phone" onChangeText={(value) => updateDoctorField('phone', value)} value={doctor.phone} />
                        <TextInput style={stylesRegister.inputText} placeholder="email" onChangeText={(value) => updateDoctorField('email', value)} value={doctor.email} />
                        <TextInput style={stylesRegister.inputText} placeholder="password" onChangeText={(value) => updateDoctorField('password', value)} value={doctor.password} />
                        <Picker style={stylesRegister.inputText}
                            selectedValue={doctor.especialidad}
                            onValueChange={(itemValue, itemIndex) =>
                                updateDoctorField('especialidad', itemValue)
                            }>
                            {especialidadesArray.map((especialidad, index) => (
                                <Picker.Item key={index} label={especialidad} value={especialidad} />
                            ))}
                        </Picker>
                    </>
                }
            <Pressable style={stylesRegister.button} onPress={register}>
                <Text style={stylesRegister.textButton} >Registar</Text>
            </Pressable>
        </SafeAreaView>
    )
}