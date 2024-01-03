import { Section } from "../components/SectionPage/SectionPage.styled";
import Header from "../components/Header/Header";
import Title from "../components/Title/Title";
import AddItemForm from "../components/AddItemForm/AddItemForm";

const AddItem = () => {
  return <>
    <Header />
    <Section>
      <Title name={"Don't hold back your dreams, add new ones"}/>
      <AddItemForm/>
    </Section>
  </>
}

export default AddItem;