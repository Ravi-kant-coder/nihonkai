import { HandCoins } from "lucide-react";

const StudyJapanLwst = () => {
  return (
    <div className="lg:h-[28vh] lg:m-2 m-1 lg:w-[90vw] w-[95vw] mx-auto bg-red-200 dark:bg-black/80 overflow-hidden rounded-xl flex">
      <div>
        <img
          src={"/sakura.jpeg"}
          alt="Japan Visa"
          className="lg:w-[30vw] lg:h-[30vh] w-[40vw] h-[25vh] object-cover dark:opacity-60"
        />
      </div>
      <div className="w-full lg:p-4 p-2 lg:px-10">
        <h2 className="lg:text-2xl text-lg font-semibold text-gray-800 dark:text-white">
          About Monthly Expenses and Income in Japan
        </h2>
        <p className="text-black dark:text-gray-300 text-sm hidden lg:block">
          Average monthly income in Japan with part-time jobs (arubaito)
          offering around ¥1000 per hour. While essentials like food and
          transport are reasonably priced, rent and utilities can be higher in
          major cities like Tokyo or Osaka. Students often manage their expenses
          through arubaito.
        </p>
        <ul className="pl-4 list-disc list-outside text-black dark:text-gray-300 text-sm space-y-1 lg:leading-none">
          <li>
            <span className="hidden lg:inline">
              Carefully look and become familiar with the prices for first few
              weeks.
            </span>{" "}
            Big Malls can be less expensive.
          </li>
          <li>
            Calculate your income and expenses,
            <span className="hidden lg:inline">
              {" "}
              regularly till you become expert in managing. Also{" "}
            </span>{" "}
            take help of the table given.{" "}
          </li>
        </ul>

        <a
          href={"https://www.learnjapanesedelhi.com/study-in-japan"}
          target="_blank"
          className="mt-2 lg:w-[22vw] w-full lg:text-lg text-sm px-2 lg:p-2 dark:bg-gray-400 dark:text-black bg-gray-900 cursor-pointer flex items-center justify-start hover:bg-black text-white py-1 lg:px-5 rounded transition duration-200"
        >
          <HandCoins className="mr-2" />
          Income & Expenses Details
        </a>
      </div>
    </div>
  );
};

export default StudyJapanLwst;
