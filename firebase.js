// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuwqjs6wK5afre9cp4M4jBGkrz_N35lkA",
  authDomain: "vedantstagram.firebaseapp.com",
  projectId: "vedantstagram",
  storageBucket: "vedantstagram.appspot.com",
  messagingSenderId: "378576398691",
  appId: "1:378576398691:web:56198362c84806c5150b56",
  measurementId: "G-HVX21K0JCC"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()

export {app, db, storage}