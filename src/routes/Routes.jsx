import { Routes, Route } from "react-router-dom";
import React from "react";
import Layout from "../layout/Layout";
import Homepage from "../page/HomePage";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
