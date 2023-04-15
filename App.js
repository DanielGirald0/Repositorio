//librerias para el manejo entre pantallas
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import Contacts from './screens/Contacts';
import Login from './screens/Login';

/*metodo para armar el stack navegaion y dentro de el las difeentes pantallas
  y definir las rutas de cada componente*/
const Stack = createNativeStackNavigator(); 


export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator
    initialRouteName='Login'>
      <Stack.Screen name='Home' component={HomeScreen} options={{title: 'Inicio'}} />
      <Stack.Screen name='Profile' component={ProfileScreen} options={{title: 'Perfil Del Usuario'}} />
      <Stack.Screen name='Contacts' component={Contacts} options={{title: 'Contactanos'}} />
      <Stack.Screen name='Login' component={Login} options={{title: 'Login'}} />
    </Stack.Navigator>
   </NavigationContainer>
  );
}


