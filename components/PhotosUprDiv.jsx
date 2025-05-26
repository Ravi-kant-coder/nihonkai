const PhotosUprDiv = () => {
  return (
    <div className="flex lg:flex-row flex-col mx-5 justify-center items-center">
      <div className="flex lg:mr-1">
        <img
          src={"/class3.jpg"}
          alt="Nihongomax"
          className="lg:rounded-lg rounded-md m-2 lg:w-85 lg:h-65 w-45 h-36"
        />
        <img
          src={"/class1.jpg"}
          alt="Nihongomax"
          className="lg:rounded-lg m-2 rounded-md lg:w-85 lg:h-65 w-45 h-36"
        />
      </div>
      <div className="flex lg:flex-row rounded-md flex-col lg:ml-1">
        <div className="flex">
          <img
            src={"/class4.jpg"}
            alt="Nihongomax"
            className="lg:rounded-lg rounded-md m-2 lg:w-85 lg:h-65 w-45 h-36"
          />
          <img
            src={"/class6.jpg"}
            alt="Nihongomax"
            className="lg:rounded-lg rounded-md m-2 lg:w-85 lg:h-65 w-45 h-36"
          />
        </div>
      </div>
    </div>
  );
};

export default PhotosUprDiv;
