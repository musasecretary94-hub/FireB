
  <script type="module">
    import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
    import {
      getFirestore,
      collection,
      addDoc
    } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-firestore.js";

    const firebaseConfig = {
      apiKey: "AIzaSyBBfaYnhwj5CXm-lQ6ejRUx5_Ds6nqE1e4",
      authDomain: "rahma-medicine-store.firebaseapp.com",
      projectId: "rahma-medicine-store",
      storageBucket: "rahma-medicine-store.firebasestorage.app",
      messagingSenderId: "328415602459",
      appId: "1:328415602459:web:f15ac679aeca9d7b2cd5be"
    };

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    async function testFirebase() {
      await addDoc(collection(db, "test"), {
        status: "Firebase yana aiki",
        createdAt: new Date().toISOString()
      });
      alert("✅ Firebase ya haɗu da website");
    }

    testFirebase();
  </script>
