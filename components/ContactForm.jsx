"use client";
import { useState } from "react";
import { X, CircleCheckBig } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "./ui/textarea";
import { useAdminData } from "@/stores/useAdminData";

const ContactForm = () => {
  const { createQuery } = useAdminData();
  const [showForm, setShowForm] = useState(true);
  const [studentName, setStudentName] = useState("");
  const [mobile, setMobile] = useState("");
  const [queryText, setQueryText] = useState("");
  const [submit, setSubmit] = useState(true);
  const [submitted, setSubmitted] = useState("");
  const [isNameReq, setIsNameReq] = useState(false);
  const [isMobReq, setIsMobReq] = useState(false);
  const [isQueryReq, setIsQueryReq] = useState(false);
  const [invalidMob, setInvalidMob] = useState(false);

  const handleContactForm = async (e) => {
    e.preventDefault();

    // Frontend code from here
    if (!studentName) {
      setIsNameReq(true);
      return;
    } else if (!mobile.trim()) {
      setIsMobReq(true);
      setInvalidMob(false);
      return;
    } else if (!queryText) {
      setIsQueryReq(true);
      return;
    } else if (mobile.length < 10 || mobile.length > 10) {
      setIsMobReq(false);
      setInvalidMob(true);
      return;
    } else null;

    // Backend code from here
    const formData = { studentName, mobile, queryText };
    try {
      await createQuery(formData);
      setStudentName("");
      setMobile("");
      setQueryText("");
      setSubmitted(true);
      setSubmit(false);
      setTimeout(() => {
        setSubmit(true);
        setSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error("Error message:", error.message);
    }
  };

  const handleNameChange = (e) => {
    let val = e.target.value;

    // Allow only letters, spaces, and hyphens
    if (/^[a-zA-Z\s]*$/.test(val)) {
      // Trim leading/trailing spaces and multiple internal spaces
      val = val.replace(/\s+/g, " ").trimStart();

      // Capitalize first letter and remove error msg
      if (val.length >= 0) {
        val = val.charAt(0).toUpperCase() + val.slice(1);
        setIsNameReq(false);
      }

      setStudentName(val);
    }
  };
  return (
    showForm && (
      <div className="flex items-center justify-center ">
        <motion.div
          initial={{ opacity: 0, y: -1000 }}
          animate={{ opacity: 1, y: 20 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <Card className="w-[70vw] dark:bg-black bg-[rgb(170,170,170)] lg:p-5 lg:w-[25vw] py-15 lg:py-10 ">
            <CardContent>
              <div className="text-center mb-2 text-2xl">
                <h1 className="lg:text-[18px] text-md mt-4 mb-5 ">
                  Call us 7678461209 <br />{" "}
                  <p className="text-sm">(Tue Thu OFF)</p>
                </h1>
                <button
                  className="absolute top-4 hover:bg-[rgb(120,120,120)] bg-[rgb(150,150,150)] right-4 cursor-pointer dark:bg-gray-700 p-1 rounded"
                  onClick={() => setShowForm(false)}
                >
                  <X className="w-4 h-4 " />
                </button>
                <div className="flex items-center gap-4 text-gray-500">
                  <hr className="flex-grow mb-5  border-t border-black dark:border-white" />
                  <span className="text-sm mb-5 text-black dark:text-white whitespace-nowrap">
                    or
                  </span>
                  <hr className="flex-grow border-t mb-5  border-black dark:border-white" />
                </div>
              </div>

              <form onSubmit={handleContactForm}>
                <div className="space-y-4">
                  <div className="space-y-2 ">
                    <Label className="sr-only" htmlFor="queryName">
                      Username
                    </Label>
                    <Input
                      id="queryName"
                      name="queryNameKey"
                      type="text"
                      placeholder="Enter your name"
                      className="col-span-3 dark:border-gray-400 bg-white dark:bg-black"
                      value={studentName}
                      onChange={handleNameChange}
                    />
                    {isNameReq && (
                      <p className="text-red-700 text-xs">
                        Your Name is required.
                      </p>
                    )}
                  </div>
                  <div className="space-y-2 ">
                    <Label className="sr-only" htmlFor="mobNumber">
                      Mobile
                    </Label>
                    <Input
                      id="mobNumber"
                      name="queryNumKey"
                      type="text"
                      placeholder="Mobile Number"
                      className="col-span-3 bg-white dark:bg-black dark:border-gray-400"
                      value={mobile}
                      onChange={(e) => {
                        const val = e.target.value;
                        if (/^[0-9]*$/.test(val)) {
                          setMobile(val);
                          if (val.length > 0) {
                            setIsMobReq(false);
                            setInvalidMob(false);
                          }
                        }
                      }}
                      maxLength={10}
                    />{" "}
                    {isMobReq ? (
                      <p className="text-red-700 text-xs">
                        Mobile number is required.
                      </p>
                    ) : invalidMob ? (
                      <p className="text-red-700 text-xs ">
                        Please put Valid 10 Digit Mobile number.
                      </p>
                    ) : null}
                  </div>
                  <Textarea
                    placeholder="Write us your query & we will call you..."
                    className="min-h-[100px] text-lg border-1 border-white bg-white dark:bg-black rounded-md"
                    value={queryText}
                    onChange={(e) => {
                      let val = e.target.value;
                      if (val.length >= 0) {
                        setIsQueryReq(false);
                        setQueryText(val);
                      }
                    }}
                  />{" "}
                  {isQueryReq && (
                    <p className="text-red-700 text-xs">
                      Your Query is required.
                    </p>
                  )}
                  {submit && (
                    <Button
                      className="w-full text-[15px] hover:dark:bg-black hover:dark:border-1 hover:dark:border-white dark:bg-gray-400 hover:dark:text-white cursor-pointer"
                      type="submit"
                    >
                      <p>Submit</p>
                    </Button>
                  )}
                  {submitted && (
                    <motion.p
                      initial={{ x: -300 }}
                      animate={{ x: 0 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className="flex items-center py-2 text-white justify-center w-full rounded-md p-1 bg-green-900 "
                    >
                      <span className="mr-2">Submitted</span>{" "}
                      <CircleCheckBig className="font-bold" />
                    </motion.p>
                  )}{" "}
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    )
  );
};

export default ContactForm;
