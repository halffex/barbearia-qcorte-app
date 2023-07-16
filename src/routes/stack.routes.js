import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TabRoutes from "./tab.routes";

import Login from "../screens/Login";
import EsqueceuSenha from "../screens/EsqueceuSenha";
import Cadastro from "../screens/Cadastro";
import CadastroUsuarioCliente from "../screens/CadastroUsuarioCliente";
import CadastroUsuarioBarbeiro from "../screens/CadastroUsuarioBarbeiro";
import Agendamento from "../screens/Agendamento";
import Calendario from "../screens/Calendario";

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>

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
        name="CadastroUsuarioCliente"
        component={CadastroUsuarioCliente}
      />

      <Stack.Screen 
        name="CadastroUsuarioBarbeiro"
        component={CadastroUsuarioBarbeiro}
      />

      <Stack.Screen 
        name="Inicio"
        component={TabRoutes}
      />

      <Stack.Screen
        name="Agendamento"
        component={Agendamento}
      />

      <Stack.Screen 
        name="Calendario"
        component={Calendario}
      />

    </Stack.Navigator>
  )
}