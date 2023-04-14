import { Container, Brand, Menu, Search, Content, NewNote } from "./style";

import { FiPlus, FiSearch } from "react-icons/fi";

import { Header } from "../../components/Header";
import { ButtonText } from "./../../components/ButtonText";
import { Input } from "../../components/Input";
import { Notes } from "../../components/Notes";
import { Section } from "../../components/Section";

export function Home() {
  return (
    <Container>
      <Brand></Brand>

      <Header />
      <Menu>
        <li>
          <ButtonText title="Todos" isActive />
        </li>
        <li>
          <ButtonText title="Filmes" />
        </li>
        <li>
          <ButtonText title="Tags" />
        </li>
      </Menu>

      <Search>
        <Input placeholder="Como pesquisar pelo titulo" icon={FiSearch} />
      </Search>

      <Content>
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
      </Content>
      <NewNote>
        <FiPlus />
        Criar Nota
      </NewNote>
    </Container>
  );
}
