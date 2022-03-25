import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { UserContext } from "../context/UserContext";
import { IDish } from "../types/IDish";

export default function useFavs(_id?: string) {
  const { user } = useContext(UserContext);
  const [isFav, setIsFav] = useState<Boolean>(false);

  const { isLoading: isFavLoading, data: favData } = useQuery("favourites", () =>
    axios.get("http://localhost:5000/api/user/favourites/", {
      headers: {
        "Content-type": "Application/json",
        "X-Auth-Token": user.token,
      },
    })
  );

  useEffect(() => {
    if (!isFavLoading) {
      favData?.data.foodFavourites.map((favDish: IDish) => {
        favDish._id === _id && setIsFav(true);
      });
    }
  }, [favData, isFavLoading, _id]);

  // TODO:  better error handling
  const { mutate } = useMutation(
    async (data: any) => {
      return await axios.post("http://localhost:5000/api/user/favourites/", data, {
        headers: {
          "Content-type": "Application/json",
          "X-Auth-Token": user.token,
        },
      });
    },
    {
      onSuccess: () => {
        setIsFav(!isFav);
      },
    }
  );

  return { isFav, favData, mutate, isFavLoading };
}
