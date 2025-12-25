import type { NextPage } from "next";
import Image from "next/image";
import { ArrowRightIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { SEO } from "../components";
import { motion } from "framer-motion";
import { fadeInUp } from "../animation/fadeInUp";
import { stagger } from "./../animation/stagger";

const Home: NextPage = () => {
  return (
    <>
      <SEO title="Order Food Online" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="grid w-full h-screen grid-cols-none md:grid-cols-2"
      >
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          exit="exit"
          className="container flex flex-col h-screen px-4 pt-8 mx-auto space-y-16 md:px-16"
        >
          <div className="flex items-center justify-between w-full">
            <h1 className="text-4xl italic font-bold text-brand-600">Zuck</h1>
            <div>
              <Link
                href="/auth/login"
                className="px-6 py-2 text-sm font-semibold bg-white hover:bg-gray-100 mr-4 inline-block"
              >
                Login
              </Link>
              <Link
                href="/auth/signup"
                className="px-6 py-2 text-sm font-semibold text-white bg-gray-800 rounded-sm hover:bg-gray-900 inline-block"
              >
                Sign up
              </Link>
            </div>
          </div>
          <div>
            <motion.h1
              variants={fadeInUp}
              className="my-2 text-6xl font-semibold tracking-tighter text-gray-800"
            >
              Feeling Hungry?
            </motion.h1>
            <motion.h2
              variants={fadeInUp}
              className="my-2 text-xl font-light tracking-tight text-gray-800"
            >
              Order food from favourite restaurant.
            </motion.h2>
          </div>
          <motion.div variants={fadeInUp}>
            <Link
              href="/food"
              className="flex px-6 py-4 mr-2 font-semibold text-white rounded-sm w-max text-md bg-brand-600 hover:bg-brand-700"
            >
              Explore our Menu <ArrowRightIcon className="w-6 h-6 ml-4" />
            </Link>
          </motion.div>
          <div>
            <p className="font-light text-gray-600">Popular cities in India</p>
            <p className="mt-1 text-sm font-semibold text-gray-700">
              Bangalore, Mumbai, Pune, Delhi, Hyderabad, Chennai
            </p>
          </div>
          <div>
            <Link
              href="https://sush.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="flex font-medium text-gray-600 align-middle"
            >
              Made by Sushil Buragute <ArrowTopRightOnSquareIcon className="w-6 h-6 ml-2 " />
            </Link>
          </div>
        </motion.div>

        <div className="relative">
          <Image
            alt="Pizza Dining"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            quality={100}
            src="https://images.unsplash.com/photo-1594179047519-f347310d3322?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          />
        </div>
      </motion.div>
    </>
  );
};

export default Home;
