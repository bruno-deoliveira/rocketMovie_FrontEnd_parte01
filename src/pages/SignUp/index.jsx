import { Container, Form, Background } from "./style";


import { Input } from "../../components/Input";
import {Button} from "../../components/Button"
import { FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi";



export function SignUp (){
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>

        <Input placeholder="Nome" Type="text" icon={FiUser} />
        <Input placeholder="E-mail" Type="text" icon={FiMail} />
        <Input placeholder="Senha" Type="password" icon={FiLock} />
        <Button title="Cadastrar" />

        <a a href="#">
          <FiArrowLeft />
          Voltar para o login
        </a>
      </Form>

      <Background />
    </Container>
  );
};