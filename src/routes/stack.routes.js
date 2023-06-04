import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TabRoutes from "./tab.routes";

import Login from "../screens/Login";
import Cadastro from "../screens/Cadastro";

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen 
        name="Login"
        component={Login}
      />

      <Stack.Screen 
        name="Cadastro"
        component={Cadastro}
      />

      <Stack.Screen 
        name="Inicio"
        component={TabRoutes}
      />
    </Stack.Navigator>
  )
}