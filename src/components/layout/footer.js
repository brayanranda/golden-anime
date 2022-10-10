import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [accesorios, setAccesorios] = useState([
    "Gorra",
    "Mascaras",
    "Morrales",
    "Billetera",
  ]);

  const [camisas, setCamisas] = useState([
    "Oversize",
    "Camisa",
    "Camiseta",
    "Polo",
  ]);

  const [pantalones, setPantalones] = useState(["Bermudas", "Pantalones"]);

  return (
    <footer className="bg-black w-full">
      <div className="w-9/12 mx-auto">
        <figure className="">
          <img className="" src="images/logo.png" />
          <figcaption className="">
            <i className="fas fa-facebook"></i>
            <i className="fas fa-discord"></i>
            <i className="fas fa-telegram"></i>
            <i className="fas fa-whatsapp"></i>
          </figcaption>
        </figure>
        <ul className="">
          {pantalones.map((pantalon, id) => {
            <li key={id} className="">
              <Link className="" to="/">
                {pantalon}
              </Link>
            </li>;
          })}
        </ul>
        <ul className="">
          {accesorios.map((accesorio, id) => {
            <li key={id} className="">
              <Link className="" to="/">
                {accesorio}
              </Link>
            </li>;
          })}
        </ul>
        <ul>
          {camisas.map((camisa, id) => {
            <li key={id} className="">
              <Link className="" to="/">
                {camisa}
              </Link>
            </li>;
          })}
        </ul>
      </div>
      <p>© 2022-2024 Golden Anime.</p>
    </footer>
  );
}
