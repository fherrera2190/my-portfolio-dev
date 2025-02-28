import "./App.css";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="fixed z-[-100]  bg-[url('./assets/bg.jpg')] w-full bg-no-repeat bg-cover bg-top min-h-screen">
      {/* <div className="max-w-[1280px] mx-auto"> */}
        <Header />
      {/* </div> */}
    </div>
  );
}

export default App;
