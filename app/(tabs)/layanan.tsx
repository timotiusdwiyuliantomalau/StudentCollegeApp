import { addTiketLayanan, getLayananTiket } from "@/config/utils/service";
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  TextInput,
  FlatList,
} from "react-native";
import Fa6 from "react-native-vector-icons/FontAwesome6";
import Ion from "react-native-vector-icons/Ionicons";

export default function TabTwoScreen() {
  const [isFormTiket, setIsFormTiket] = React.useState(false);
  const [layananTiket, setLayananTiket] = React.useState<any>({});
  const [inputTiket, setInputTiket] = React.useState<any>("");
  const [inputSend, setInputSend] = React.useState("");
  React.useEffect(() => {
    getLayananTiket(
      (result: any) => result.data && setLayananTiket(result.data[0])
    );
  }, []);
  return (
    <View className="flex flex-col h-full ">
      <View className="h-[200]  bg-yellow-300 relative">
        <View
          className={`flex-row items-center space-x-5 justify-center text-center px-4 absolute w-full top-2`}
          style={{ paddingTop: StatusBar.currentHeight }}
        >
          <Text className="text-2xl font-bold">Layanan</Text>
          <Fa6 name="file-circle-question" size={20} color="black" />
        </View>
      </View>

      <View className="flex-col space-y-12 p-6 absolute w-full top-[8%]">
        <View className="rounded-lg relative flex flex-col p-4 items-center space-y-4">
          <View className="absolute -top-[20%] left-[10]">
            <Fa6 name="ticket-simple" color={"white"} size={270}></Fa6>
          </View>
          <Text className="text-gray-800 w-[250]">
            Buat Tiket anda sekarang untuk memulai layanan. Admisi dan Layanan
            Terpadu (ALT) siap menjadi tempat pengaduan pertama bagi Anda yang
            memiliki kendala atau masalah.
          </Text>
          <TouchableOpacity className="bg-blue-500 text-white px-4 py-2 rounded flex-row items-center space-x-2 w-1/2">
            <Text onPress={() => setIsFormTiket(!isFormTiket)} className="text-white">
              Buat Tiket Baru
            </Text>
            <Fa6 name="plus-square" size={15} color="white" />
          </TouchableOpacity>
        </View>
        {isFormTiket && (
          <View>
            <Text className="text-lg font-bold text-gray-800 mb-2">
              Form Tiket Baru
            </Text>
            <View className="bg-white rounded-xl shadow p-4 flex-row items-center">
              <View className="flex-grow">
                <TextInput
                  autoFocus
                  placeholder="Isilah tiket sesuai kebutuhan Anda.."
                  onChangeText={(text: string) => setInputTiket(text)}
                ></TextInput>
              </View>
              <Ion
                onPress={() => {
                  const tickets: any = layananTiket.ticket;
                  tickets.push(inputTiket);
                  addTiketLayanan(layananTiket.id, tickets);
                  setLayananTiket({ id: layananTiket.id, ticket: tickets });
                }}
                name="send"
                size={20}
                color={"#4381e5"}
              ></Ion>
            </View>
          </View>
        )}
        <View>
          <Text className="text-lg font-bold text-gray-800 mb-2">
            Tiket & Layanan Saya
          </Text>
          <View className="bg-white rounded-xl shadow p-4 flex-row items-center">
            <View className="flex-grow">
              {layananTiket.ticket && layananTiket.ticket.length == 0 ? (
                <Text className="">Tidak ada tiket yang diajukan</Text>
              ) : (
                <FlatList
                  ItemSeparatorComponent={() => (
                    <View style={{ height: 10 }}></View>
                  )}
                  data={layananTiket.ticket}
                  renderItem={({ item }) => (
                    <View style={{ backgroundColor: "white" }}>
                      <Text
                        style={{
                          borderBottomWidth: 1,
                          borderBottomColor: "gray",
                          paddingBottom: 3,
                        }}
                      >
                        {item}
                      </Text>
                    </View>
                  )}
                />
              )}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
