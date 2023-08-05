/* eslint-disable react/prop-types */
import { ButtonSpace } from "./ButtonStyled";

export function Button({ type, text }) {
  return <ButtonSpace type={type}>{text}</ButtonSpace>;
}
