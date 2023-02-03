import { StyledLogin } from "./styles.js";
import { StyledButton } from "../../components/button";
import { StyledInput } from "../../components/input";
import { StyledForm } from "../../components/form/index.js";
import Logo from "../../assets/img/Logo.svg";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { ApiContext } from "../../contexts/ApiContext.jsx";

export function Login() {
  const { login } = useContext(ApiContext);

  const formSchena = yup.object().shape({
    email: yup.string().required("Email obrigatório").email("Email invalido"),
    password: yup.string().required("Senha obrigatoria"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(formSchena),
  });

  return (
    <StyledLogin>
      <img src={Logo} alt="Kenzie Hub" />

      <StyledForm onSubmit={handleSubmit(login)}>
        <h2>Login</h2>
        <label htmlFor="email">
          Email
          <StyledInput
            required={true}
            placeholder="Seu e-mail"
            type="email"
            id="email"
            {...register("email")}
          />
          <span>{errors.email && errors.email.message}</span>
        </label>
        <label htmlFor="password">
          Senha
          <StyledInput
            required={true}
            placeholder="Sua senha"
            type="password"
            id="password"
            {...register("password")}
          />
          <span>{errors.password && errors.password.message}</span>
        </label>
        <StyledButton type="submit" disabled={!isDirty || !isValid}>
          Entrar
        </StyledButton>
        <span>Ainda não possui uma conta?</span>
        <Link to="/register">Cadastre-se</Link>
      </StyledForm>
    </StyledLogin>
  );
}
