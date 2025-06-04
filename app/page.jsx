import Navbar from "@/components/Navbar";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
});

const Home = () => {
  return (
    <div className="relative w-screen overflow-hidden h-screen">
      <Navbar />
      <img
        src={"japanese-gate.jpg"}
        className="object-cover fixed w-full h-screen dark:opacity-40 pointer-events-none z-1"
        alt="Nihonkai Nihongomax"
      />
      <a
        className="absolute left-30 lg:text-6xl text-4xl lg:top-50 top-40 inline-block btn-animate dark:text-black z-1"
        href={"https://www.learnjapanesedelhi.com/"}
        target="_blank"
      >
        <span className={` ${pacifico.className}`}>nihonkai</span>
      </a>

      <a
        className="absolute right-30 lg:text-6xl text-4xl top-60 inline-block btn-animate dark:text-black z-1"
        href={"https://www.learnjapanesedelhi.com/"}
        target="_blank"
      >
        <span className={` ${pacifico.className}`}>nihongomax</span>
      </a>

      <h3 className="absolute lg:left-100 bottom-30 left-5 lg:text-4xl text-xl lg:bottom-20 text-animate dark:text-black z-1">
        <span className={` ${pacifico.className}`}>
          your gateway to japan or MNCs in india
        </span>
      </h3>
    </div>
  );
};
export default Home;
