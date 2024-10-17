import { useEffect } from "react";
import { useParams } from 'react-router';
import { useDispatch} from 'react-redux';
import { Container, Section } from "../components/common/SectionPage/SectionPage.styled";
import Header from "../components/Header/Header";
import EditForm from "../components/EditForm/EditForm";
import BtnBack from "../components/common/BtnBack/BtnBack";
import { getPlaceById } from "../store/places/placesOperations";

const EditItem = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPlaceById(id))
  }, [id, dispatch])
  
  return <>
    <Header />
    <Section>
      <Container>
        <BtnBack/>
        <EditForm />
      </Container>
    </Section>
  </> 
}

export default EditItem;