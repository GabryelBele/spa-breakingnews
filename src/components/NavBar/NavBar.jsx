/* eslint-disable no-unused-vars */
import { Link, Outlet, useNavigate } from "react-router-dom";
import logo from "../../images/Logo.png";
import { Nav, ImgLogo, InputSpace, ErrorSpan } from "./NavBarStyled";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../Button/Button.jsx";

const searchSchema = z.object({
  title: z
    .string()
    .nonempty({ message: "A pesquisa não pode ser vazia" })
    .refine((value) => !/^\s*$/.test(value), {
      message: "A pesquisa não pode ter apenas espaços",
    }),
});

export function NavBar() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(searchSchema),
  });
  const navigate = useNavigate();

  function onSearch(data) {
    const { title } = data;
    navigate(`/search/${title}`);
    reset();
  }

  function goAuth() {
    navigate(`/auth`);
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

        <Link to="/auth">
          <Button type="submit" text="Entrar" />
        </Link>
      </Nav>
      {errors.title && <ErrorSpan>{errors.title.message}</ErrorSpan>}
      <Outlet />
    </>
  );
}
