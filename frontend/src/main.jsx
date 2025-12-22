import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/Store.js";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "react-hot-toast";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* 🔥 FORCE TOAST ABOVE EVERYTHING */}
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 2000,
            style: {
              zIndex: 9999999,     // navbar वर
              marginTop: "90px",   // navbar खाली
              fontWeight: "600",
            },
          }}
        />

        <App />
      </PersistGate>
    </Provider>
  </StrictMode>
);
