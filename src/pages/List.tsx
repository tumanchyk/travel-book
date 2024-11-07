import { useState } from "react";
import usePlaces from "../hooks/usePlaces";
import { Section, Container } from "../components/common/SectionPage/SectionPage.styled";
import Header from "../components/Header/Header";
import Title from "../components/common/Title/Title";
import List from "../components/List/List";
import { AddButton } from "../components/common/AddBtn/AddBtn";
import SelectEl from "../components/Select/Select";
import Loader from "../components/common/Loader";
import { NoItems } from "../components/List/List.styled";

const ListPage = () => {
  const [type, setType] = useState<string>("all");
  const { selectedList, isLoading } = usePlaces(type);
  
  if (isLoading) {
    return <Loader/>
  }
  
  return <>
    <Header />
    <Section>
      <Container>
        <Title name={"Write notes, Keep your memories"} /> 
        <div style={{ display: "flex",  marginBottom: "70px", alignItems: "center", gap: '20px', flexWrap: 'wrap', justifyContent: "space-between"}}>
          <div>{selectedList.length > 0 && <SelectEl type={type} setType={setType} />}</div>
          <AddButton />
        </div>
          {selectedList && selectedList.length <= 0 ?
            <NoItems>Any {type === "all" ? "" : type} locations in your list</NoItems>
            : 
            <List data={selectedList} />
          }
      </Container>
    </Section>
  </>
  
}

export default ListPage;