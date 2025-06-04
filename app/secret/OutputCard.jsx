"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useAdminData } from "@/stores/useAdminData";

const OutputCard = ({ queryObj, createdAt }) => {
  const [localDate, setLocalDate] = useState("");
  const [localTime, setLocalTime] = useState("");
  const [showModal, setShowModal] = useState(false);
  const { deleteQuery } = useAdminData();

  useEffect(() => {
    if (createdAt) {
      const date = new Date(createdAt);
      const day = String(date.getDate()).padStart(2, "0");
      const month = date.toLocaleString("en-US", { month: "long" }); // e.g., "December"
      const year = date.getFullYear();
      setLocalDate(`${day}-${month}-${year}`);
      setLocalTime(date.toLocaleTimeString());
    }
  }, [createdAt]);

  const handleDelete = async (id) => {
    await deleteQuery(id);
  };
  return (
    <>
      <div className="lg:mx-50 mx-5 shadow-gray-400 transition-all duration-500 my-2 bg-white dark:bg-gray-800 rounded-md shadow-xl p-6 space-y-4 border border-gray-200 dark:border-gray-700">
        <h2 className="text-xl text-center font-semibold text-gray-800 dark:text-white">
          <b>Date: {localDate}</b> - {localTime}
        </h2>

        <p className="text-sm text-gray-600 dark:text-gray-300">
          {queryObj.queryText}
        </p>

        <div className="flex items-center text-sm text-gray-700 dark:text-gray-300">
          <span>Name: {queryObj.studentName}</span>
        </div>

        <div className="flex items-center text-sm text-gray-700 dark:text-gray-300">
          <span>Mobile: {queryObj.mobile}</span>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="lg:w-1/5 w-1/2 align-center mt-4 bg-red-400 cursor-pointer hover:bg-red-500 hover:text-white font-medium py-1 px-4 rounded"
        >
          Delete
        </button>
      </div>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <motion.div
            initial={{ scale: 0, rotate: -50 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-2xl "
          >
            <h2 className="text-lg font-semibold text-center text-red-600 dark:text-white">
              Delete {queryObj.studentName}'s message Forever?
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 text-center my-3">
              This cannot be Recovered.
            </p>

            <div className="flex justify-center gap-4 mt-4 ">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 rounded-lg bg-gray-200  cursor-pointer dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-sm"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(queryObj._id)}
                className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 cursor-pointer text-white text-sm"
              >
                Yes, Delete
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default OutputCard;
