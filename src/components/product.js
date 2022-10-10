import { Link } from "react-router-dom";

export default function product() {
  let product =
    "https://images.unsplash.com/photo-1503341733017-1901578f9f1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80";
  let QR =
    "https://www.ocu.org/-/media/ta/images/qr-code.png?rev=2e1cc496-40d9-4e21-a7fb-9e2c76d6a288&hash=AF7C881FCFD0CBDA00B860726B5E340B&mw=960";

  return (
    <figure className="p-3 w-full duration-300 transform hover:scale-105 text-white hover:text-black cursor-pointer hover:bg-white">
      <img
        className="w-full h-44 xl:h-64 object-cover"
        src={product}
        alt="product"
      />
      <figcaption className="py-4 flex items-center justify-between">
        <div>
          <h3>Camisa Oversize</h3>
          <p className="text-3xl font-semibold">$ 59.999</p>
        </div>
        <img className="w-14" src={QR} alt="QR" />
      </figcaption>
    </figure>
  );
}
