import ListItem from "./ListItem/ListItem";
import { ListEl } from "./List.styled";
import React from "react";
import { Location } from "../../types/location";

interface ListProps {
    data: Location[],
}

const List: React.FC<ListProps> = ({ data }) => { 
return <ListEl>
            {data.map((item) => <ListItem data={item} key={item._id} />)}
        </ListEl>
    
}
export default List;