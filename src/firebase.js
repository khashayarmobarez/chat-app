import firebase from 'firebase/app'
import 'firebase/auth'

export const auth = firebase.initializeApp(
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    {
      apiKey: "AIzaSyCJzYcKqX3EAmLQ5DFr7NdyU4x9GiyEst8",
      authDomain: "khashayar-chatapp.firebaseapp.com",
      projectId: "khashayar-chatapp",
      storageBucket: "khashayar-chatapp.appspot.com",
      messagingSenderId: "936044827262",
      appId: "1:936044827262:web:3f3f3db52065660fb4fe2f"
    // measurementId: "G-JP9ZRJB8Q3"
  }).auth();