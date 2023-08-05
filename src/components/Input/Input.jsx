import { InputSpace } from "./InputStyled";

// eslint-disable-next-line react/prop-types
export function Input({ type, placeholder}) {
  return (
    <InputSpace type={type} placeholder={placeholder} />
  );
}
