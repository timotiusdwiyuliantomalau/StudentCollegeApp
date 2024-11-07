import { Link, Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import Drawer from "expo-router/drawer";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <>
      {/* <Drawer>
        <Drawer.Screen
          name="index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "Home",
            title: "Home",
          }}
        />
      </Drawer> */}
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
          tabBarInactiveTintColor: Colors.dark.tint,
          headerShown: false,
        }}
      >
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
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: ({ color}) => (
              <TabBarIcon name="home" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="notifikasi"
          options={{
            title: "Notifikasi",
            headerRight: () => (
              <Link
                className="mr-3 font-bold text-lg text-green-600"
                href={{ pathname: "/" }}
              >
                Info
              </Link>
            ),
            headerShown: true,
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? "bell" : "bell"} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="profil"
          initialParams={{ name: "Kosong" }}
          options={{
            title: "Profil",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? "user" : "user"} color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
