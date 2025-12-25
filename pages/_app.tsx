import "../styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Toast from "../components/Toast/Toast";
import { UserContext } from "../context/UserContext";
import { useState, useMemo, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  const [user, setUser] = useState({
    firstName: "",
    token: "",
  });
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  useEffect(() => {
    const firstName = localStorage.getItem("firstName");
    const token = localStorage.getItem("token");
    firstName !== null &&
      token !== null &&
      setUser({ firstName: JSON.parse(firstName), token: JSON.parse(token) });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <UserContext.Provider value={value}>
        <AnimatePresence mode="wait">
          <Toast />
          <Component {...pageProps} />
          <ReactQueryDevtools initialIsOpen={false} />
        </AnimatePresence>
      </UserContext.Provider>
    </QueryClientProvider>
  );
}
export default MyApp;
