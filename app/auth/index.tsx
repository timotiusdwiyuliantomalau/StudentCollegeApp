import React from "react";
import { StyleSheet } from "react-native";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithCredential,
} from "firebase/auth";
import GoogleAuthScreen from "./googleAuthScreen";
import { auth } from "@/config/firebase/initialize";

WebBrowser.maybeCompleteAuthSession();
const AuthScreen = () => {
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId:
      "137744606-mgitrkrte509j8jpl0gma3vdvruj63np.apps.googleusercontent.com",
  });
  React.useEffect(() => {
    if (response?.type == "success") {
      const { id_token } = response.params;
      const credentials = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credentials);
    }
  }, []);
  return <GoogleAuthScreen promptAsync={promptAsync} />;
};

const style = StyleSheet.create({
  elementInputs: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});

export default AuthScreen;
