import { Link } from "react-router-dom";

export default function Login() {
  const menu = ["Nuevo", "Hombre", "Mujer"];
  let product = "";
  let QR = "";

  return (
    <figure className="p-5">
      <img className="w-full" src={product} alt="product" />
      <figcaption className="text-white">
        <div>
          <h3>Camisa Oversize</h3>
          <p className="">$ 59.999</p>
        </div>
        <img src={QR} alt="QR" />
      </figcaption>
    </figure>
  );
}
