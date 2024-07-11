import { ProfileUser } from "../../interfaces/interfaces"
import { Text } from "react-native"
import { styleProfile } from "../../styles/styles"
import { SafeAreaView } from "react-native-safe-area-context"

interface dataProp {
    data:ProfileUser
}

export const ProfileUserComp = (props: dataProp) => {

    const { name, phone, email, role, status} = props.data

    return (
        <SafeAreaView style={styleProfile.container}>
            <Text><Text style={styleProfile.text}>Nombre: </Text>{name}</Text>
            <Text><Text style={styleProfile.text}>Numero de celular: </Text>{phone}</Text>
            <Text><Text style={styleProfile.text}>Email: </Text>{email}</Text>
            <Text><Text style={styleProfile.text}>Rol: </Text>{role}</Text>
            <Text><Text style={styleProfile.text}>Estado: </Text>{status ? 'Activo' : 'Inactivo'}</Text>
        </SafeAreaView>
    )

}