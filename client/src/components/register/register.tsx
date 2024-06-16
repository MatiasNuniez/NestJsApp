import { useEffect, useState } from "react"
import { Pressable, TextInput, View, Text, ScrollView } from "react-native"
import { stylesRegister } from '../../styles/styles'
import { user } from "../../utils/constants"
import { doctor } from "../../utils/constants"

interface RegisterProps {
    typeUser: string
}

export const Register: React.FC<RegisterProps> = ({ typeUser }) => {

    const [userOrDoctor, setUserOrDoctor] = useState<string>(typeUser)


    return (
    <>
            <View style={stylesRegister.content}>
                {typeUser === 'user' ? 
                user.map( user => 
                <TextInput style={stylesRegister.inputText} placeholder={user} key={user}/>)
                : doctor.map(doctor =>
                <TextInput style={stylesRegister.inputText} placeholder={doctor} key={doctor}/>)}
            </View>
        <Pressable style={stylesRegister.button}>
            <Text style={stylesRegister.textButton}>Registar</Text>
        </Pressable>
    </>
    )
}