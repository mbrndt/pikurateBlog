// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import * as admin from "firebase-admin";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyAmkan0aPbRo7Xi9O1tpePQDu_iS_WFjTs",
	authDomain: "pikurate-blog.firebaseapp.com",
	projectId: "pikurate-blog",
	storageBucket: "pikurate-blog.appspot.com",
	messagingSenderId: "141017044526",
	appId: "1:141017044526:web:dbaed9dcaa0e552bb371bf",
	measurementId: "G-Z3NK64B8N2",
};

if (!admin.apps.length) {
	admin.initializeApp({
		credential: admin.credential.cert({
			projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
			clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
			privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
		}),
	});
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = admin.firestore();

export { db };
