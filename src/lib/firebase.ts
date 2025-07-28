import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  projectId: "cashflow-insights-465n8",
  appId: "1:131968140673:web:a0605abea6aca758c51480",
  storageBucket: "cashflow-insights-465n8.firebasestorage.app",
  apiKey: "AIzaSyDrFU_gODwpVAjZ8Wj4FXx1Sbuz7gvPAK8",
  authDomain: "cashflow-insights-465n8.firebaseapp.com",
  messagingSenderId: "131968140673"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { app, db };
