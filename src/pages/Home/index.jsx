import { FiPlus, FiSearch } from "react-icons/fi";

import { Container, Brand, Menu, Search, Content, NewNote } from "./style";

import { Header } from "../../components/Header";
import { ButtonText } from './../../components/ButtonText/';
import { Input } from "../../components/Input"


export function Home () {
  return (
    <Container>
      <Brand></Brand>

      <Header />
      <Menu>
        <li><ButtonText title="Todos" isActive/></li>
        <li><ButtonText title="Filmes" /></li>
        <li><ButtonText title="Tags" /></li>
      </Menu>

      <Search>
        <Input placeholder="Como pesquisar pelo titulo" icon={FiSearch}/>
      </Search>
      
      <Content></Content>
      <NewNote>
        <FiPlus /> 
        Criar Nota
      </NewNote>
    </Container>
  );
}
