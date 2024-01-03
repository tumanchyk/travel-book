import {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPlaces } from '../store/places/placesOperations';

const useCurrentList = () => {
    const [currentList, setCurrentList] = useState([]);
    const dispatch = useDispatch();

    const list = useSelector(state => state.places.list);
    const typeList = useSelector(state => state.places.type);
    
    useEffect(() => {
        dispatch(getAllPlaces())  
    }, [dispatch])

    useEffect(() => {
        if (typeList === "visited") {
            const newList = list.filter(item => item.isVisited)
            setCurrentList(newList)
        } else if (typeList === "not visited") {
            const newList = list.filter(item => !item.isVisited)
            setCurrentList(newList)
        } else {
            setCurrentList(list)
        }
    }, [typeList, list]);

    return currentList;
}
export default useCurrentList;