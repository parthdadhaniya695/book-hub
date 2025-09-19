import {
    getApps,
    initializeApp
} from 'firebase/app'
import {
    getStorage, ref
} from 'firebase/storage'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASEAPIKEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASEAUTHDOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASEPROJECTID,
  storageBucket: "bookhub-9dbdc.firebasestorage.app",
  messagingSenderId: "128688697818",
  appId: "1:128688697818:web:cee139afa72f661ffe50e3"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0]

const storage = getStorage(app)
export const storageRef = (token: string) => ref(storage, token)