import { getKalenderAkademik } from "@/config/utils/service";
import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Bullet from "react-native-vector-icons/Entypo";

function kalender_akademik() {
  const [kalenderAkademik, setKalenderAkademik] = React.useState<any>([]);
  React.useEffect(() => {
    getKalenderAkademik((result: any) => {
      result.data && setKalenderAkademik(result.data);
    });
  }, []);
  return (
    <View className="bg-white flex-1">
      <FlatList
        data={kalenderAkademik}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={{ height: 10 }}></View>}
        style={style.containerFlatlist}
        ListEmptyComponent={
          <Text className="font-medium text-2xl text-center mt-5">
            Loading..
          </Text>
        }
        ListHeaderComponent={
          <Text
            style={{
              flexWrap: "wrap",
              fontSize: 25,
              marginBottom: 10,
              borderLeftWidth: 5,
              borderLeftColor: "#FFD700",
              paddingLeft: 15,
              fontWeight: "500",
            }}
          >
            Kalender Akademik Semester Gasal 2024/2025
          </Text>
        }
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: "row",
              gap:3,
              alignItems: "center",
            }}
          >
            <Bullet name="vinyl"></Bullet>
            <View style={style.containerArray}>
              <Text style={style.tanggalKalender}>{item.tanggal}</Text>
              <Text style={style.keteranganKalender}>{item.keterangan}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}
const style = StyleSheet.create({
  containerFlatlist: {
    paddingHorizontal:30,
    paddingVertical:20
  },
  containerArray: {
    alignItems: "center",
    width: "100%",
  },
  tanggalKalender: {
    fontWeight: "600",
    fontSize: 17,
    width: "100%",
    borderBottomWidth: 1,
  },
  keteranganKalender: {
    fontSize: 20,
    width: "100%",
    textAlign: "left",
  },
});

export default kalender_akademik;
