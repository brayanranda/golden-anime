import { Link } from "react-router-dom";

export default function Login() {
  const menu = ["Nuevo", "Hombre", "Mujer"];

  return (
    <header className="w-full bg-header">
      <nav className="w-9/12 mx-auto py-3 flex justify-between font-semibold">
        <ul className="w-3/4 flex">
          {menu.map((item, id) => (
            <li className="mr-10" key={id}>
              <Link to="/">{item}</Link>
            </li>
          ))}
        </ul>
        <Link className="w-1/4 text-end" to="/">
          Mi cuenta
        </Link>
      </nav>
    </header>
  );
}
