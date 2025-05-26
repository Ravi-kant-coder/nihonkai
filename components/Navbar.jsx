"use client";
import {
  Rss,
  Images,
  PhoneCall,
  BookOpenText,
  HandCoins,
  Plane,
} from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import ThemeToggle from "@/components/ThemeToggle";
import N5toN3slide from "./N5toN3slide";
import N2N1kaiwslide from "./N2N1kaiwslide";
import PhotosUprDiv from "./PhotosUprDiv";
import PhotosLwrDiv from "./PhotosLwrDiv";
// import LoginForm from "./LoginForm";
import ContactForm from "./ContactForm";
import { motion } from "framer-motion";
import StudyJapanAbv from "./StudyJapanAbv";
import StudyJapanLow from "./StudyJapanLow";
import NmaxExp from "./NmaxExp";
import StudyJapanLwst from "./StudyJapanLwst";

const Navbar = () => {
  return (
    <>
      <Tabs className="w-full mt-2 fixed z-2">
        <div className="flex justify-center items-center lg:mx-10">
          {/*----------------- First half tabs (Fixed-Bottom on Mobile) ----------------------  */}

          <TabsList className="w-full fixed bottom-2 dark:bg-black bg-[rgb(140,140,140)] h-25 lg:h-10 mx-2 lg:mx-0 lg:static lg:rounded-r-none">
            <div className="flex gap-2 w-full justify-center m-5">
              <TabsTrigger
                value="jap-courses"
                className="cursor-pointer border-1 border-white dark:text-white dark:bg-black dark:data-[state=active]:bg-gray-600"
              >
                <span className="flex flex-col lg:flex-row items-center justify-center lg:justify-between">
                  <BookOpenText className="lg:mr-4" />
                  Japanese
                  <br /> Courses
                </span>
              </TabsTrigger>
              <TabsTrigger
                value="Study-in-Japan"
                className="cursor-pointer mx-2 border-1 border-white dark:text-white dark:bg-black dark:data-[state=active]:bg-gray-600"
              >
                <span className="flex flex-col lg:flex-row items-center justify-center lg:justify-between">
                  <Plane className="lg:mr-4" />
                  Study
                  <br /> in Japan
                </span>
              </TabsTrigger>
              <TabsTrigger
                value="Institute-Photos"
                className="cursor-pointer border-1 border-white mx-2 dark:text-white dark:bg-black dark:data-[state=active]:bg-gray-600"
              >
                <span className="flex flex-col lg:flex-row items-center justify-center lg:justify-between">
                  <Images className="lg:mr-4" />
                  Institute
                  <br /> Photos
                </span>
              </TabsTrigger>
            </div>
          </TabsList>

          {/*----------------- Second half tabs (Up on Mobile) ----------------------  */}

          <TabsList className="w-full dark:bg-black h-20 lg:h-10 bg-[rgb(140,140,140)] lg:rounded-l-none">
            <TabsTrigger
              value="NmaxExp"
              className="cursor-pointer border-1 border-white dark:text-white dark:bg-black dark:data-[state=active]:bg-gray-600"
            >
              <span className="flex flex-col lg:flex-row items-center justify-center lg:justify-between">
                <Rss className="lg:mr-4" />
                nihongomax.com
              </span>
            </TabsTrigger>
            {/* <TabsTrigger
              value="Study-Online"
              className="cursor-pointer border-1 border-white h-13 mx-2 dark:text-white dark:bg-black dark:data-[state=active]:bg-gray-600"
            ><span className="flex flex-col lg:flex-row items-center justify-center lg:justify-between">
              <Headset className="lg:mr-4"/>
              Study Jap Online
              </span>
            </TabsTrigger> */}
            {/* <TabsTrigger
              value="Create"
              className="cursor-pointer h-10 border-1 border-white dark:text-white dark:bg-black dark:data-[state=active]:bg-gray-700"
            ><span className="flex flex-col lg:flex-row items-center justify-center lg:justify-between">
              <HandCoins className="lg:mr-4"/>
              Sign up for FREE class
              </span>
            </TabsTrigger> */}
            <TabsTrigger
              value="Contact"
              className="cursor-pointer border-1 border-white m-2 dark:text-white dark:bg-black dark:data-[state=active]:bg-gray-600"
            >
              <span className="flex flex-col lg:flex-row items-center justify-center lg:justify-between">
                <PhoneCall className="lg:mr-4" />
                Contact us
              </span>
            </TabsTrigger>
            <ThemeToggle />
          </TabsList>
        </div>

        {/*---------------------------- TABS CONTENT-------------------------------  */}

        <div className="">
          <TabsContent value="jap-courses">
            <motion.div
              initial={{ x: 1000 }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <N5toN3slide />
            </motion.div>
            <motion.div
              initial={{ x: 2000 }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              {" "}
              <N2N1kaiwslide />
            </motion.div>
          </TabsContent>
          <TabsContent
            value="Study-in-Japan"
            className="flex flex-col justify-center items-center"
          >
            <motion.div
              initial={{ y: -1000 }}
              animate={{ y: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <StudyJapanAbv />
            </motion.div>

            <motion.div
              initial={{ y: -600 }}
              animate={{ y: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <StudyJapanLow />
            </motion.div>
            <motion.div
              initial={{ y: -200 }}
              animate={{ y: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <StudyJapanLwst />
            </motion.div>
          </TabsContent>
          <TabsContent
            value="Institute-Photos"
            className="lg:mt-5 overflow-y-scroll"
          >
            <motion.div
              initial={{ x: 1000 }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="my-2"
            >
              <PhotosUprDiv />
            </motion.div>
            <motion.div
              initial={{ x: 1500 }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="my-2"
            >
              {" "}
              <PhotosLwrDiv />
            </motion.div>
          </TabsContent>
          {/* <TabsContent value="Create">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <LoginForm />
            </motion.div>
          </TabsContent> */}

          <TabsContent value="NmaxExp">
            <motion.div
              initial={{ y: 1000 }}
              animate={{ y: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <NmaxExp />
            </motion.div>
          </TabsContent>
          <TabsContent value="Contact">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ContactForm />
            </motion.div>
          </TabsContent>
        </div>
      </Tabs>
    </>
  );
};

export default Navbar;
