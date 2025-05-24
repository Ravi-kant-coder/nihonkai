const N2N1kaiwslide = () => {
  return (
    <div className="lg:w-[85vw] w-[95vw] mx-auto mt-2 flex">
      <div className="lg:w-1/4 w-[30vw] mx-auto bg-green-300 dark:bg-[rgb(10,10,10)] p-2 rounded-md cursor-pointer">
        <a
          href={"https:www.learnjapanesedelhi.com/japanese-course-jlpt-n2"}
          target="_blank"
        >
          <div>
            <img
              src={"/n2.png"}
              alt="JLPT N2"
              className="dark:opacity-60 rounded-lg mx-auto"
            />

            <h3 className="lg:font-semibold text-sm lg:text-lg">
              Advanced Japanese (N2)
              <br />
              FEE: 22,000/- (Online/Offline)
              <br />
              Duration: 6 months
              <br />
              Material: 聴解(Chokai), 読解(Dokkai), 文法(Bunpo),
              文字語彙漢字(Mojigoi Kanji)
            </h3>
            <h3 className="text-center font-semibold text-xs mt-1 lg:text-lg">
              <span className="hidden lg:inline">Click</span>
              <span className="lg:hidden inline">Tap</span> to get N2 details...
            </h3>
          </div>
        </a>
      </div>
      <div className="lg:w-1/4 w-[30vw] mx-auto bg-yellow-200 dark:bg-[rgb(10,10,10)] p-2 rounded-md cursor-pointer">
        <a
          href={"https:www.learnjapanesedelhi.com/japanese-course-jlpt-n1"}
          target="_blank"
        >
          <div>
            <img
              src={"/n1.png"}
              alt="JLPT N1"
              className="dark:opacity-60  rounded-lg mx-auto"
            />

            <h3 className="lg:font-semibold text-sm lg:text-lg">
              Super Advanced Japanese (N1)
              <br />
              FEE: 30,000/- (Online/Offline)
              <br />
              Duration: 6 months
              <br />
              Material: 聴解(Chokai), 読解(Dokkai), 文法(Bunpo),
              文字語彙漢字(Mojigoi Kanji)
            </h3>
            <h3 className="text-center font-semibold text-xs mt-1 lg:text-lg">
              <span className="hidden lg:inline">Click</span>
              <span className="lg:hidden inline">Tap</span> to get N1 details...
            </h3>
          </div>
        </a>
      </div>
      <div className="lg:w-1/4 w-[30vw] mx-auto bg-gray-400 dark:bg-[rgb(10,10,10)] p-2 rounded-md">
        <div>
          <div>
            <img
              src={"/kaiwa.png"}
              alt="Kaiwa"
              className="dark:opacity-60 rounded-lg mx-auto"
            />
          </div>
          <h3 className="lg:font-semibold text-sm lg:text-lg">
            Japanese Kaiwa
            <br />
            Business scenario, Polite conversation丁寧語, Honorific and Humble
            Expressions、慣用句、Interpretation Training <br />
            (For N3/N2 cleared)
          </h3>
          <h3 className="text-center font-semibold text-xs mt-1 lg:text-lg">
            Contact us for details
          </h3>
        </div>
      </div>
    </div>
  );
};

export default N2N1kaiwslide;
