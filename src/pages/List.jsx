import { Section, Container } from "../components/common/SectionPage/SectionPage.styled";
import Header from "../components/Header/Header";
import Title from "../components/common/Title/Title";
import List from "../components/List/List";
import { AddButton } from "../components/common/AddBtn/AddBtn";
import SelectEl from "../components/Select/Select";


const ListPage = () => {
  return <>
    <Header />
    <Section>
      <Container>
        <Title name={"Write notes, Keep your memories"} /> 
        <div style={{ display: "flex",  marginBottom: "70px", alignItems: "center", gap: '20px', flexWrap: 'wrap', justifyContent: "space-between"}}>
          <SelectEl />
          <AddButton />
        </div>
        <List/>
      </Container>
    </Section>
  </>
  
}

export default ListPage;