import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text,
    StatusBar,
    Pressable,
  } from 'react-native';
import { useState } from 'react';
import { Item } from './item';
import { statusAppo } from '../register/enum/enums';
import { stylesItem, styleAppo } from '../../styles/styles';

export const Appointments = () => {

    const [appo, setAppo] = useState([{
        fecha: Date(),
        detalles:'Consulta medica de dolor de panza',
        status:statusAppo.VIGENTE,
        user_id:1,
        doctor_id:1
    },
    {
        fecha: Date(),
        detalles:'Consulta medica de dolor de panza',
        status:statusAppo.VIGENTE,
        user_id:1,
        doctor_id:1
    },
    {
        fecha: Date(),
        detalles:'Consulta medica de dolor de panza',
        status:statusAppo.VIGENTE,
        user_id:1,
        doctor_id:1
    },
    {
        fecha: Date(),
        detalles:'Consulta medica de dolor de panza',
        status:statusAppo.VIGENTE,
        user_id:1,
        doctor_id:1
    }])

    return(

        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

            <FlatList
                style={styleAppo.container}
                data={appo}
                renderItem={({item}) => <Item fecha = {item.fecha} detalles = {item.detalles} status = {item.status} user_id = {item.user_id} doctor_id = {item.doctor_id} />}
                keyExtractor={item => item.fecha}
            />

            <Pressable style={styleAppo.press}>
                <Text style={stylesItem.text}>+</Text>
            </Pressable>

        </SafeAreaView>

    )
}