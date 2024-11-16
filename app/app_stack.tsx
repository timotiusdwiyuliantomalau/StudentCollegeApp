import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useContext, useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { AuthContext } from "./auth_provider";
import AuthScreen from "./auth";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/config/firebase/initialize";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function App() {
  const { user, setUser } = useContext(AuthContext);
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });
  const onsubscribeUser = () => {
    onAuthStateChanged(auth, (user) => setUser(user));
  };
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
    onsubscribeUser();
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  return (
    <>
      {user ? (
        <ThemeProvider
          value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen
              name="(other-views)"
              options={{ headerShown: false }}
            ></Stack.Screen>
            <Stack.Screen name="+not-found" />
          </Stack>
        </ThemeProvider>
      ) : (
        <AuthScreen />
      )}
    </>
  );
}


