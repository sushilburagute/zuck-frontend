import { NextPage } from "next";
import Head from "next/head";

const Login: NextPage = () => {
  return (
    <>
      <Head>
        <title>Login | Zuck </title>
        <meta property="og:title" content="Login | Zuck" key="title" />
      </Head>
      <div className="flex items-center justify-center w-screen h-screen bg-gradient-to-r from-red-300 via-brand-400 to-yellow-300">
        <div className="flex flex-col items-center p-6 bg-white rounded-md shadow-md h-2/3">
          <div>
            <h1 className="text-4xl font-medium text-brand-500">Login</h1>
          </div>
          <div>
            <h3 className="mt-2 text-xs font-light text-gray-600">Zuck | By Asiimov Corp</h3>
          </div>
          <div className="mt-8">
            <form>
              <input className="w-auto p-2 mt-4 border-2 rounded-sm" placeholder="Email" />
              <br />
              <input className="w-auto p-2 mt-4 border-2 rounded-sm" placeholder="Password" />
              <br />
              <button className="mt-4 text-sm font-light text-gray-600">Show Password</button>
              <br />
              <button className="px-6 py-2 mt-4 mr-2 font-semibold text-white rounded-sm text-md bg-brand-500">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
