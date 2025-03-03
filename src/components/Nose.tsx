import profile from "../assets/5362647.jpg";

export const Nose = () => {
  return (
    <div className="fixed z-[-100]  bg-[url('./assets/bg.jpg')] w-full bg-no-repeat bg-cover bg-top min-h-screen">
      {/* <div className="max-w-[1280px] mx-auto"> */}
      <header className="grid grid-cols-1 lg:grid-cols-2 place-items-center p-10 bg-[rgba(38,37,48,0.451)] backdrop-blur-[.6rem] min-h-screen">
        <div className="flex justify-center items-center ">
          <img
            className=" rounded-xl w-[250px] lg:w-[300px]"
            src={profile}
            alt="profile"
          />
        </div>
        <div>
          <p className="text-subtitle font-inter tracking-[.25rem]">
            DESARROLLADOR FULL STACK
          </p>
          <h1 className="text-4xl">Fernando Martín Herrera</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
            harum officia porro incidunt saepe voluptates adipisci illo corrupti
            maxime, eos atque assumenda tenetur nesciunt quo quae quas ducimus
          </p>
          <div>
            <span>logo1</span>
            <span>logo2</span>
            <span>logo3</span>
            <span>logo4</span>
          </div>
        </div>
      </header>
      {/* </div> */}
    </div>
  );
};
