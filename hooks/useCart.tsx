import { useContext } from "react";
import toast from "react-hot-toast";
import { useMutation, useQuery } from "@tanstack/react-query";
import { UserContext } from "../context/UserContext";
import { fetchCartData, updateCartData } from "../lib/localData";

export default function useCart(_id?: string) {
  const { user } = useContext(UserContext);

  const {
    isLoading: isCartLoading,
    data: cartData,
    refetch,
  } = useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const data = await fetchCartData(user.token);
      return { data };
    },
    refetchOnMount: true,
    enabled: user.token !== "",
  });

  const { mutate } = useMutation({
    mutationFn: async (data: any) => {
      return await updateCartData(user.token, data);
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
