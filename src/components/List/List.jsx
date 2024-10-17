import { useSelector } from 'react-redux';
import useCurrentList from '../../hooks/useCurrentList';
import ListItem from "./ListItem/ListItem";
import { ListEl, NoItems } from "./List.styled";

const List = () => {
    const typeList = useSelector(state => state.places.type);
    const currentList = useCurrentList(); 
        return <>
        {currentList.length <= 0 ?
            <NoItems>Any {typeList === "all" ? "" : typeList} locations in your list</NoItems>
            : 
            <ListEl>
                {currentList.map(item => <ListItem data={item} key={item._id} />)}
            </ListEl>
        }
    </>
}
export default List;