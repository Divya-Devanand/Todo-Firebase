import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyCqpOWamBkFFJyRH1JieBEFkwRDVDQ27C8",
        authDomain: "todo-app-e1ff0.firebaseapp.com",
        projectId: "todo-app-e1ff0",
        storageBucket: "todo-app-e1ff0.appspot.com",
        messagingSenderId: "1044048324",
        appId: "1:1044048324:web:4be8f4f46e6109abc8dc91",
        measurementId: "G-NLG69GVZDC"
})

const db= firebaseApp.firestore();
const auth = firebase.auth();

export default db;

// const firebaseConfig = {
//     apiKey: "AIzaSyCqpOWamBkFFJyRH1JieBEFkwRDVDQ27C8",
//     authDomain: "todo-app-e1ff0.firebaseapp.com",
//     projectId: "todo-app-e1ff0",
//     storageBucket: "todo-app-e1ff0.appspot.com",
//     messagingSenderId: "1044048324",
//     appId: "1:1044048324:web:4be8f4f46e6109abc8dc91",
//     measurementId: "G-NLG69GVZDC"
//   };

