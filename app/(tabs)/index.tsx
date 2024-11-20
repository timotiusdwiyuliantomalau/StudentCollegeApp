import { Link } from "expo-router";
import React, { useContext } from "react";
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
import { AuthContext } from "../auth_provider";

function HomeScreen() {
  const { user, setUser } = useContext(AuthContext);
  const logoUnnes = require("../../assets/images/logo_unnes.png");
  const [arrayImg, setArrayImg] = React.useState<any>([]);
  React.useEffect(() => {
    let arr: any = [];
    for (let i = 1; i <= 6; i++) {
      arr.push(`https://picsum.photos/300/${300 + i}`);
    }
    setArrayImg(arr);
  }, []);
  return (
    <>
      <ScrollView className="flex-col bg-gray-100">
        <View
          className={`px-3 pb-6 flex-col items-center relative`}
          style={{ paddingTop: StatusBar.currentHeight }}
        >
          {/* SVG */}
          <View className="absolute -bottom-2 left-0 w-screen h-[100]">
            <Svg viewBox="0 0 1440 320">
              <Path
                fill="#FFD700"
                fillOpacity="0.7"
                d="M0,192L120,213.3C240,235,480,277,720,250.7C960,224,1200,128,1320,80L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
              />
            </Svg>
          </View>
          {/* UNNES */}
          <View className="flex-row items-center justify-between w-full mb-6">
            <View className="flex-row space-x-2">
              <Image className="w-10 h-12" source={logoUnnes}></Image>
              <View className="flex-col justify-between">
                <Text className=" text-xl font-bold">UNICE</Text>
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
              accessibilityLabel="Foto Mahasiswa"
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
        <View className="mx-6 space-y-7">
          {/* Features Grid */}
          <View
            className="bg-white px-4 py-8 rounded-lg shadow mt-6 flex-row flex-wrap justify-center items-center"
            style={{ columnGap: 32, rowGap: 32 }}
          >
            <Link href={"../jadwal_kuliah"}>
              <View className="flex-col items-center w-1/3">
                <Icon name="clock-o" size={35} color="#000" />
                <Text className="mt-2">Jadwal Kuliah</Text>
              </View>
            </Link>
            <Link href={"../kalender_akademik"}>
              <View className="flex-col items-center w-1/3">
                <Icon name="calendar" size={35} color="#000" />
                <Text className="mt-2">Kaldik</Text>
              </View>
            </Link>
            <Link href={"../jadwal_kuliah"}>
              <View className="flex-col items-center w-1/3">
                <Icon name="wifi" size={35} color="#000" />
                <Text className="mt-2">Akses Hotspot</Text>
              </View>
            </Link>
            <Link href={"../test"}>
              <View className="flex-col items-center w-1/3">
                <Icon name="id-card" size={35} color="#000" />
                <Text className="mt-2">Pemindai Kartu</Text>
              </View>
            </Link>
            <Link href={"../jadwal_kuliah"}>
              <View className="flex-col items-center w-1/3">
                <View className="h-[35] w-[35] bg-black"></View>
                <Text
                  className="mt-2"
                >
                  Lapor MBKM
                </Text>
              </View>
              {/* <ActivityIndicator size={'large'} color={'yellow'} animating={false}></ActivityIndicator> */}
            </Link>
          </View>

          {/* News Section */}
          <View className="mt-4 rounded-lg shadow-md">
            <View className="flex-row justify-between items-center mb-4">
              <Text className="text-blue-900 text-xl font-bold">
                News & Updates
              </Text>
              <TouchableOpacity>
                <Link href={"../testPage"}>
                <Text className="text-blue-900">See more</Text>
                </Link>
              </TouchableOpacity>
            </View>
            <View
              className="flex-row flex-wrap justify-between"
              style={{ rowGap: 20 }}
            >
              {arrayImg.map((item: any, index: number) => (
                <Image
                  source={{ uri: item }}
                  key={index}
                  className="w-[47%] h-28"
                />
              ))}
            </View>
          </View>
        </View>
        {/* Footer */}
        {/* <View className="bg-white p-4 mt-4 flex-row justify-around">
        <Link href={"../jadwal_kuliah"}>
    //     <View className="items-center">
    //       <Icon name="home" size={30} color="#000" />
    //       <Text>Beranda</Text>
    //     </View>
    </Link>
    <Link href={"../jadwal_kuliah"}>
    //     <View className="items-center text-gray-400">
    //       <Icon name="headphones" size={30} color="gray" />
    //       <Text>Layanan</Text>
    //     </View>
    </Link>
    <Link href={"../jadwal_kuliah"}>
    //     <View className="items-center text-gray-400">
    //       <Icon name="bell" size={30} color="gray" />
    //       <Text>Notifikasi</Text>
    //     </View>
    </Link>
    <Link href={"../jadwal_kuliah"}>
    //     <View className="items-center text-gray-400">
    //       <Icon name="user" size={30} color="gray" />
    //       <Text>Profil</Text>
    //     </View>
    </Link>
    //   </View> */}
      </ScrollView>
    </>
  );
}

export default HomeScreen;
