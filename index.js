
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/12.8.0/firebase-firestore.js";

// 🔹 Firebase config naka
const firebaseConfig = {
  apiKey: "AIzaSyBBfaYnhwj5CXm-lQ6ejRUx5_Ds6nqE1e4",
  authDomain: "rahma-medicine-store.firebaseapp.com",
  projectId: "rahma-medicine-store",
  storageBucket: "rahma-medicine-store.firebasestorage.app",
  messagingSenderId: "328415602459",
  appId: "1:328415602459:web:f15ac679aeca9d7b2cd5be"
};

// 🔹 Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 🔹 Test function tare da error handling
async function testFirebase() {
  try {
    const docRef = await addDoc(collection(db, "test"), {
      status: "Firebase yana aiki",
      createdAt: new Date().toISOString()
    });
    alert("✅ Firebase ya haɗu da website\nDoc ID: " + docRef.id);
  } catch (err) {
    console.error("❌ ERROR:", err);
    alert("❌ ERROR: " + err.message);
  }
}

testFirebase();
