import LikeButton from "./LikeButton";

const NmaxExp = () => {
  return (
    <div className="mx-auto lg:w-10/11 lg:my-2 bg-[rgb(70,70,70)] dark:bg-black/90 rounded-md shadow-xl lg:p-6 p-2 lg:space-y-4 border border-gray-200 dark:border-gray-700">
      <h2 className="lg:text-xl lg:mb-4 text-white text-center lg:font-semibold mb-2 p-1 rounded-md bg-[rgb(30,30,30)]">
        Some reasons why should you DEFENITELY have a look on{" "}
        <a href="https://www.nihongomax.com" target="_blank">
          <span className="border-1 border-white bg-black/30 lg:p-1 p-0.5 rounded hover:text-white hover:bg-black">
            nihongomax.com
          </span>
        </a>
        , it's Comparison with a Regular Institute.
      </h2>
      {/* list-disc pl-5 lg:list-inside list-outside */}
      <ul className="lg:ml-14 mb-2 lg:mb-4 text-white dark:text-gray-300 text-xs lg:text-sm ">
        <li>
          From JLPT N5 to N1, Get all the material divided into classes with
          5000 Audios with Hindi explantion and Japanese practice.
        </li>
        <hr className="my-2 w-2/3" />
        <li>
          Get access to all JLPT Levels, Business Japanese with proper
          Motivation and Guidance of How to study with methods of getting JLPT
          clear in one Go.
        </li>
        <hr className="my-2 w-2/3" />
        <li>
          Also, with Business Japanese, Kaiwa etc, you can also learn how
          English is taught to Japanese. It will improve your Listening and
          speaking manifolds.
        </li>
        <hr className="hidden lg:block my-2 w-2/3" />
        <li className="hidden lg:block">
          Keep asking questions by putting them on the wall and getting valuable
          guidance by your seniors and teachers, anytime, anywhere.
        </li>
      </ul>
      <div className="lg:p-4 lg:pt-4 p-2 lg:max-w-6xl mx-auto bg-gray-400 dark:bg-gray-900 rounded-lg">
        <h2 className=" flex justify-between lg:text-2xl text-md font-semibold lg:mb-2 text-center">
          Let's Compare (9 main differences)
          <LikeButton />
        </h2>
        <table className="min-w-full lg:rounded-2xl bg-white dark:bg-gray-800 border dark:border-gray-700">
          <thead className="dark:bg-gray-700 block">
            <tr>
              <th className="w-1/6"></th>
              <th className="text-left lg:py-3 lg:text-xl lg:px-4 border-b w-[50vw] py-1 dark:border-gray-600">
                NIHONGOMAX.COM
              </th>
              <th className="text-left lg:py-3 lg:text-xl lg:px-4 border-b w-[50vw] py-1 dark:border-gray-600">
                Any <span className="hidden lg:inline">Regular </span>Institute
              </th>
            </tr>
          </thead>
          <tbody className="text-sm block overflow-y-scroll h-[30vh]">
            <tr>
              <td className="lg:py-3 py-1 pl-2 font-bold lg:px-4 border-b dark:border-gray-700">
                Cost
              </td>
              <td className="lg:py-3 lg:px-4 py-1 border-b dark:border-gray-700">
                &#8377; 3,500 (For one year)
              </td>
              <td className="lg:py-3 py-1 lg:px-4 border-b dark:border-gray-700">
                Around &#8377; 50,000 (For one year)
              </td>
            </tr>
            <tr>
              <td className="lg:py-3 pl-2 lg:px-4 py-1 font-bold border-b dark:border-gray-700">
                Revision
              </td>
              <td className="lg:py-3 py-1 lg:px-4 border-b dark:border-gray-700">
                No Cost
              </td>
              <td className="lg:py-3 py-1 lg:px-4 border-b dark:border-gray-700">
                Same cost
              </td>
            </tr>
            <tr>
              <td className="lg:py-3 py-1 pl-2 lg:px-4 font-bold border-b dark:border-gray-700">
                Teachers Quality
              </td>
              <td className="lg:py-3 py-1 lg:px-4 border-b dark:border-gray-700">
                JLPT N1, N2, N3, N4, N5 all clear with 7 Years Japan experience
              </td>
              <td className="lg:py-3 py-1 lg:px-4 border-b dark:border-gray-700">
                If qualified enough, the cost will be much higher
              </td>
            </tr>
            <tr>
              <td className="lg:py-3 pl-2 py-1 lg:px-4 font-bold border-b dark:border-gray-700">
                Content Quality
              </td>
              <td className="lg:py-3 py-1 lg:px-4 border-b dark:border-gray-700">
                Divided as per level with gradual increase
              </td>
              <td className="lg:py-3 py-1 lg:px-4 border-b dark:border-gray-700">
                Random contents
              </td>
            </tr>
            <tr>
              <td className="lg:py-3 py-1 pl-2 lg:px-4 border-b font-bold dark:border-gray-700">
                Time
              </td>
              <td className="lg:py-3 py-1 lg:px-4 border-b dark:border-gray-700">
                Flexible with duration of length as you wish
              </td>
              <td className="lg:py-3 py-1 lg:px-4 border-b dark:border-gray-700">
                Fixed duration, No flexible timing
              </td>
            </tr>
            <tr>
              <td className="lg:py-3 py-1 pl-2 lg:px-4 border-b font-bold dark:border-gray-700">
                Transport
              </td>
              <td className="lg:py-3 py-1 lg:px-4 border-b dark:border-gray-700">
                Your Bedroom
              </td>
              <td className="lg:py-3 py-1 lg:px-4 border-b dark:border-gray-700">
                Rain, Metro-charges, Sun-tan, Sweating
              </td>
            </tr>
            <tr>
              <td className="lg:py-3 py-1 pl-2 lg:px-4 border-b font-bold dark:border-gray-700">
                Availability
              </td>
              <td className="lg:py-3 py-1 lg:px-4 border-b dark:border-gray-700 ">
                24 by 7 available
              </td>
              <td className="lg:py-3 py-1 lg:px-4 border-b dark:border-gray-700">
                Depends on personal circumstances
              </td>
            </tr>
            <tr>
              <td className="lg:py-3 py-1 pl-2 lg:px-4 border-b font-bold dark:border-gray-700">
                Levels
              </td>
              <td className="lg:py-3 py-1 lg:px-4 border-b dark:border-gray-700">
                Many at a time
              </td>
              <td className="lg:py-3 py-1 lg:px-4 border-b dark:border-gray-700">
                Only one at a time
              </td>
            </tr>
            <tr>
              <td className="lg:py-3 py-1 pl-2 lg:px-4 border-b font-bold dark:border-gray-700">
                Support
              </td>
              <td className="lg:py-3 py-1 lg:px-4 border-b dark:border-gray-700">
                Wall
              </td>
              <td className="lg:py-3 py-1 lg:px-4 border-b dark:border-gray-700">
                Not at all
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NmaxExp;
