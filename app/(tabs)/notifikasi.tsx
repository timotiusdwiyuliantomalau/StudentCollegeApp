import { StackNavigationState, useNavigation } from "@react-navigation/native";
import { Link } from "expo-router";
import React from "react";
import { StatusBar } from "react-native";
import { Button, FlatList, Platform, SafeAreaView } from "react-native";
import { Switch, Text, TextInput, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

function notifikasi() {
  const [items, setItems] = React.useState<any>([]);
  const [dataInput, setDataInput] = React.useState({ body: "", title: "" });
  const [isPosting, setIsPosting] = React.useState(false);
  // const navigation=useNavigation<any>();
  async function fetchData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await res.json();
    setItems(result);
  }
  React.useEffect(() => {
    fetchData();
  }, []);

  async function handleSubmitPost() {
    setIsPosting(true);
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        body: dataInput.body,
        title: dataInput.title,
        id: items.length + 1,
      }),
    });
    const result = await res.json();
    console.log(dataInput);
    setIsPosting(false);
    setItems([...items, dataInput]);
  }

  return (
    <>
      
      {/* <SafeAreaView className="flex-1 pt-10 bg-red-500 px-4 flex-col space-y-8"> 
        <Link href={{pathname:'/profil',params:{name:'Timotius Dwi Malau'}}}>GO TO PROFIL</Link>
        <View className="flex-col space-y-2">
          <TextInput
            maxLength={100}
            onChangeText={(text: string) => setDataInput({...dataInput,title:text})}
            multiline
            className="bg-slate-300"
          ></TextInput>
          <TextInput
            maxLength={100}
            onChangeText={(text: string) => setDataInput({...dataInput,body:text})}
            multiline
            className="bg-slate-300"
          ></TextInput>
          <Button title={isPosting?'Posting...':'Submit'} disabled={isPosting} onPress={handleSubmitPost}></Button>
        </View>
        <FlatList
          data={items.reverse()}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <View className="h-10"></View>}
          ListEmptyComponent={<Text>Kosong..</Text>}
          ListHeaderComponent={
            <Text className="text-center text-2xl font-bold mb-4">
              List Post
            </Text>
          }
          ListFooterComponent={
            <Text className="text-center text-xl mt-4">End List</Text>
          }
          renderItem={({ item }) => (
            <Text className="bg-yellow-400">{item.body}</Text>
          )}
        ></FlatList>
      </SafeAreaView> */}
    </>
  );
}
export default notifikasi;
