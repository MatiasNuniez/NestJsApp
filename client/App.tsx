import { StyleSheet, Text, View } from 'react-native';
import { Login } from './src/components/login';


const firebaseConfig = {

  apiKey: "AIzaSyDwsba03Catu7zohOadC3Gs9t9FCgt699M",

  authDomain: "authm-c7fae.firebaseapp.com",

  projectId: "authm-c7fae",

  storageBucket: "authm-c7fae.appspot.com",

  messagingSenderId: "867664337095",

  appId: "1:867664337095:web:a623d6acd932b1fb14c6e2",

  measurementId: "G-67CV4XMHSP"

};


export default function App() {
  return (
    <View style={styles.container}>
      <Login/>
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
