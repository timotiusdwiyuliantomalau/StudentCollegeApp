import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Calendar from "react-native-vector-icons/Ionicons";
import Room from "react-native-vector-icons/MaterialIcons";
import SKS from "react-native-vector-icons/Entypo";
import Dosen from "react-native-vector-icons/Fontisto";
import Book from "react-native-vector-icons/FontAwesome";
import { getJadwalKuliah } from "@/config/utils/service";

function jadwal_kuliah() {
  const [jadwalKuliah, setJadwalKuliah] = React.useState<any>([]);
 
  React.useEffect(() => {
    getJadwalKuliah((result:any)=>{
      result.data&&setJadwalKuliah(result.data);
    })
  }, []);
  return (
    <FlatList
      style={style.listJadwal}
      data={jadwalKuliah}
      ItemSeparatorComponent={() => <View style={{ height: 20 }}></View>}
      ListEmptyComponent={()=><Text className="text-2xl text-center font-medium">Loading...</Text>}
      keyExtractor={(item) => item.id}
      ListFooterComponent={() => <View style={{ height: 50 }}></View>}
      renderItem={({ item }) => (
        <View style={style.containerItemJadwal}>
          <View>
            <Book style={style.iconMataKuliah} name="book"></Book>
          </View>
          <View>
            <Text style={{ fontSize: 22, fontWeight: "600" }}>
              {item.mata_kuliah}
            </Text>
            <View style={style.containerDetailJadwal}>
              <Calendar
                style={style.iconDetailJadwal}
                name="calendar"
              ></Calendar>
              <Text style={style.textDetailJadwal}>
                {item.waktu[0]}, {item.waktu[1]}
              </Text>
            </View>
            <View style={style.containerDetailJadwal}>
              <Room style={style.iconDetailJadwal} name="meeting-room"></Room>
              <Text style={style.textDetailJadwal}>{item.ruangan}</Text>
            </View>
            <View style={style.containerDetailJadwal}>
              <Dosen style={style.iconDetailJadwal} name="person"></Dosen>
              <Text style={style.textDetailJadwal}>{item.dosen}</Text>
            </View>
            <View style={style.containerDetailJadwal}>
              <SKS style={style.iconDetailJadwal} name="bookmark"></SKS>
              <Text style={style.textDetailJadwal}>{item.jumlah_sks} SKS</Text>
            </View>
          </View>
        </View>
      )}
    ></FlatList>
  );
}
const style = StyleSheet.create({
  textDetailJadwal: {
    fontSize: 16,
  },
  containerDetailJadwal: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    // backgroundColor: "white",
  },
  iconDetailJadwal: {
    fontSize: 15,
  },
  containerItemJadwal: {
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    flexDirection: "row",
    gap: 30,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.50,
    shadowRadius: 3.84,
    elevation: 5, 
  },
  iconMataKuliah: {
    fontSize: 60,
  },
  listJadwal: {
    backgroundColor: "white",
    padding: 25,
  },
});
export default jadwal_kuliah;
