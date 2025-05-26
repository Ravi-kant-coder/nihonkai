import { CookingPot } from "lucide-react";

const StudyJapanLow = () => {
  return (
    <div className="lg:h-[28vh] lg:m-2 m-1 lg:w-[90vw] w-[95vw] mx-auto bg-green-100 dark:bg-black/80 overflow-hidden rounded-xl flex">
      <div>
        <img
          src={"/Night.jpg"}
          alt="Japan Visa"
          className="lg:w-[30vw] lg:h-[30vh] w-[40vw] h-[25vh] object-cover dark:opacity-60"
        />
      </div>

      <div className="w-full lg:p-4 p-2 lg:px-10">
        <h2 className="lg:text-2xl text-lg font-semibold text-gray-800 dark:text-white">
          About Food in Japan
        </h2>

        <span className="text-black block dark:text-gray-300 text-sm ">
          Food in Japanese society is the biggest reason that Japanese people
          have a life span of 90 years. Japanese cuisine is renowned for its
          exquisite balance of flavors, making it irresistibly tasty.
          <span className="hidden lg:block">
            {" "}
            Japanese dishes offer a delightful harmony of textures and aromas
            that satisfy both senses and soul. From hearty ramen to comforting
            donburi, each dish reflects a rich culinary respect for ingredients.
            Due to its quality and craftsmanship, every bite promises an
            experience that is as nourishing as it is memorable, making it a
            favorite among food enthusiasts worldwide.
          </span>
        </span>

        <a
          href={"https://www.learnjapanesedelhi.com/study-in-japan"}
          target="_blank"
          className="mt-2 lg:w-[20vw] lg:text-lg text-sm items-center justify-start w-full px-2 lg:p-2 dark:bg-gray-400 dark:text-black bg-gray-900 cursor-pointer flex hover:bg-black text-white py-1 lg:px-5 rounded transition duration-200"
        >
          <CookingPot className="mr-2" />
          Learn More About Food
        </a>
      </div>
    </div>
  );
};

export default StudyJapanLow;
