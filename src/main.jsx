import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Daftarkan service worker (lihat public/sw.js) supaya aplikasi bisa di-install
// ke home screen dan berjalan seperti native app di HP (mode standalone, ikon sendiri).
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    const swUrl = `${import.meta.env.BASE_URL}sw.js`;
    navigator.serviceWorker.register(swUrl).catch(() => {
      // Diamkan kalau gagal (mis. saat development di http non-secure context tertentu) —
      // aplikasi tetap berjalan normal tanpa PWA install prompt.
    });
  });
}
