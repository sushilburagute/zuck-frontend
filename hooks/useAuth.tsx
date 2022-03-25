import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

export default function useAuth() {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const { user } = useContext(UserContext);

  user.firstName !== "" && user.token !== "" ? setIsAuth(true) : setIsAuth(false);

  return { isAuth, setIsAuth };
}
