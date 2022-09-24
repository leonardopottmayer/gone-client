import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage/HomePage";

function UserRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
    </Routes>
  );
}

export default UserRoutes;
