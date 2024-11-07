import { useState, useEffect } from "react";
import { getAllPlaces } from "../services/placesOperations";
import { useQuery } from '@tanstack/react-query';
import { Location } from "../types/location";

export default function usePlaces(typeItem: string) {
  const [placeList, setPlaceList] = useState<Location[]>([]);
  const [selectedList, setSelectedList] = useState<Location[]>([]);

  const { data, isLoading } = useQuery({
    queryKey: ['placesList', typeItem],
    queryFn: getAllPlaces,
  });

  useEffect(() => {
    if (data) {
      setPlaceList(data);
      setSelectedList(data);
    }
  }, [data]);

  useEffect(() => {
    if (placeList) {
      if (typeItem === 'visited') {
        setSelectedList(placeList.filter((item) => item.isVisited));
      } else if (typeItem === 'not visited') {
        setSelectedList(placeList.filter((item) => !item.isVisited));
      } else {
        setSelectedList(placeList);
      }
    }
  }, [typeItem, placeList]);

  return { selectedList, isLoading };
}
