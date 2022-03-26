import { NextPage } from "next";
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
import { SEO } from "../../components";
import { motion } from "framer-motion";
import { stagger } from "../../animation/stagger";
import { fadeInUp } from "../../animation/fadeInUp";

const errorNotify = (error: any) => toast.error(`Error: ${error}`);

const Login: NextPage = () => {
  const { register, handleSubmit } = useForm();
  const router = useRouter();
  const { setUser } = useContext(UserContext);

  const { mutate, isLoading, isError } = useMutation(
    async (data: any) => {
      return await axios.post("https://zuck-backend.up.railway.app/api/auth/sign-in", data);
    },
    {
      onSuccess: (data) => {
        if (data.data?.msg === "Logged in successfully !") {
          localStorage.setItem("token", JSON.stringify(data.data?.token));
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
      <SEO title="Login" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex min-h-screen bg-white"
      >
        <div className="flex flex-col justify-center flex-1 px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="w-full max-w-sm mx-auto lg:w-96">
            <div>
              <Link href="/">
                <a className="text-4xl italic font-bold text-brand-600">Zuck</a>
              </Link>
              <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                Sign in to your account
              </h2>
              <p className="mt-2 text-sm text-gray-600 max-w">
                Or{" "}
                <Link href="/auth/signup">
                  <a href="#" className="font-medium text-brand-600 hover:text-brand-500">
                    sign up here.
                  </a>
                </Link>
              </p>
            </div>

            <motion.div
              variants={stagger}
              initial="initial"
              animate="animate"
              exit="exit"
              className="mt-8"
            >
              <div className="mt-6">
                <form action="#" method="POST" className="space-y-6" onSubmit={onSubmit}>
                  <motion.div variants={fadeInUp}>
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
                  </motion.div>

                  <motion.div variants={fadeInUp} className="space-y-1">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                      Password
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
                  </motion.div>

                  <motion.div variants={fadeInUp} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember_me"
                        name="remember_me"
                        type="checkbox"
                        className="w-4 h-4 border-gray-300 rounded text-brand-600 focus:ring-brand-500"
                      />
                      <label htmlFor="remember_me" className="block ml-2 text-sm text-gray-900">
                        Remember me
                      </label>
                    </div>
                  </motion.div>

                  <motion.div variants={fadeInUp}>
                    <button
                      type="submit"
                      className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-brand-600 hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500"
                    >
                      {isLoading ? <Spinner textColor="text-white" /> : "Sign in"}
                    </button>
                  </motion.div>
                </form>
                {isError && errorNotify(`We couldn't locate a user with those credintials.`)}
              </div>
            </motion.div>
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
      </motion.div>
    </>
  );
};

export default Login;
