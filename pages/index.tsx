import type { NextPage } from "next";
import Image from "next/image";
import { ArrowRightIcon, ExternalLinkIcon } from "@heroicons/react/outline/";
import Link from "next/link";
import { SEO } from "../components";

const Home: NextPage = () => {
  return (
    <>
      <SEO title="Order Food Online" />
      <div className="grid w-full h-screen grid-cols-none md:grid-cols-2">
        <div className="container flex flex-col h-screen px-4 pt-8 mx-auto space-y-16 md:px-16">
          <div className="flex items-center justify-between w-full">
            <h1 className="text-4xl italic font-bold text-brand-600">Zuck</h1>
            <div>
              <Link href="/auth/login">
                <a className="px-6 py-2 text-sm font-semibold bg-white hover:bg-gray-100 mr-4">
                  Login
                </a>
              </Link>
              <Link href="/auth/signup">
                <a className="px-6 py-2 text-sm font-semibold text-white bg-gray-800 rounded-sm hover:bg-gray-900">
                  Sign up
                </a>
              </Link>
            </div>
          </div>
          <div>
            <h1 className="my-2 text-6xl font-semibold tracking-tighter text-gray-800">
              Feeling Hungry?
            </h1>
            <h2 className="my-2 text-xl font-light tracking-tight text-gray-800">
              Order food from favourite restaurant.
            </h2>
          </div>
          <div>
            <Link href="/food">
              <a className="flex px-6 py-4 mr-2 font-semibold text-white rounded-sm w-max text-md bg-brand-600 hover:bg-brand-700">
                Explore our Menu <ArrowRightIcon className="w-6 h-6 ml-4" />{" "}
              </a>
            </Link>
          </div>
          <div>
            <p className="font-light text-gray-600">Popular cities in India</p>
            <p className="mt-1 text-sm font-semibold text-gray-700">
              Bangalore, Mumbai, Pune, Delhi, Hyderabad, Chennai
            </p>
          </div>
          <div>
            <Link href="https://sush.vercel.app/">
              <a className="flex font-medium text-gray-600 align-middle" target="_blank">
                Made by Sushil Buragute <ExternalLinkIcon className="w-6 h-6 ml-2 " />
              </a>
            </Link>
          </div>
        </div>

        <div className="relative">
          <Image
            alt="Pizza Dining"
            layout="fill"
            objectFit="cover"
            quality={100}
            src="https://images.unsplash.com/photo-1594179047519-f347310d3322?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
