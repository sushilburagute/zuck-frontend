import { useContext, useEffect, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { UserContext } from "../context/UserContext";
import { IDish } from "../types/IDish";
import { toast } from "react-hot-toast";
import { fetchFavouritesData, updateFavouritesData } from "../lib/localData";

export default function useFavs(_id?: string) {
  const { user } = useContext(UserContext);
  const [isFav, setIsFav] = useState<Boolean>(false);

  const { isLoading: isFavLoading, data: favData } = useQuery({
    queryKey: ["favourites"],
    queryFn: async () => {
      const data = await fetchFavouritesData(user.token);
      return { data };
    },
    enabled: user.token !== "",
  });

  useEffect(() => {
    if (!isFavLoading) {
      favData?.data.foodFavourites.map((favDish: IDish) => {
        favDish._id === _id && setIsFav(true);
      });
    }
  }, [favData, isFavLoading, _id]);

  const { mutate } = useMutation({
    mutationFn: async (data: any) => {
      return await updateFavouritesData(user.token, data._id, data.type);
    },
    onSuccess: () => {
      toast.success(isFav ? "Removed from Favourites" : "Added to Favourites");
      setIsFav((prev) => !prev);
    },
    onError: () => {
      toast.error("There was some error completing your request.");
    },
  });

  return { isFav, favData, mutate, isFavLoading };
}
