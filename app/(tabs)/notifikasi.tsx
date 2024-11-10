import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "expo-router";
import React, { useContext } from "react";
import { Alert } from "react-native";
import { TouchableHighlight, Text, View } from "react-native";
import {
  GestureHandlerRootView,
  Swipeable,
} from "react-native-gesture-handler";
import { AuthContext } from "../auth_provider";

const LeftSwipeActions = () => (
  <View className="flex-1 bg-green-500 justify-center items-center">
    <Text className="text-white font-bold">Add</Text>
  </View>
);

const App = () => {
  const navigation = useNavigation();
  const { user, setUser } = useContext(AuthContext);
  React.useEffect(() => {
    navigation.setOptions({
      headerBackground: () => (
        <LinearGradient
          colors={["#FFB700", "yellow"]}
          style={{
            flex: 1,
          }}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
        />
      ),
    });
  }, []);
  function handleSwipe() {
    Alert.alert("Halo");
  }

  return (
    <GestureHandlerRootView>
      <Swipeable
        onSwipeableOpen={() => handleSwipe()}
        renderLeftActions={LeftSwipeActions}
      >
        <TouchableHighlight underlayColor="green">
          <Text className="h-32 bg-white">Press me!</Text>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
};
export default App;

// import React from "react";
// import { View, Text, Alert } from "react-native";
// import {
//   GestureHandlerRootView,
//   Swipeable,
// } from "react-native-gesture-handler";

// const LeftSwipeActions = () => <View className="flex-1"></View>;

// const RightSwipeActions = () => {
//   const handleSwipe = () => {
//     Alert.alert("Left swipe action triggered");
//     React.useEffect(() => {
//       handleSwipe();
//     }, []);
//     return (
//       <View className="flex-1 bg-red-500 justify-center items-center">
//         <Text className="text-white font-bold">Delete</Text>
//       </View>
//     );
//   };
// };

// const SwipeableRow = ({ text }: any) => {
//   const handleSwipe = () => {
//     Alert.alert("Left swipe action triggered");
//     console.log("masuk");
//   };

//   return (
//     <Swipeable
//       // renderLeftActions={}
//       renderRightActions={LeftSwipeActions}
//       onSwipeableOpen={() => handleSwipe()}
//     >
//       <View className="p-4 bg-white border-b border-gray-200">
//         <Text>{text}</Text>
//       </View>
//     </Swipeable>
//   );
// };

// const App = () => (
//   <GestureHandlerRootView className="flex-1">
//     <SwipeableRow text="Geser kiri atau kanan!" />
//   </GestureHandlerRootView>
// );

// export default App;
