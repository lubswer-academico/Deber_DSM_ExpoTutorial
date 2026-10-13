import { Stack } from "expo-router";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <StatusBar style="light"/>
      {/*No me gustó cómo quedo por eso no le pongo*/}
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="+not-found"
          options={{ title: "Opps not Found page" }}
        />
      </Stack>
    </GestureHandlerRootView>
  );
}
