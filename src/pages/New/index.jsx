import {Container, Form} from './style';

import {Header} from '../../components/Header';
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/NoteItem"
import { Section } from "../../components/Section"
import { Button } from "../../components/Button";




export function New (){
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1> Criar Nota</h1>
            <a href="/">voltar</a>
          </header>

          <Input placeholder="Titulo" />
          <Textarea placeholder="Observações" />

          <Section title=" Links Úteis">
            <NoteItem value="https://github.com" />
            <NoteItem isNew placeholder="Novo link" />
          </Section>

          <Section title="Marcadores">
            <div className='tags'>
              <NoteItem value="React" />
              <NoteItem isNew placeholder="Nova tag" />
            </div>
          </Section>

          <Button title="Salvar"/>
        </Form>
      </main>
    </Container>
  );
}