import React from "react";

const PhotosLwrDiv = () => {
  return (
    <div className="flex lg:flex-row flex-col mx-5 justify-center items-center">
      <div className="flex lg:mr-1">
        <img
          src={"/class5.jpg"}
          alt="Nihongomax"
          className="lg:rounded-lg rounded-md m-2 lg:w-85 lg:h-65 w-50 h-40"
        />
        <img
          src={"/class7.jpg"}
          alt="Nihongomax"
          className="lg:rounded-lg m-2 rounded-md lg:w-85 lg:h-65 w-50 h-40 object-cover"
        />
      </div>
      <div className="lg:flex lg:flex-row hidden rounded-md flex-col lg:ml-1">
        <div className="flex">
          <img
            src={"/class8.jpg"}
            alt="Nihongomax"
            className="lg:rounded-lg rounded-md m-2 lg:w-85 lg:h-65 w-50 h-40"
          />
          <img
            src={"/class2.jpg"}
            alt="Nihongomax"
            className="lg:rounded-lg rounded-md m-2 hidden lg:block lg:w-85 lg:h-65 w-50 h-40"
          />
        </div>
      </div>
    </div>
  );
};

export default PhotosLwrDiv;
