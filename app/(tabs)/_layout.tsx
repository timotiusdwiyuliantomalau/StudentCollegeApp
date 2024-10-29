import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
          tabBarInactiveTintColor: Colors.dark.tint,
          headerShown: false,
        }}
        >
          <Tabs.Screen
            name="notifikasi"
            options={{
              title: "Notifikasi",
              tabBarIcon: ({ color, focused }) => (
                <TabBarIcon
                  name={focused ? "bell" : "bell"}
                  color={color}
                />
              ),
            }}
          />
        <Tabs.Screen
          name="index"
          options={{
            title: "Beranda",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? "home" : "home"} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="layanan"
          options={{
            title: "Layanan",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "headphones" : "headphones"}
                color={color}
              />
            ),
          }}
        />
        {/* <Tabs.Screen
          name="notifikasi"
          options={{
            title: "Notifikasi",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "bell" : "bell"}
                color={color}
              />
            ),
          }}
        /> */}
        <Tabs.Screen
          name="profil"
          options={{
            title: "Profil",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "user" : "user"}
                color={color}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
