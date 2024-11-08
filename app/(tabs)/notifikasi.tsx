import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "expo-router";
import React from "react";
import { TouchableHighlight, Text, View } from "react-native";

const App = () => {
  const navigation = useNavigation();
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
  }, [navigation]);

  return (
    <TouchableHighlight
      onPress={() => console.log("Pressed!")}
      underlayColor="green"
    >
      <Text>Press me!</Text>
    </TouchableHighlight>
  );
};
export default App;
