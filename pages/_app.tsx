import "../styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Toast from "../components/Toast/Toast";
import { UserContext } from "../context/UserContext";
import { useState, useMemo, useEffect } from "react";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
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
        <Toast />
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </UserContext.Provider>
    </QueryClientProvider>
  );
}
export default MyApp;
