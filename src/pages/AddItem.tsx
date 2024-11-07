import { Container, Section } from "../components/common/SectionPage/SectionPage.styled";
import Header from "../components/Header/Header";
import Title from "../components/common/Title/Title";
import AddItemForm from "../components/AddItemForm/AddItemForm";
import BtnBack from "../components/common/BtnBack/BtnBack";

const AddItem = () => {
  return <>
    <Header />
    <Section>
      <Container>
        <BtnBack/>
        <Title name={"Don't hold back your dreams, add new ones"}/>
        <AddItemForm/>
      </Container>
    </Section>
  </>
}

export default AddItem;