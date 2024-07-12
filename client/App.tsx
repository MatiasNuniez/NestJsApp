import { Login } from './src/components/login/login';
import { Pre_register } from './src/components/register/pre-register';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { Register } from './src/components/register/register';
import { Navigation } from './src/navigation/navigation';

type RootStackParamList = {
  Login: undefined;
  RegisterOption: undefined;
  Register: { typeUser: string };
  Profile:undefined;
  Appointments:undefined;
  Index:undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export type RegisterProps = NativeStackScreenProps<RootStackParamList, 'Register'>;
export type PreRegisterProps = NativeStackScreenProps<RootStackParamList, 'RegisterOption'>
export type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>


export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Group>
          <Stack.Screen name="Login" component= {Login} />
          <Stack.Screen name="RegisterOption" component= {Pre_register} />
          <Stack.Screen name='Register' component= {Register} />
        </Stack.Group>
        <Stack.Group >
          <Stack.Screen name="Index" component = {Navigation} options={{
            headerBackVisible: false
          }}/>
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
