import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import editIcon from "../../../imgs/edit.svg";
import crossIcon from "../../../imgs/cross.png";
import doneIcon from "../../../imgs/done.svg";
import { Item, ImageWrapper, ButtonWrap, Places, ModifyBtn, DescWrapper, Overview, Date, LowerWrapper } from "./ListItem.styled";
import { deletePlaces, getAllPlaces } from "../../../store/places/placesOperations";

const ListItem = ({ data: { _id, country, places, date, overview, isVisited, image } }) => {
    const dispatch = useDispatch();

    const handleDelete = async(id) => {
        await dispatch(deletePlaces(id));
        dispatch(getAllPlaces());
    }
    return <Item>
        <ImageWrapper style={{
           background: `${`url('${image}') no-repeat center center/cover`}`
          }}>
            <ButtonWrap>
                <ModifyBtn onClick={() => handleDelete(_id)}><img src={crossIcon} alt="remove button"/></ModifyBtn>
                <Link to={`/edit/${_id}`}><img src={editIcon} alt="edit button" width={34}/></Link>
            </ButtonWrap>
        </ImageWrapper>
        <DescWrapper>
            <h2>{country}</h2>
            <Places>{places}</Places>
            <Overview>{overview}</Overview>
            <LowerWrapper style={{justifyContent: "space-between"}}>
                <Date>{date}</Date>
                {isVisited && <LowerWrapper style={{marginTop: "0"}}>
                    <img src={doneIcon} alt="visited" width={20} />
                    visited
                </LowerWrapper>}
            </LowerWrapper>
        </DescWrapper>
    </Item>
}
export default ListItem;