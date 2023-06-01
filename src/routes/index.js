import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Cadastro from '../screens/Cadastro';
import Login from '../screens/Login';
import Perfil from '../screens/Perfil';

const Stack = createNativeStackNavigator(); 

export default function Routes() {

  return (
    <Stack.Navigator>
      <Stack.Screen name="Perfil" component={Perfil} options={{headerShown : false}} />

      <Stack.Screen name="Login" component={Login} options={{headerShown : false}} />

      <Stack.Screen name="Cadastro" component={Cadastro} options={{headerShown : false}} />
      
    </Stack.Navigator>
  );
}