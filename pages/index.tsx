import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Zuck | Order Food Online</title>
        <meta property="og:title" content="Zuck | Order Food Online" key="title" />
      </Head>
      <div className="grid w-full h-screen grid-cols-none md:grid-cols-2">
        <div className="container flex flex-col h-screen px-4 pt-8 mx-auto space-y-16 md:px-16">
          <div className="flex items-center justify-between w-full">
            <h1 className="text-4xl italic font-bold text-brand-600">Zuck</h1>
            <div>
              <button className="px-6 py-2 text-sm font-semibold">Login</button>
              <button className="px-6 py-2 text-sm font-semibold text-white bg-black rounded-sm">
                Sign up
              </button>
            </div>
          </div>
          <div>
            <h1 className="my-2 text-6xl font-semibold tracking-tighter text-gray-800">
              Feeling Hungry?
            </h1>
            <h2 className="my-2 text-xl font-light tracking-tight text-gray-800">
              Order food from favourite restaurants.
            </h2>
          </div>
          <div>
            <input
              className="w-3/6 p-4 border-2 md:w-3/6"
              placeholder="Enter your delivery location"
            />
            <button className="px-6 py-4 mr-2 font-semibold text-white rounded-sm text-md bg-brand-600">
              Find Food
            </button>
          </div>
          <div>
            <p className="font-light text-gray-600">Popular cities in India</p>
            <p className="mt-1 text-sm font-semibold text-gray-700">
              Bangalore, Mumbai, Pune, Delhi, Hyderabad, Chennai, Change this later
            </p>
          </div>
          <div>
            <p className="font-light text-gray-600">Made by Sushil Buragute</p>
            <p className="font-light text-gray-600">Sushs social link</p>
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
