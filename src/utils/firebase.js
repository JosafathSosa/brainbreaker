// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyDfc2vpX6bLaA2g9p-vtt2otBvIeiFze7M",
  authDomain: "brainbreaker-8a8ef.firebaseapp.com",
  projectId: "brainbreaker-8a8ef",
  storageBucket: "brainbreaker-8a8ef.appspot.com",
  messagingSenderId: "1087477850154",
  appId: "1:1087477850154:web:5a7e170ffba7dc51f32353",
  measurementId: "G-R3MVN93CE5",
};

// Initialize Firebase
export const initFirebase = initializeApp(firebaseConfig);
export const auth = initializeAuth(initFirebase, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
export const db = getFirestore(initFirebase);
