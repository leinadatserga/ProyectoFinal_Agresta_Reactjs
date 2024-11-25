import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.jsx";
import { initializeApp } from "firebase/app";
import { apiKey, authDomain, projectId, storageBucket, messagingSenderId, appId, measurementId } from "./components/Variables.jsx";

const firebaseConfig = {
    apiKey,
    authDomain,
    projectId,
    storageBucket,
    messagingSenderId,
    appId,
    measurementId
  };

initializeApp(firebaseConfig);
createRoot(document.getElementById("root")).render(
    <App />
);
