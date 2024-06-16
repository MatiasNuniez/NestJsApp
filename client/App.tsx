import { StyleSheet, Text, View } from 'react-native';
import { Login } from './src/components/login/login';
import { Pre_register } from './src/components/register/pre-register';


export default function App() {
  return (
    <View style={styles.container}>
      {/* <Login/> */}
      <Pre_register/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
