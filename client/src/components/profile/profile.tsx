import { SafeAreaView } from "react-native-safe-area-context"
import { Image, Text, View } from "react-native"
import { useState } from "react"
import { ProfileUserComp } from "./profileUser"
import { colors } from "../../utils/colors"
import { styleProfile } from "../../styles/styles"

export const Profile = () => {

    const [ data, setData ] = useState({
        name: 'John Doe',
        phone: '123-456-7890',
        email: 'john.doe@example.com',
        role: 'User',
        password:'',
        status: true
      })

    return (

        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/1077/1077114.png'}} style={{width:50, height:50}}/>
            <ProfileUserComp data={data} />
        </SafeAreaView>

    )
}