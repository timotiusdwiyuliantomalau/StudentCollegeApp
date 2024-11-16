import React from "react";
import { StatusBar, StyleSheet, Text } from "react-native";
import { TextInput, View } from "react-native";
import Email from "react-native-vector-icons/Entypo";
import Username from "react-native-vector-icons/Entypo";
import Password from "react-native-vector-icons/Entypo";
import ConfirmPassword from "react-native-vector-icons/Entypo";
import { handleLogin, handleRegister } from "@/config/utils/service";
import { Button } from "react-native";
export default function GoogleAuthScreen({promptAsync}:any) {
  const [isLoginForm, setIsLoginForm] = React.useState(true);
  const [input, setInput] = React.useState({
    email: "",
    password: "",
    username: "",
    confirmPassword: "",
  });
  return (
    <>
      {isLoginForm ? (
        <View
          style={{
            flex: 1,
            paddingTop: StatusBar.currentHeight,
            alignItems: "center",
            backgroundColor: "white",
            transform: [{ translateY: 150 }],
          }}
        >
          <Text style={{ fontSize: 30, fontWeight: "bold" }}>
            Sign to Your Account
          </Text>
          <View style={{ padding: 20, gap: 10, width: "80%" }}>
            <View style={style.elementInputs}>
              <Email name="email" size={20}></Email>
              <TextInput
                onChangeText={(text) => setInput({ ...input, email: text })}
                value={input.email}
                placeholder="Email"
              ></TextInput>
            </View>
            <View style={style.elementInputs}>
              <Password name="lock" size={20}></Password>
              <TextInput
                secureTextEntry={true}
                onChangeText={(text) => setInput({ ...input, password: text })}
                value={input.password}
                placeholder="Password"
              ></TextInput>
            </View>
            <View className="bg-yellow-400  px-4 py-2 rounded-md mt-3">
              <Text
                onPress={async () => {
                  await handleLogin(input.email, input.password);
                }}
                className="text-center font-bold"
              >
                Sign In
              </Text>
            </View>
            <Text className="text-center">
              Not have account?{" "}
              <Text
                onPress={() => setIsLoginForm(false)}
                className="text-blue-800 font-medium"
              >
                Register
              </Text>
            </Text>
            <Button onPress={()=>promptAsync()} title="Login melalui Google" color={"blue"}></Button>
          </View>
        </View>
      ) : (
        <View
          style={{
            flex: 1,
            paddingTop: StatusBar.currentHeight,
            alignItems: "center",
            backgroundColor: "white",
            transform: [{ translateY: 100 }],
          }}
        >
          <Text style={{ fontSize: 30, fontWeight: "bold" }}>Register</Text>
          <View style={{ padding: 20, gap: 10, width: "80%" }}>
            <View style={style.elementInputs}>
              <Email name="email" size={20}></Email>
              <TextInput
                onChangeText={(text) => setInput({ ...input, email: text })}
                placeholder="Email"
              ></TextInput>
            </View>
            <View style={style.elementInputs}>
              <Username name="user" size={20}></Username>
              <TextInput
                onChangeText={(text) => setInput({ ...input, username: text })}
                placeholder="Username"
              ></TextInput>
            </View>
            <View style={style.elementInputs}>
              <Password name="lock" size={20}></Password>
              <TextInput
                secureTextEntry={true}
                onChangeText={(text) => setInput({ ...input, password: text })}
                placeholder="Password"
              ></TextInput>
            </View>
            <View style={[style.elementInputs, { marginBottom: 10 }]}>
              <ConfirmPassword name="lock" size={20}></ConfirmPassword>
              <TextInput
                secureTextEntry={true}
                onChangeText={(text) =>
                  setInput({ ...input, confirmPassword: text })
                }
                placeholder="Confirm Password"
              ></TextInput>
            </View>
            <View className="bg-yellow-400  px-4 py-2 rounded-md">
              <Text
                onPress={async () =>
                  await handleRegister(
                    input.username,
                    input.email,
                    input.password,
                    input.confirmPassword
                  )
                }
                className="text-center font-bold"
              >
                Sign Up
              </Text>
            </View>
            <Text className="text-center">
              Already have an account?{" "}
              <Text
                onPress={() => {
                  setIsLoginForm(true);
                }}
                className="text-blue-800 font-medium"
              >
                Login
              </Text>
              <Button onPress={()=>promptAsync()} title="Login melalui Google" color={"blue"}></Button>
            </Text>
          </View>
        </View>
      )}
    </>
  );
}
const style = StyleSheet.create({
  elementInputs: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});
