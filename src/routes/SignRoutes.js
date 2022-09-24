import { Routes, Route } from "react-router-dom";

import LoginPage from "../pages/Authentication/LoginPage";

function SignRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />}></Route>
    </Routes>
  );
}

export default SignRoutes;
