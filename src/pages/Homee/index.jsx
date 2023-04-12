import { Container } from "./style";

import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Notes } from "../../components/Notes" 

export function Homee (){
  return (
    <Container>
      <Header />
      <main>
      
          <Section title="Meus filmes">
            <Notes
              data={{
                title: "Interestellar",
                tags: [
                  { id: "1", name: "drama" },
                  { id: "2", name: "Ficção Cientifica" },
                  { id: "3", name: "Familia" },
                ],
              }}
            />
          </Section>
     
      </main>
    </Container>
  );
};