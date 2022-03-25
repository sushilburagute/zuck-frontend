import { createContext } from "react";

export const UserContext = createContext({
  user: { firstName: "", token: "" },
  setUser: (user: { firstName: string; token: string }) => {},
});
