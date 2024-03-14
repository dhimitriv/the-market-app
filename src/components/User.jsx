import { useNavigate } from "react-router-dom";
import { useAuthentication } from "./Authentication";
import Button from "./Button";

function User() {
  const { user, logout } = useAuthentication();
  const navigate = useNavigate();

  // if (!user) return;

  function handleClick() {
    logout();
    navigate("/");
  }

  return (
    <div className="text-white p-1 bg-[#ffffff75] w-[230px]">
      <span className="p-1">Welcome, {user.name}!</span>
      <Button onClick={handleClick}>Log out</Button>
    </div>
  );
}

export default User;
