import { FileInput } from "lucide-react";

const StudyJapanAbv = () => {
  return (
    <div className="lg:h-[28vh] lg:m-2 m-1 lg:w-[90vw] w-[95vw] mx-auto bg-blue-100 dark:bg-black/80 overflow-hidden rounded-xl flex">
      <div>
        <img
          src={"/shinjuku.jpg"}
          alt="Japan Visa"
          className="lg:w-[30vw] lg:h-[30vh] w-[40vw] h-[25vh] object-cover dark:opacity-60"
        />
      </div>

      <div className="w-full lg:p-4 p-2 lg:px-10">
        <h2 className="lg:text-2xl text-lg font-semibold text-gray-800 dark:text-white">
          About Study/Job Visa for Japan
        </h2>

        <p className="text-black dark:text-gray-300 text-sm hidden lg:block">
          Japan Study visa process involves gaining COE, along with COA, through
          the Japanese embassy or consulate. Applicants must also show proof of
          financial support for their stay in Japan. Accurate documentation
          ensures a smooth visa application process.
        </p>

        <ul className="pl-4 list-disc list-outside text-black dark:text-gray-300 text-sm space-y-1 lg:leading-none">
          <li>
            Visa Duration: 1 year to 2 years. (3 to 5 years if job acquired){" "}
          </li>
          <li>
            Part-time work allowed: up to 28 hours/week, with an average salary
            of 1000yen/hr
          </li>
          <li className="hidden lg:block">
            Work Visa available upon Job enrollment and procedures
          </li>
        </ul>

        <a
          href={"https://www.learnjapanesedelhi.com/study-in-japan"}
          target="_blank"
          className="mt-2 lg:text-lg text-sm lg:w-[20vw] items-center justify-start w-full px-2 lg:p-2 dark:bg-gray-400 dark:text-black bg-gray-900 cursor-pointer flex hover:bg-black text-white py-1 lg:px-5 rounded transition duration-200"
        >
          <FileInput className="mr-2 " />
          Visa Process Details
        </a>
      </div>
    </div>
  );
};

export default StudyJapanAbv;
