import React from "react";
import { Link } from "react-router-dom";
import {
  useQueryClient,
  useMutation
} from '@tanstack/react-query';
import editIcon from "../../../imgs/edit.svg";
import crossIcon from "../../../imgs/cross.png";
import doneIcon from "../../../imgs/done.svg";
import { Item, ImageWrapper, ButtonWrap, Places, ModifyBtn, DescWrapper, Overview, Date, LowerWrapper } from "./ListItem.styled";
import { Location } from "../../../types/location";
import { deletePlaces } from "../../../services/placesOperations";

interface ListItem {
    data: Location,
}
const ListItem: React.FC<ListItem> = ({ data: { _id, country, places, date, overview, isVisited, image }}) => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationKey: ['remove place'],
    mutationFn: (id: string) => deletePlaces(id),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["placesList"]})
    }
  })

  const handleDelete = (id: string) => {
    mutate(id)
  }
    return <Item>
        <ImageWrapper style={{
           background: `${`url('${image}') no-repeat center center/cover`}`
          }}>
            <ButtonWrap>
                <ModifyBtn onClick={() => {_id && handleDelete(_id)}}><img src={crossIcon} alt="remove button"/></ModifyBtn>
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