const New = () => {
  let url =
    "https://images.unsplash.com/photo-1601850494422-3cf14624b0b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80";
  return (
    <section className="text-center mx-auto w-full bg-white py-20">
      <h1 className="text-5xl font-semibold">Nuestra nueva colección</h1>
      <p className="text-6xl font-bold text-gradiant">Golden anime</p>
      <article className="flex justify-between mt-40">
        <img
          className="w-1/4 object-cover hover:shadow-lg hover:shadow-pink-500/50 duration-300 hover:scale-110 delay-600"
          src={url}
        />
        <img
          className="w-1/3 object-cover hover:shadow-lg hover:shadow-pink-500/50 duration-300 hover:scale-150 delay-600 transform scale-125 -translate-y-10"
          src={url}
        />
        <img
          className="w-1/4 object-cover hover:shadow-lg hover:shadow-pink-500/50 duration-300 hover:scale-110 delay-600"
          src={url}
        />
      </article>
    </section>
  );
};

export default New;
