import { LinearGradient } from "expo-linear-gradient";
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerBackground: () => (
          <LinearGradient
            colors={["black", "blue"]}
            style={{
              flex: 1,
            }}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          />
        ),
        headerTintColor:"white"
      }}
    >
      <Stack.Screen
        options={{
          title: "Jadwal Kuliah",
        }}
        name="jadwal_kuliah"
      />
      <Stack.Screen
        options={{ title: "Kalender Akademik" }}
        name="kalender_akademik"
      />
    </Stack>
  );
}
