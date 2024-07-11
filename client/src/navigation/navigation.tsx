import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Profile } from "../components/profile/profile";
import { Appointments } from "../components/appointment/appointments";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ProfileDoctor, ProfileUser } from "../interfaces/interfaces";

type RootStackParamList = {
    Profile:{data:ProfileUser | ProfileDoctor}
    Appointments:undefined;
  }; 

export const Navigation = () => {

    const Tab = createBottomTabNavigator<RootStackParamList>();

    return(

        <Tab.Navigator screenOptions={{ headerShown: false }}>

            <Tab.Screen name="Profile" component={Profile} options={{
                tabBarIcon : ({color, size}) => (
                    <Ionicons name = "person"
                    color= {color}
                    size={size} />
                )
            }}/>
            <Tab.Screen name="Appointments" component={Appointments} options={{
                tabBarIcon : ({color, size}) => (
                    <Ionicons name = "calendar"
                    color= {color}
                    size={size} />
                )
            }}/>

        </Tab.Navigator>
    )
}