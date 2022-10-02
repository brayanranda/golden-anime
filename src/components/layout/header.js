import { Link } from "react-router-dom";

export default function Login() {
  const menu = ["Nuevo", "Hombre", "Mujer"];

  return (
    <nav className="w-full bg-yellow-600">
      <ul className="w-8/12 mx-auto flex items-center justify-between">
        {menu.map((item, id) => (
          <li className="ml-10" key={id}>
            <Link to="/">{item}</Link>
          </li>
        ))}
        <li>
          <Link to="/">Mi cuenta</Link>
        </li>
      </ul>
    </nav>
  );
}
