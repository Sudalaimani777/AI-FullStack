import dotenv from "dotenv";
import { initializeApp, cert, getApps, type App } from "firebase-admin/app";
import { getAuth, type Auth } from "firebase-admin/auth";

dotenv.config();

let firebaseApp: App | undefined;
let firebaseAuth: Auth | undefined;

if (!getApps().length) {
    const projectId = process.env.FIREBASE_PROJECT_ID;
    const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
    // Replace escaped newlines if passed in via string env
    const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n");

    if (projectId && clientEmail && privateKey) {
        firebaseApp = initializeApp({
            credential: cert({
                projectId,
                clientEmail,
                privateKey
            })
        });
        firebaseAuth = getAuth(firebaseApp);
    } else {
        console.warn("⚠️ Firebase Admin credentials not found in environment variables.");
    }
} else {
    firebaseApp = getApps()[0];
    if (firebaseApp) {
        firebaseAuth = getAuth(firebaseApp);
    }
}

export { firebaseAuth, firebaseApp };