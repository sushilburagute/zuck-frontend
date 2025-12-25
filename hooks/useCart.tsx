import axios from "axios";
import { useContext } from "react";
import toast from "react-hot-toast";
import { useMutation, useQuery } from "@tanstack/react-query";
import { UserContext } from "../context/UserContext";

export default function useCart(_id?: string) {
  const { user } = useContext(UserContext);

  const {
    isLoading: isCartLoading,
    data: cartData,
    refetch,
  } = useQuery({
    queryKey: ["cart"],
    queryFn: () =>
      axios.get("https://zuck-backend.up.railway.app/api/user/cart/", {
        headers: {
          "Content-type": "Application/json",
          "X-Auth-Token": user.token,
        },
      }),
    refetchOnMount: true,
    enabled: user.token !== "",
  });

  const { mutate } = useMutation({
    mutationFn: async (data: any) => {
      return await axios.post("https://zuck-backend.up.railway.app/api/user/cart/", data, {
        headers: {
          "Content-type": "Application/json",
          "X-Auth-Token": user.token,
        },
      });
    },
    onSuccess: () => {
      toast.success("Cart Updated");
      refetch();
    },
    onError: () => {
      toast.error("There was some error completing your request.");
    },
  });

  return { cartData, mutate, isCartLoading };
}
