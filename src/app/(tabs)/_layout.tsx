import { Tabs } from "expo-router";
import {Ionicons} from "@expo/vector-icons";

export default function TabsLayout() {
  return <Tabs screenOptions={{tabBarActiveTintColor: "rgba(255, 230, 0, 1)", tabBarInactiveTintColor: "rgba(255, 255, 255, 1)",
    headerStyle: {
      backgroundColor: "rgba(30, 31, 30, 0.9)",
    },
    headerTintColor: "rgba(255, 255, 255, 1)",
    headerShadowVisible: false,
    tabBarStyle: {
      backgroundColor: "rgba(30, 31, 30, 0.9)",
    },

  }}>
    <Tabs.Screen
    name = "index"
    options = {{title : "Inicio", headerShown: true, headerTitle: "Sticker Smash", headerTitleAlign: "center", headerLeft : () => <></>,
    tabBarIcon: ({focused, color}) => <Ionicons name = {focused ? "home": "home-outline"} size = {20} color = {color}/>
    }}
    />  
    <Tabs.Screen
    name = "about"
    options = {{title: "About", headerTitleAlign: "center",
    tabBarIcon: ({focused, color}) => <Ionicons name = {focused? "information-circle": "information-circle-outline"} size = {20} color = {color}/>
    }}
    />
  </Tabs>;
}
