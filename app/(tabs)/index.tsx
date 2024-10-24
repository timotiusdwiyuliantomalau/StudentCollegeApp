import React from "react";
import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Svg, { Path } from "react-native-svg";
import Icon from "react-native-vector-icons/FontAwesome";

function HomeScreen() {
  const logoUnnes = require("../../assets/images/logo_unnes.png");
  return (
    <>
      <ScrollView className="flex-col bg-gray-100 mt-12">
        <View className="px-3 pb-6 flex-col items-center relative">
          {/* SVG */}
          <View className="absolute -bottom-2 left-0 w-[400] h-[100]">
            <Svg viewBox="0 0 1440 320">
              <Path
                fill="#FFD700"
                fillOpacity="1"
                d="M0,192L120,213.3C240,235,480,277,720,250.7C960,224,1200,128,1320,80L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
              />
            </Svg>
          </View>
          {/* UNNES */}
          <View className="flex-row items-center justify-between w-full mb-6 mt-2">
            <View className="flex-row items-center space-x-2">
              <Image className="w-10 h-12" source={logoUnnes} accessibilityLabel="Foto Mahasiswa"></Image>
              <View className="flex-col">
                <Text className=" text-2xl font-bold">UNICE</Text>
                <Text className="text-xs font-medium">
                  UNIVERSITAS NEGERI SEMARANG
                </Text>
              </View>
            </View>
            <Icon name="search" size={20} color="#000" className="ml-auto" />
          </View>

          {/* Student Profile */}
          <View className="flex space-x-2 flex-row w-full overflow-hidden items-center">
            <Image
              source={{ uri: "https://picsum.photos/300/300" }}
              className="h-[55] w-[55] bg-black rounded-full"
            />
            <View className="flex-col flex-wrap w-full">
              <Text className="text-lg font-bold">
                TIMOTIUS DWI YULIANTO MALAU
              </Text>
              <Text className="text-black">5302420053</Text>
              <Text className="text-black">
                Pendidikan Teknik Informatika dan Komputer, S1
              </Text>
            </View>
          </View>
        </View>
        <View className="mx-4 space-y-7">
          {/* Features Grid */}
          <View className="bg-white p-5 rounded-lg shado mt-6 flex-row flex-wrap justify-around">
            <View className="items-center mb-6 w-1/3">
              <Icon name="clock-o" size={35} color="#000" />
              <Text className="mt-2">Jadwal Kuliah</Text>
            </View>
            <View className="items-center mb-6 w-1/3">
              <Icon name="calendar" size={35} color="#000" />
              <Text className="mt-2">Kaldik</Text>
            </View>
            <View className="items-center mb-6 w-1/3">
              <Icon name="wifi" size={35} color="#000" />
              <Text className="mt-2">Akses Hotspot</Text>
            </View>
            <View className="items-center mb-6 w-1/3">
              <Icon name="id-card" size={35} color="#000" />
              <Text className="mt-2">Pemindai Kartu</Text>
            </View>
            <View className="items-center mb-6 w-1/3">
              <View className="h-[35] w-[35] bg-black"></View>
              <Text
                onPress={() => {
                  console.log("Lapor MBKM");
                }}
                className="mt-2"
              >
                Lapor MBKM
              </Text>
            </View>
            {/* <ActivityIndicator size={'large'} color={'yellow'} animating={false}></ActivityIndicator> */}
          </View>

          {/* News Section */}
          <View className="mt-4 rounded-lg shadow-md">
            <View className="flex-row justify-between items-center mb-4">
              <Text className="text-blue-900 text-xl font-bold">
                News & Updates
              </Text>
              <TouchableOpacity>
                <Text className="text-blue-900">See more</Text>
              </TouchableOpacity>
            </View>
            <View className="flex-row flex-wrap justify-between ">
              <View className="bg-blue-900 w-[170] h-[110] mb-4"></View>
              <View className="bg-blue-900 w-[170] h-[110] mb-4"></View>
              <View className="bg-blue-900 w-[170] h-[110] mb-4"></View>
              <View className="bg-blue-900 w-[170] h-[110] mb-4"></View>
              <View className="bg-blue-900 w-[170] h-[110] mb-4"></View>
              <View className="bg-blue-900 w-[170] h-[110] mb-4"></View>
            </View>
          </View>
        </View>
        {/* Footer */}
        {/* <View className="bg-white p-4 mt-4 flex-row justify-around">
        <View className="items-center">
          <Icon name="home" size={30} color="#000" />
          <Text>Beranda</Text>
        </View>
        <View className="items-center text-gray-400">
          <Icon name="headphones" size={30} color="gray" />
          <Text>Layanan</Text>
        </View>
        <View className="items-center text-gray-400">
          <Icon name="bell" size={30} color="gray" />
          <Text>Notifikasi</Text>
        </View>
        <View className="items-center text-gray-400">
          <Icon name="user" size={30} color="gray" />
          <Text>Profil</Text>
        </View>
      </View> */}
      </ScrollView>
    </>
  );
}

export default HomeScreen;
