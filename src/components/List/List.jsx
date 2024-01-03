import { useSelector } from 'react-redux';
import useCurrentList from '../../hooks/useCurrentList';
import ListItem from "./ListItem/ListItem";
import { ListEl, HeadList, HeadItem, NoItems } from "./List.styled";

const List = () => {
    const typeList = useSelector(state => state.places.type);
    const currentList = useCurrentList();
   
    return <>
        { currentList.length <= 0 ? <NoItems>Any {typeList === "all" ? "" : typeList} locations in your list</NoItems>
        : <>
        <HeadList>
            <HeadItem width ={"245px"}>Country</HeadItem>
            <HeadItem width ={"245px"}>Places</HeadItem>
            <HeadItem width ={"245px"}>Date</HeadItem>
            <HeadItem width ={"255px"}>Overview</HeadItem>
            <HeadItem width ={"120px"}>Visited</HeadItem>
        </HeadList>
        <ListEl>
            {currentList.map(item => <ListItem data={item} key={item._id} />)}
        </ListEl>
        </>}
    </>
}
export default List;