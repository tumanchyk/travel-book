import { useEffect, useState } from "react";
import { useParams } from 'react-router';
import { Container, Section } from "../components/common/SectionPage/SectionPage.styled";
import Header from "../components/Header/Header";
import EditForm from "../components/EditForm/EditForm";
import BtnBack from "../components/common/BtnBack/BtnBack";
import { getPlaceById } from "../services/placesOperations";
import { Location } from "../types/location";

const EditItem = () => {
  const [formData, setFormData]= useState<Location | null>(null)
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    id && getPlaceById(id).then(data => setFormData(data))
  }, [id])
  
  return <>
    <Header />
    <Section>
      <Container>
        <BtnBack/>
        <EditForm place={formData}/>
      </Container>
    </Section>
  </> 
}

export default EditItem;