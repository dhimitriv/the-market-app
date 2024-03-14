import Logo from "../pages/Logo";

function Navigation() {
  return (
    <nav className="flex">
      <ul className="flex">
        <li className="text-[12px]">
          <Logo />
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
