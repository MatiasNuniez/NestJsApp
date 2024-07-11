import { View, Text, TouchableOpacity, Pressable } from "react-native";
import { preRegisterStyles } from '../../styles/styles'
import { useState } from "react";
import { Register } from "./register";
import { SafeAreaView } from "react-native-safe-area-context";
import { PreRegisterProps } from "../../../App";

export const Pre_register = ({ navigation }: PreRegisterProps) => {

    const [userOrDoctor, setUserOrDoctor] = useState<string>('')

    return (
        <SafeAreaView style={preRegisterStyles.container}>
                <View >
                    <View style={preRegisterStyles.selectContainer}>
                        <Text style={preRegisterStyles.text}>Como te quieres registrar?</Text>
                        <View style={preRegisterStyles.select}>
                            <Pressable onPress={() => navigation.navigate('Register', { typeUser: 'user' })}>
                                <Text style={preRegisterStyles.selectText}>Usuario</Text>
                            </Pressable>
                        </View>

                        <View style={preRegisterStyles.select}>
                            <Pressable onPress={() => navigation.navigate('Register', { typeUser: 'doctor' })}>
                                <Text style={preRegisterStyles.selectText}>Doctor</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
        </SafeAreaView>
    )

}