import FontAwesome from "react-native-vector-icons/FontAwesome";
import React from "react";
import { View, Text, TouchableOpacity, ScrollView, StatusBar } from "react-native";
import { useLocalSearchParams } from "expo-router";

function profil() {
  const name=useLocalSearchParams().name;
  return (
    <>
      <ScrollView className="flex flex-col h-full">
        {/* Header */}
        <View className={`bg-yellow-400 text-white text-center pb-4`} style={{paddingTop: StatusBar.currentHeight}}>
          <Text className="text-lg pl-4 font-semibold">Profil</Text>
        </View>

        {/* Profile Section */}
        <View className="flex flex-col items-center bg-gray-100 py-6">
          <View className="flex items-center mb-4">
            <View className="bg-blue-900 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-semibold">
              <Text>T</Text>
            </View>
            <View className="ml-4">
              <Text className="text-lg font-bold text-center">{name}</Text>
              <Text className="text-gray-600">
                timotiusdwimalau@students.unnes.ac.id
              </Text>
              <View className="flex items-center mt-2">
                <View className="bg-yellow-500 text-black rounded-full px-2 py-1 text-sm font-semibold">
                  <Text>Mahasiswa</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Information Cards */}
          <View className="w-full px-4">
            <View className="bg-white rounded-lg shadow-md mb-4">
              <TouchableOpacity className="flex-row justify-between items-center py-4 px-4 border-b">
                <View className="flex-row items-center">
                  <FontAwesome name="user" size={24} color="gray" />
                  <Text className="ml-4 text-gray-800">Data Pribadi</Text>
                </View>
                <FontAwesome name="chevron-right" size={24} />
              </TouchableOpacity>

              <TouchableOpacity className="flex-row justify-between items-center py-4 px-4 border-b">
                <View className="flex-row items-center">
                  <FontAwesome name="file" size={24} color="gray" />
                  <Text className="ml-4 text-gray-800">Data Pribadi</Text>
                </View>
                <FontAwesome name="chevron-right" size={24} />
              </TouchableOpacity>

              <TouchableOpacity className="flex-row justify-between items-center py-4 px-4 border-b">
                <View className="flex-row items-center">
                  <FontAwesome name="star" size={24} color="gray" />
                  <Text className="ml-4 text-gray-800">Data Pribadi</Text>
                </View>
                <FontAwesome name="chevron-right" size={24} />
              </TouchableOpacity>

              <TouchableOpacity className="flex-row items-center py-4 px-4">
                <FontAwesome name="sign-out" size={24} color="red" />
                <Text className="ml-4 text-red-600">Keluar akun</Text>
                <Text className="ml-auto text-gray-600">Versi 2.0.0</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

export default profil;
