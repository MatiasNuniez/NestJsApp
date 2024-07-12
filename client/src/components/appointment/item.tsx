import { View, Text } from "react-native"
import { stylesItem } from "../../styles/styles"
import { statusAppo } from "../register/enum/enums";

interface itemProps {
    fecha: string;
    detalles: string;
    user_id: number;
    doctor_id: number;
    status:statusAppo;
}

export const Item = (props: itemProps) => {

    const {fecha, detalles, status} = props

    return (
        <View style={stylesItem.item}>
            <Text style={stylesItem.text}>Fecha: {fecha.split(' ').slice(1,5).join(' ')}</Text>
            <Text style={stylesItem.text}>Detalles: {detalles}</Text>
            <Text style={stylesItem.text}>Estado: {status}</Text>
        </View> 
    )
}