import Product from "./product";

const products = () => {
  return (
    <section className="mx-auto w-9/12 py-16">
      <article className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-14">
        {[...Array(8)].map((el, i) => (
          <Product key={i} />
        ))}
      </article>
    </section>
  );
};

export default products;
