import { Container, Form, Background } from "./style";

import { Input } from "../../components/Input";
import {Button} from "../../components/Button"
import {FiMail, FiLock} from "react-icons/fi"



export function Signin (){
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>

        <Input placeholder="E-mail" Type="text" icon={FiMail} />

        <Input placeholder="Senha" Type="password" icon={FiLock} />


        <Button title= "Entrar"/>

        <a a href="#">
          Criar conta
        </a>
      </Form>

      <Background/>
    </Container>
  );
};