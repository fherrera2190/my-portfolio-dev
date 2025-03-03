import profileImage from "../assets/profile.jpg";
export const About = () => {
  return (
    <section id="about" className="w-full text-black px-[12px] py-[60px]">
      {/* Section title */}
      <div className="mb-[60px]">
        <h2 className="relative font-heading-font text-[32px] font-bold pb-[20px] mb-[20px] leading-tight">
          About
          <span className="absolute bottom-0 left-0 w-[50px] h-[3px] bg-[var(--accent-color)]"></span>
        </h2>
        <p className="font-default-roboto">
          ¡Hola! Soy Fernando Herrera, desarrollador web Full Stack con formación en
          Ingeniería Informática y un gran interés por la electrónica y la
          programación. Actualmente, sigo ampliando mis conocimientos mientras
          estudio y desarrollo proyectos. Busco oportunidades enfocadas
          exclusivamente en desarrollo, donde pueda aportar mis conocimientos y
          seguir creciendo como profesional.
        </p>
      </div>
      <div>
        <div className="rounded-2xl overflow-hidden">
          <img src={profileImage} alt="" />
        </div>
      </div>
    </section>
  );
};
