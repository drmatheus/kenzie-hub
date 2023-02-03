import { StyledRegister } from "./styles.js";
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

export function Register() {
  const { registerApi } = useContext(ApiContext);

  const formSchena = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("Email obrigatório").email("Email invalido"),
    password: yup
      .string()
      .required("Senha obrigatoria")
      .min(8, "Sua senha precisa ter no minimo 8 caracteres")
      .matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Use uma senha com no minimo 8 caracteres, sendo, 1 letra minuscula, 1 letra maiuscula, 1 numero e um caractere especial."
      ),
    repeatPassword: yup
      .string()
      .required("Você precisa repetir sua senha")
      .oneOf([yup.ref("password"), null], "Senhas não conhecidem"),
    bio: yup.string().required("Fale um pouco sobre você"),
    contact: yup
      .string()
      .required("Contato obrigatório")
      .min(11, "Contato invalido"),
    course_module: yup.string().required("Selecione o seu modulo."),
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
    <StyledRegister>
      <div>
        <div>
          <img src={Logo} alt="Kenzie Hub" /> <Link to="/login">Voltar</Link>{" "}
        </div>
      </div>
      <StyledForm onSubmit={handleSubmit(registerApi)}>
        <section>
          <h2>Crie sua conta</h2>
          <span>Rapido e grátis, vamos nessa</span>
        </section>
        <section>
          <label htmlFor="name">
            Nome
            <StyledInput
              type="text"
              id="name"
              placeholder="Digite aqui seu nome"
              {...register("name")}
            />
          </label>
          <span>{errors.name && errors.name.message}</span>
          <label htmlFor="email">
            Email
            <StyledInput
              type="mail"
              id="email"
              placeholder="Digite aqui seu email"
              {...register("email")}
            />
          </label>
          <span>{errors.email && errors.email.message}</span>
          <label htmlFor="password">
            Senha
            <StyledInput
              type="password"
              id="password"
              placeholder="Digite aqui sua senha"
              {...register("password")}
            />
          </label>
          <span>{errors.password && errors.password.message}</span>
          <label htmlFor="repeatPassword">
            Confirmar Senha
            <StyledInput
              type="password"
              id="repeatPassword"
              placeholder="Digite novamente sua senha"
              {...register("repeatPassword")}
            />
          </label>
          <span>{errors.repeatPassword && errors.repeatPassword.message}</span>
        </section>
        <section>
          <label htmlFor="bio">
            Bio
            <StyledInput
              type="text"
              id="bio"
              placeholder="Fale sobre você"
              {...register("bio")}
            />
          </label>
          <span>{errors.bio && errors.bio.message}</span>
          <label htmlFor="contact">
            Contato
            <StyledInput
              type="text"
              id="contact"
              placeholder="Opção de contato"
              {...register("contact")}
            />
          </label>
          <span>{errors.contact && errors.contact.message}</span>
          <label htmlFor="module">
            Selecionar módulo
            <select name="module" id="module" {...register("course_module")}>
              <option value="">Selecionar módulo</option>
              <option value="Primeiro módulo (Introdução ao Frontend)">
                Módulo 1
              </option>
              <option value="Segundo módulo (Frontend Avançado)">
                Módulo 2
              </option>
              <option value="Terceiro módulo (Introdução ao Backend)">
                Módulo 3
              </option>
              <option value="Quarto módulo (Backend Avançado)">Módulo 4</option>
            </select>
          </label>
          <span>{errors.module && errors.module.message}</span>
        </section>
        <section>
          <StyledButton disabled={!isDirty || !isValid} type="submit">
            Cadastrar
          </StyledButton>
        </section>
      </StyledForm>
    </StyledRegister>
  );
}
