import {
  addDoc,
  collection,
  doc,
  getDocs,
  getFirestore,
  updateDoc,
} from "firebase/firestore";
import app, { auth } from "../firebase/initialize";
import CryptoJS from "crypto-js";
import { Alert } from "react-native";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from "@/app/auth_provider";
import { ActivityIndicator } from "react-native";
import { err } from "react-native-svg";

const firestore = getFirestore(app);

export async function getJadwalKuliah(callback: any) {
  const snapshot = await getDocs(collection(firestore, "college_app"));
  const result = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  callback({ data: result });
}

export async function getKalenderAkademik(callback: any) {
  const snapshot = await getDocs(collection(firestore, "kalender_akademik"));
  const result = snapshot.docs.map((data) => ({
    id: data.id,
    ...data.data(),
  }));
  callback({ data: result });
}
export async function getLayananTiket(callback: any) {
  const snapshot = await getDocs(collection(firestore, "layanan_tiket"));
  const result = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  callback({ data: result });
}
export async function addTiketLayanan(id: any, data: []) {
  await updateDoc(doc(firestore, "layanan_tiket", id), { ticket: data });
}

export async function handleRegister(
  username: string,
  email: string,
  password: string,
  confirmPassword: string
) {
  try {
    if (
      username.length > 0 &&
      email.length > 0 &&
      password.length > 0 &&
      confirmPassword.length > 0
    ) {
      createUserWithEmailAndPassword(auth, email, password).then(res=>signOut(auth));      
      return Alert.alert("Berhasil menambahkan user!");
    }
    Alert.alert("Semua field harus diisi!");
  } catch (error: any) {
    Alert.alert(error.message.split(":")[1]);
  }
}
export async function handleLogin(email: string, password: string) {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error: any) {
    Alert.alert(error.message.split(":")[1]);
  }
}
