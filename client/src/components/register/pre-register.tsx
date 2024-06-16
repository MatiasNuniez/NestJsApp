import { View, Text, TouchableOpacity, Pressable } from "react-native";
import { preRegisterStyles } from '../../styles/styles'
import { useState } from "react";
import { Register } from "./register";

export const Pre_register: React.FC = () => {

    const [userOrDoctor, setUserOrDoctor] = useState<string>('')

    return (
        <>
            {userOrDoctor === '' ?
                <View style={preRegisterStyles.container}>
                        <View style={preRegisterStyles.selectContainer}>
                             <Text style={preRegisterStyles.text}>Como te quieres registrar?</Text>
                            <View style={preRegisterStyles.select}>
                                <Pressable onPress={() => setUserOrDoctor('user')}>
                                    <Text style={preRegisterStyles.selectText}>Usuario</Text>
                                </Pressable>
                            </View>
            
                            <View style={preRegisterStyles.select}>
                            <Pressable onPress={() => setUserOrDoctor('doctor')}>
                                    <Text style={preRegisterStyles.selectText}>Doctor</Text>
                                </Pressable>
                            </View>
                        </View>
                </View>
                :
                <Register typeUser={userOrDoctor} />
            }
        </>
    )

}