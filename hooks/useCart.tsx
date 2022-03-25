import axios from "axios";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useMutation, useQuery } from "react-query";
import { UserContext } from "../context/UserContext";

export default function useCart(_id?: string) {
  const { user } = useContext(UserContext);

  const {
    isLoading: isCartLoading,
    data: cartData,
    refetch,
  } = useQuery(
    "cart",
    () =>
      axios.get("https://zuck-backend.up.railway.app/api/user/cart/", {
        headers: {
          "Content-type": "Application/json",
          "X-Auth-Token": user.token,
        },
      }),
    {
      refetchOnMount: true,
      enabled: user.token !== "",
    }
  );

  // TODO:  better error handling

  const { mutate } = useMutation(
    async (data: any) => {
      return await axios.post("https://zuck-backend.up.railway.app/api/user/cart/", data, {
        headers: {
          "Content-type": "Application/json",
          "X-Auth-Token": user.token,
        },
      });
    },
    {
      onSuccess: () => {
        toast.success("Cart Updated");
        refetch();
      },
      onError: () => {
        toast.error("There was some error completing your request.");
      },
    }
  );

  return { cartData, mutate, isCartLoading };
}
