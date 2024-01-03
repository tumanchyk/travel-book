import { Section, Container } from "../components/SectionPage/SectionPage.styled";
import Header from "../components/Header/Header";
import Title from "../components/Title/Title";
import List from "../components/List/List";
import { AddButton } from "../components/AddBtn/AddBtn";
import SelectEl from "../components/Select/Select";


const ItemList = () => {
  return <>
    <Header />
    <Section>
      <Container>
        <Title name={"Write notes, Keep your memories"} /> 
        <div style={{ display: "flex",  marginBottom: "50px", alignItems: "center"}}>
          <SelectEl />
          <AddButton />
        </div>
        <List/>
      </Container>
    </Section>
  </>
  
}

export default ItemList;