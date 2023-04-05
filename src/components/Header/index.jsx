
import { Container, Profile, Logout } from './style'

export function Header () {
  return (
    <Container>

      <h2>RocketMovies</h2>

      <Profile>
        <div>
          <strong>Bruno Oliveira</strong>
          <Logout> Sair </Logout>
        </div>

        <img
          src="https://github.com/bruno-deoliveira.png"
          alt="Foto so usuário"
        />
      </Profile>

    </Container>
  );
}