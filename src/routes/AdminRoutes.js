import { Routes, Route } from "react-router-dom";

import AdminPage from "../pages/Admin/AdminPage";

function AdminRoutes() {
  return (
    <Routes>
      <Route path="/admin" exact element={<AdminPage />}></Route>
    </Routes>
  );
}

export default AdminRoutes;
