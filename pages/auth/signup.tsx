import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import axios from "axios";
import toast from "react-hot-toast";
import { useContext } from "react";

import Spinner from "../../components/Spinner/Spinner";
import { UserContext } from "../../context/UserContext";

const errorNotify = (error: any) => toast.error(`Error: ${error}`);

const Signup: NextPage = () => {
  const { register, handleSubmit } = useForm();
  const router = useRouter();
  const { setUser } = useContext(UserContext);

  const { mutate, isLoading, isSuccess, isError, error } = useMutation(
    async (data: any) => {
      return await axios.post("http://localhost:5000/api/auth/sign-up", data);
    },
    {
      onSuccess: (data) => {
        if (data.data?.msg === "Your Account has been created") {
          localStorage.setItem("user", JSON.stringify(data.data?.token));
          localStorage.setItem("firstName", JSON.stringify(data.data?.firstName));
          setUser({ firstName: data.data?.firstName, token: data.data?.token });
          router.push("/food");
        }
      },
    }
  );

  const onSubmit = handleSubmit((data) => {
    mutate(data);
  });

  return (
    <>
      <Head>
        <title>Login | Zuck </title>
        <meta property="og:title" content="Login | Zuck" key="title" />
      </Head>

      <div className="flex min-h-screen bg-white">
        <div className="flex flex-col justify-center flex-1 px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="w-full max-w-sm mx-auto lg:w-96">
            <div>
              <Link href="/">
                <a className="text-4xl italic font-bold text-brand-600">Zuck</a>
              </Link>
              <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                Ready to create a new account?
              </h2>
              <p className="mt-2 text-sm text-gray-600 max-w">
                Or{" "}
                <Link href="/auth/login">
                  <a href="#" className="font-medium text-brand-600 hover:text-brand-500">
                    log in here.
                  </a>
                </Link>
              </p>
            </div>

            <div className="mt-8">
              <div className="mt-6">
                <form action="#" method="POST" className="space-y-6" onSubmit={onSubmit}>
                  <div className="space-y-1">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                      First Name
                    </label>
                    <div className="mt-1">
                      <input
                        id="firstName"
                        type="text"
                        required
                        autoFocus
                        className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-brand-500 focus:border-brand-500 sm:text-sm"
                        {...register("firstName", { required: true, maxLength: 20 })}
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                      Last Name
                    </label>
                    <div className="mt-1">
                      <input
                        id="lasttName"
                        type="text"
                        required
                        className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-brand-500 focus:border-brand-500 sm:text-sm"
                        {...register("lastName", { required: true, maxLength: 20 })}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email address
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        type="email"
                        autoComplete="email"
                        required
                        {...register("email", {
                          required: true,
                          pattern:
                            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        })}
                        className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-brand-500 focus:border-brand-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                      Create a Password
                    </label>
                    <div className="mt-1">
                      <input
                        id="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        {...register("password", { required: true, maxLength: 20 })}
                        className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-brand-500 focus:border-brand-500 sm:text-sm"
                      />
                    </div>
                    <p className="text-xs text-gray-700">
                      The password needs to have a capital letter, a number, a special character,
                      and should be 8 characters long.
                    </p>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-brand-600 hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500"
                    >
                      {isLoading ? <Spinner textColor="text-white" /> : "Create a new account"}
                    </button>
                  </div>
                </form>
                {isError && errorNotify(error)}
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex-1 hidden w-0 lg:block">
          <Image
            alt="Burger with Fries"
            layout="fill"
            objectFit="cover"
            quality={100}
            src="https://images.unsplash.com/photo-1610614991969-ceeb293e7ff5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
          />
        </div>
      </div>
    </>
  );
};

export default Signup;
