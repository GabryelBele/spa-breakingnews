import logo from "../../images/Logo.png";
import { Button, Nav,ImgLogo, InputSpace } from "./NavBarStyled";

export default function NavBar() {
  const logobn = logo;

  return (
    <>
      <Nav>
        <InputSpace className="input-search-space">
          <i className="bi bi-search"></i>
          <input type="text" placeholder="Pesquise por um título" />
        </InputSpace>
        <ImgLogo className="logo" src={logobn} alt="Logo" />

        <Button>Entrar</Button>
      </Nav>
    </>
  );
}