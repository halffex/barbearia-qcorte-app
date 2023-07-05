import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TabRoutes from "./tab.routes";

import Login from "../screens/Login";
import EsqueceuSenha from "../screens/EsqueceuSenha";
import Cadastro from "../screens/Cadastro";
import CadastroUsuario from "../screens/CadastroUsuario";
import Agendamento from "../screens/Agendamento";
import Calendario from "../screens/Calendario";

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>

      <Stack.Screen 
        name="Calendario"
        component={Calendario}
      />

      <Stack.Screen 
        name="Login"
        component={Login}
      />

      <Stack.Screen 
        name="EsqueceuSenha"
        component={EsqueceuSenha}
      />

      <Stack.Screen 
        name="Cadastro"
        component={Cadastro}
      />

      <Stack.Screen 
        name="CadastroUsuario"
        component={CadastroUsuario}
      />

      <Stack.Screen 
        name="Inicio"
        component={TabRoutes}
      />

      <Stack.Screen
        name="Agendamento"
        component={Agendamento}
      />
    </Stack.Navigator>
  )
}