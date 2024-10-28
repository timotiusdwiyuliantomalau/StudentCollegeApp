import React from "react";
import { Switch, Text, TextInput, View } from "react-native";

function notifikasi() {
  return <>
  {/* <View className="flex-col justify-center items-center bg-green-400 space-y-4 mt-12 p-4">
  <View className="flex-col space-y-4 space-y-4 bg-red-500 p-5 w-full">
    <View className="bg-yellow-400 w-5 h-5 flex-row space-x-2">
    <View className="bg-black rounded-full w-5 h-5"></View>
    <Text>Halooo</Text>
    </View>
    <View className="bg-yellow-400 w-5 h-5"></View>
  </View>
  <View className="flex-col space-y-4 space-y-4 bg-red-500 p-5">
    <View className="bg-yellow-400 w-5 h-5 flex-row space-x-2">
    <View className="bg-black rounded-full w-5 h-5"></View>
    <Text>Halooo</Text>
    </View>
    <View className="bg-yellow-400 w-5 h-5"></View>
  </View>
  </View> */}
<View className="mt-12">
  {/* <Text className="text-2xl">Halooo</Text> */}
<TextInput multiline textAlignVertical="top" className="w-32 h-32 bg-red-200"/>
<Switch ></Switch>
</View>

  </>;
}
export default notifikasi;
