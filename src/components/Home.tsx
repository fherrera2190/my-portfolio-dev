export const Home = () => {
  return (
    <section
      id="home"
      className={`relative h-screen bg-[url('./jujuy.jpg')] bg-cover bg-center`}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="absolute text-white p-10">
        <h1 className="text-4xl font-bold">
          ¡Hola, bienvenido a mi portafolio!
        </h1>
        <p className="mt-4">Este es un efecto de oscurecimiento.</p>
      </div>
    </section>
  );
};
