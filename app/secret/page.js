"use client";
import { useEffect, useState, useRef } from "react";
import { useAdminData } from "@/stores/useAdminData";
import OutputCard from "./OutputCard";

const Secret = () => {
  const { querys, fetchQuerys } = useAdminData();
  const [secretKey, setSecretKey] = useState("");
  const [hint, setHint] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);

  const handleUnlock = () => {
    const correctSecretKey = "lipika";
    if (secretKey === correctSecretKey) {
      setIsUnlocked(true);
    } else {
      setHint("WRONG...");
    }
  };

  //To make the input auto-focus
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    fetchQuerys();
  }, [querys]); // dependency added by my own

  return (
    <>
      <div className="relative ">
        {!isUnlocked && (
          <div className="fixed inset-0 bg-gray-500 flex items-center justify-center z-50">
            <div className="text-center">
              <form className="flex" onSubmit={handleUnlock}>
                <input
                  ref={inputRef}
                  type="text"
                  value={secretKey}
                  onChange={(e) => setSecretKey(e.target.value)}
                  placeholder="Enter Secret Key"
                  className="border px-4 py-2 mr-2 rounded w-64 bg-white"
                />
              </form>
              <p className="text-center font-semibold text-2xl mt-4">{hint}</p>
            </div>
          </div>
        )}
        <h1 className="text-4xl font-bold dark:text-[rgb(150,150,150)] text-center mt-2">
          Queries List from{" "}
          <span className="text-red-700 dark:text-white">nihonkai.co</span>
        </h1>
        <div className="flex flex-col">
          {querys.map((queryObj) => (
            <OutputCard
              key={queryObj._id}
              queryObj={queryObj}
              createdAt={queryObj.createdAt}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Secret;
