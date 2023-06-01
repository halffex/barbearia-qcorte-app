import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Cadastro from '../screens/Cadastro';
import Login from '../screens/Login';
import barberprox from '../screens/barberprox';
import Perfil from '../screens/Perfil';

const Stack = createNativeStackNavigator(); 

export default function Routes() {

  return (
    <Stack.Navigator>
<<<<<<< HEAD
      <Stack.Screen name="Perfil" component={Perfil} options={{headerShown : false}} />
=======
>>>>>>> c49f7a1d32f64ed863ea20db2fe853f67bd7116b

      <Stack.Screen name="Login" component={Login} options={{headerShown : false}} />

      <Stack.Screen name="Cadastro" component={Cadastro} options={{headerShown : false}} />
<<<<<<< HEAD
=======

      <Stack.Screen name="Barberprox" component={barberprox} options={{headerShown : false}} />

      <Stack.Screen name="Perfil" component={Perfil} options={{headerShown : false}} />


>>>>>>> c49f7a1d32f64ed863ea20db2fe853f67bd7116b
      
    </Stack.Navigator>
  );
}