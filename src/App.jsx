import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import Pokemon from "./pages/Pokemon";
import Liked from "./pages/Liked";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="liked" element={<Liked />} />
        <Route path="pokemon/:name" element={<Pokemon />} />
      </Route>
    </Routes>
  );
}

export default App;
