import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthentication } from "../components/Authentication";

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuthentication();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isAuthenticated) navigate("/");
    },
    [isAuthenticated, navigate]
  );

  return isAuthenticated ? children : null;
}

export default ProtectedRoute;
