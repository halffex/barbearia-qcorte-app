import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Inicio from "../screens/Inicio";
import Perfil from "../screens/Perfil";

import { Ionicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator 
      screenOptions={{ 
        headerShown: false,
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#fff',
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          backgroundColor: '#CC6600',
          borderTopWidth: 0,
        }
      }}

    >
      <Tab.Screen
        name="inicio"
        component={Inicio}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            if(focused) {
              return <Ionicons name="home" size={size} color={color} />
            }
            return <Ionicons name="home-outline" size={size} color={color} />
          }
        }}
      />

      <Tab.Screen
        name="perfil"
        component={Perfil}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            if(focused) {
              return <Ionicons name="person" size={size} color={color} />
            }
            return <Ionicons name="person-outline" size={size} color={color} /> 
          }
        }}
      />

    </Tab.Navigator>
  )
}