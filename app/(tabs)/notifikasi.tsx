import React from "react";
import { Button, FlatList, SafeAreaView } from "react-native";
import { Switch, Text, TextInput, View } from "react-native";

function notifikasi() {
  const [items, setItems] = React.useState<any>([]);
  const [dataInput, setDataInput] = React.useState({body:'',title:''});
  const [isPosting,setIsPosting]=React.useState(false);
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
    const res=await fetch('https://jsonplaceholder.typicode.com/posts',{
      method:'POST',
      body:JSON.stringify({
        body:dataInput.body,
        title:dataInput.title,
        id:items.length+1
      }),
    });
    const result=await res.json();
    console.log(dataInput);
    setIsPosting(false);
    setItems([...items,dataInput]);
  }

  return (
    <>
      <SafeAreaView className="flex-1 mt-12 bg-red-500 p-5 flex-col space-y-8"> 
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
      </SafeAreaView>
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
    </>
  );
}
export default notifikasi;
