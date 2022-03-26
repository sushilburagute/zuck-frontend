import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { UserContext } from "../context/UserContext";
import { IDish } from "../types/IDish";
import { toast } from "react-hot-toast";

export default function useFavs(_id?: string) {
  const { user } = useContext(UserContext);
  const [isFav, setIsFav] = useState<Boolean>(false);

  const { isLoading: isFavLoading, data: favData } = useQuery(
    "favourites",
    () =>
      axios.get("https://zuck-backend.up.railway.app/api/user/favourites/", {
        headers: {
          "Content-type": "Application/json",
          "X-Auth-Token": user.token,
        },
      }),
    {
      enabled: user.token !== "",
    }
  );

  useEffect(() => {
    if (!isFavLoading) {
      favData?.data.foodFavourites.map((favDish: IDish) => {
        favDish._id === _id && setIsFav(true);
      });
    }
  }, [favData, isFavLoading, _id]);

  const { mutate } = useMutation(
    async (data: any) => {
      return await axios.post("https://zuck-backend.up.railway.app/api/user/favourites/", data, {
        headers: {
          "Content-type": "Application/json",
          "X-Auth-Token": user.token,
        },
      });
    },
    {
      onSuccess: () => {
        toast.success(isFav ? "Removed from Favourites" : "Added to Favourites");
        setIsFav(!isFav);
      },
      onError: () => {
        toast.error("There was some error completing your request.");
      },
    }
  );

  return { isFav, favData, mutate, isFavLoading };
}
