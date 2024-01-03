import { useEffect } from "react";
import { useParams } from 'react-router';
import { useDispatch} from 'react-redux';
import { Section } from "../components/SectionPage/SectionPage.styled";
import Header from "../components/Header/Header";
import EditForm from "../components/EditForm/EditForm";
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
      <EditForm />
    </Section>
  </> 
}

export default EditItem;