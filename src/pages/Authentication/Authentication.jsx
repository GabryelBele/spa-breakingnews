import { useForm } from "react-hook-form";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { AuthContainer, Section } from "./AuthenticationStyled";

export function Authentication() {
  const {
    register: registerSignup,
    handleSubmit: handleSubmitSignup,
    formState: { errors: errorsSignup },
  } = useForm();

  const {
    register: registerSignin,
    handleSubmit: handleSubmitSignin,
    formState: { errors: errorsSignin },
  } = useForm();

  async function inHanleSubmit(data) {
    console.log(data);
  }

  async function upHanleSubmit(data) {
    console.log(data);
  }

  return (
    <AuthContainer>
      <Section type="signin">
        <h2>Entrar</h2>
        <form onSubmit={handleSubmitSignin(inHanleSubmit)}>
          <Input
            type="email"
            placeholder="E-mail"
            name="email"
            register={registerSignin}
          />

          <Input
            type="password"
            placeholder="Senha"
            name="password"
            register={registerSignin}
          />

          <Button type="submit" text="Entrar" />
        </form>
      </Section>

      <Section type="signup">
        <h2>Cadastrar</h2>
        <form onSubmit={handleSubmitSignup(upHanleSubmit)}>
          <Input
            type="text"
            placeholder="Nome"
            name="name"
            register={registerSignup}
          />

          <Input
            type="email"
            placeholder="E-mail"
            name="email"
            register={registerSignup}
          />

          <Input
            type="password"
            placeholder="Senha"
            name="password"
            register={registerSignup}
          />

          <Input
            type="password"
            placeholder="Confirmar senha"
            name="confirmPassword"
            register={registerSignup}
          />

          <Button type="submit" text="Cadastrar" />
        </form>
      </Section>
    </AuthContainer>
  );
}
