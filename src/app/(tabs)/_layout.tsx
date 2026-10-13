import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { EPN_THEME } from "@/theme/epnTheme";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: EPN_THEME.colors.accent,
        tabBarInactiveTintColor: EPN_THEME.colors.textMuted,
        headerStyle: {
          backgroundColor: EPN_THEME.colors.primary,
        },
        headerTintColor: "#FFFFFF",
        headerShadowVisible: false,
        tabBarStyle: {
          backgroundColor: EPN_THEME.colors.primary,
          borderTopColor: "transparent",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Inicio",
          headerShown: true,
          headerTitle: "Sticker Smash EPN",
          headerTitleAlign: "center",
          headerLeft: () => <></>,
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={20}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "Acerca de",
          headerTitle: "Información EPN",
          headerTitleAlign: "center",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "information-circle" : "information-circle-outline"}
              size={20}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
