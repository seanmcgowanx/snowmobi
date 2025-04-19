import { initializeApp } from "firebase/app";
import { getFirestore, 
        collection, 
        getDocs, 
        doc, 
        getDoc,
        query,
        where
     } from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyDFvU98CP4rX9e-4PXQLVrME37M6Qv5NWQ",
  authDomain: "snowmobi.firebaseapp.com",
  projectId: "snowmobi",
  storageBucket: "snowmobi.firebasestorage.app",
  messagingSenderId: "330687245960",
  appId: "1:330687245960:web:b4853ec716be1b5881393d",
  measurementId: "G-JTRS1HD5WH"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const snowmobilesCollectionRef = collection(db, "snowmobiles")

export async function getSnowmobile(id) {
    const docRef = doc(db, "snowmobiles", id)
    const snapshot = await getDoc(docRef)
    const snowmobile = {
        ...snapshot.data(),
        id: snapshot.id
    }
    return snowmobile
}

export async function getSnowmobiles() {
    const snapshot = await getDocs(snowmobilesCollectionRef)
    const snowmobiles = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return snowmobiles
}

export async function getHostSnowmobiles() {
    const q = query(snowmobilesCollectionRef, where("hostId", "==", "123"))
    const snapshot = await getDocs(q)
    const snowmobiles = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return snowmobiles
}

export function loginUser(loginFormData) {
    if (loginFormData.email === "" && loginFormData.password === "") {
        return true
    } else {
        return false
    }
    
}