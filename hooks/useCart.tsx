import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { QueryClient, useMutation, useQuery } from "react-query";
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
      axios.get("http://localhost:5000/api/user/cart/", {
        headers: {
          "Content-type": "Application/json",
          "X-Auth-Token": user.token,
        },
      }),
    {
      refetchOnMount: true,
    }
  );

  // TODO:  better error handling

  const { mutate } = useMutation(
    async (data: any) => {
      return await axios.post("http://localhost:5000/api/user/cart/", data, {
        headers: {
          "Content-type": "Application/json",
          "X-Auth-Token": user.token,
        },
      });
    },
    {
      onSuccess: () => {
        refetch();
      },
    }
  );

  return { cartData, mutate, isCartLoading };
}
