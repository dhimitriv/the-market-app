import { useEffect, useState } from "react";
import Button from "../components/Button";
import { useAuthentication } from "../components/Authentication";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("dhimitrivincani@gmail.com");
  const [password, setPassword] = useState("abc123");
  const navigate = useNavigate();

  const { login, isAuthenticated } = useAuthentication();

  function handleSubmit(e) {
    e.preventDefault();

    if (email && password) login(email, password);
  }

  useEffect(
    function () {
      if (isAuthenticated) navigate("/app", { replace: true });
    },
    [isAuthenticated, navigate]
  );

  return (
    <form
      className=" flex justify-center items-center h-[500px]"
      onSubmit={handleSubmit}
    >
      <div className="grid w-[270px] my-auto gap-2.5">
        <div className=" flex justify-between mb-1 ">
          <label className="text-white p-2" htmlFor="email">
            Email:
          </label>
          <input
            className="p-2 rounded bg-[#ffffff75] font-sans"
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="flex justify-between">
          <label className="text-white p-1.5" htmlFor="email">
            Password:
          </label>
          <input
            className="p-2 rounded bg-[#ffffff75] font-sans"
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div className="m-auto pt-3">
          <Button>Log in</Button>
        </div>
      </div>
    </form>
  );
}

export default Login;
