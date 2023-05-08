import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Cadastro from '../screens/Cadastro'
import Login from '../screens/Login'

const Stack = createNativeStackNavigator(); 

export default function Routes (){

    return (

        <Stack.Navigator>

        <Stack.Screen
                name='Cadastro'
                component={Cadastro}
                options={{headerShown : false}}
            />

        <Stack.Screen
                name='Login'
                component={Login}
                options={{headerShown : false}}
            />

        </Stack.Navigator>

    )

}