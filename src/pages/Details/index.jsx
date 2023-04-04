import { Container } from "./style";

import { Button } from "../../components/Button";

export function Details() {
  
  return (
    <Container>
      <h1> Hello Word </h1>
      <span> Bruno Oliveira </span>

      <Button title="Entrar" />
      <Button title="Cadastrar" />
      <Button title="Voltar" />
    </Container>
  );
}