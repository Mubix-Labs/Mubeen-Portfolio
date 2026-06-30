// Firebase is loaded lazily (dynamic import) so its SDK never weighs down
// the initial page load — it's only fetched when a visitor actually
// submits the contact form or sends a chat message.

const firebaseConfig = {
 apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,

};

let dbPromise = null;

async function getDb() {
  if (!dbPromise) {
    dbPromise = (async () => {
      const { initializeApp } = await import("firebase/app");
      const { getFirestore } = await import("firebase/firestore");
      const app = initializeApp(firebaseConfig);
      return getFirestore(app);
    })();
  }
  return dbPromise;
}

export async function saveContactMessage({ name, email, message }) {
  const { collection, addDoc, serverTimestamp } = await import("firebase/firestore");
  const db = await getDb();
  await addDoc(collection(db, "messages"), {
    name,
    email,
    message,
    createdAt: serverTimestamp(),
  });
}

export async function saveChatMessage({ role, text }) {
  const { collection, addDoc, serverTimestamp } = await import("firebase/firestore");
  const db = await getDb();
  await addDoc(collection(db, "chats"), {
    role,
    text,
    createdAt: serverTimestamp(),
  });
}
