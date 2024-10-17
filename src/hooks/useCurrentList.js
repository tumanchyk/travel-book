import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPlaces } from '../store/places/placesOperations';

const useCurrentList = () => {
  const [currentList, setCurrentList] = useState([]);
  const dispatch = useDispatch();

  const list = useSelector((state) => state.places.list);
  const typeList = useSelector((state) => state.places.type);

  useEffect(() => {
    dispatch(getAllPlaces());
  }, [dispatch]);

  useEffect(() => {
    if (typeList === 'visited') {
      setCurrentList(list.filter((item) => item.isVisited));
    } else if (typeList === 'not visited') {
      setCurrentList(list.filter((item) => !item.isVisited));
    } else {
      setCurrentList(list);
    }
  }, [typeList, list]);

  return currentList;
};

export default useCurrentList;
