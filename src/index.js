import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import CategoryPage from "./CategoryPage";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/community"
          element={<CategoryPage title="Community" description="Updates, discussions, and news for the Mythflair community." />}
        />
        <Route
          path="/global-community"
          element={<CategoryPage title="Global Community" description="Worldwide Mythflair news, collaborations, and events." />}
        />
        <Route
          path="/universe-lore"
          element={<CategoryPage title="Universe Lore" description="Deep dives into the Mythflair universe, worlds, and timelines." />}
        />
        <Route
          path="/creator-updates"
          element={<CategoryPage title="Creator Updates" description="Personal notes, devlogs, and behind-the-scenes posts." />}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
