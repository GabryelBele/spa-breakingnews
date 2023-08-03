/* eslint-disable no-unused-vars */
import { Link, Outlet, useNavigate } from "react-router-dom";
import logo from "../../images/Logo.png";
import { Button, Nav, ImgLogo, InputSpace } from "./NavBarStyled";
import { useForm } from "react-hook-form";

export function NavBar() {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  function onSearch(data) {
    const { title } = data;
    navigate(`/search/${title}`);
    reset();
  }

  return (
    <>
      <Nav>
        <form onSubmit={handleSubmit(onSearch)}>
          <InputSpace className="input-search-space">
            <button type="submit">
              <i className="bi bi-search"></i>
            </button>

            <input
              {...register("title")}
              type="text"
              placeholder="Pesquise por um título"
            />
          </InputSpace>
        </form>
        <Link to="/">
          <ImgLogo className="logo" src={logo} alt="Logo" />
        </Link>

        <Button>Entrar</Button>
      </Nav>
      <Outlet />
    </>
  );
}
