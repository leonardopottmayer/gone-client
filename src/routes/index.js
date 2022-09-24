import { BrowserRouter as Router } from "react-router-dom";

import SignRoutes from "./SignRoutes";
import UserRoutes from "./UserRoutes";
// import AdminRoutes from "./AdminRoutes";

function Routes() {
  return (
    <Router>
      <SignRoutes />
      {/* <AdminRoutes /> */}
      <UserRoutes />
    </Router>
  );
}

export default Routes;
