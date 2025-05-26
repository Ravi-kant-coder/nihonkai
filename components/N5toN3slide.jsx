const N5toN3slide = () => {
  return (
    <div className="lg:w-[85vw] w-[95vw] mx-auto mt-2 flex">
      <div className="lg:w-1/4 w-[30vw] mx-auto bg-pink-200 dark:bg-[rgb(10,10,10)] p-2 rounded-md cursor-pointer">
        <a
          href={"https:www.learnjapanesedelhi.com/japanese-course-jlpt-n5"}
          target="_blank"
        >
          <div>
            <img
              src={"/n5.png"}
              alt="JLPT N5"
              className="dark:opacity-60 rounded-lg mx-auto"
            />

            <h3 className="lg:font-semibold text-sm lg:text-lg ">
              Begginer's Japanese (N5)
              <br />
              FEE: 19,000/- (Online/Offline)
              <br />
              Duration: 5 months
              <br />
              <span className="hidden lg:inline">
                {" "}
                Material: 聴解(Chokai), 読解(Dokkai), 文法(Bunpo),
                文字語彙漢字(Mojigoi Kanji)
              </span>
            </h3>
            <h3 className="text-center font-semibold text-xs mt-1 lg:text-lg">
              <span className="hidden lg:inline">Click</span>
              <span className="lg:hidden inline">Tap</span> to get N5 details...
            </h3>
          </div>
        </a>
      </div>
      <div className="lg:w-1/4 w-[30vw] mx-auto bg-blue-200 dark:bg-[rgb(10,10,10)] p-2 rounded-md cursor-pointer">
        <a
          href={"https:www.learnjapanesedelhi.com/japanese-course-jlpt-n4"}
          target="_blank"
        >
          <div>
            <img
              src={"/n4.png"}
              alt="JLPT N4"
              className="dark:opacity-60  rounded-lg mx-auto"
            />

            <h3 className="lg:font-semibold text-sm lg:text-lg">
              Basic Japanese (N4)
              <br />
              FEE: 19,500/- (Online/Offline)
              <br />
              Duration: 6 months
              <br />
              <span className="hidden lg:inline">
                {" "}
                Material: 聴解(Chokai), 読解(Dokkai), 文法(Bunpo),
                文字語彙漢字(Mojigoi Kanji)
              </span>
            </h3>
            <h3 className="text-center font-semibold text-xs mt-1 lg:text-lg">
              <span className="hidden lg:inline">Click</span>
              <span className="lg:hidden inline">Tap</span> to get N4 details...
            </h3>
          </div>
        </a>
      </div>
      <div className="lg:w-1/4 w-[30vw] mx-auto bg-purple-200 dark:bg-[rgb(10,10,10)] p-2 rounded-md cursor-pointer">
        <a
          href={"https:www.learnjapanesedelhi.com/japanese-course-jlpt-n3"}
          target="_blank"
        >
          <div>
            <img
              src={"/n3.png"}
              alt="JLPT N3"
              className="dark:opacity-60 rounded-lg mx-auto"
            />

            <h3 className="lg:font-semibold text-sm lg:text-lg">
              Intermediate Japanese (N3)
              <br />
              FEE: 20,000/- (Online/Offline)
              <br />
              Duration: 6 months
              <br />
              <span className="hidden lg:inline">
                {" "}
                Material: 聴解(Chokai), 読解(Dokkai), 文法(Bunpo),
                文字語彙漢字(Mojigoi Kanji)
              </span>
            </h3>
            <h3 className="text-center font-semibold text-xs mt-1 lg:text-lg">
              <span className="hidden lg:inline">Click</span>
              <span className="lg:hidden inline">Tap</span> to get N3 details...
            </h3>
          </div>
        </a>
      </div>
    </div>
  );
};

export default N5toN3slide;
