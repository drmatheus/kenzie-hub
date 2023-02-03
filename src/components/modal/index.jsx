import { StyledForm } from "../form";
import { StyledButton } from "../button";
import { StyledInput } from "../input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";

export function ModalNewTech({ close }) {
  const formSchena = yup.object().shape({
    title: yup.string().required("Nome da tecnologia obrigatório"),
    status: yup.string().required("Selecione um status da tecnologia"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(formSchena),
  });

  const { submitTechnology } = useContext(TechContext);

  return (
    <StyledForm
      onSubmit={handleSubmit((data) => submitTechnology(data, close))}
    >
      <label htmlFor="name">
        Nome
        <StyledInput
          id="name"
          placeholder="Tecnologia"
          {...register("title")}
        />
        {errors.title && <span>{errors.title.message}</span>}
      </label>
      <label htmlFor="level">
        Selecionar Status
        <select id="level" {...register("status")}>
          <option value="">Selecionar Status</option>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>
        {errors.status && <span>{errors.status.message}</span>}
      </label>
      <StyledButton type="submit">Cadastrar Tecnologia</StyledButton>
    </StyledForm>
  );
}

export function ModalEditTech({ close, title, status, id }) {
  const { submitDeleteTechnology, submitAttTechnology } =
    useContext(TechContext);

  const formSchena = yup.object().shape({
    status: yup
      .string()
      .required("Selecione um status da tecnologia")
      .default(status),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(formSchena),
  });

  return (
    <StyledForm
      onSubmit={handleSubmit((data) => submitAttTechnology(data, id, close))}
    >
      <label htmlFor="name">
        Nome
        <StyledInput id="name" defaultValue={title} readOnly={true} />
      </label>
      <label htmlFor="level">
        Selecionar Status
        <select id="level" {...register("status")} defaultValue={status}>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>
        {errors.status && <span>{errors.status.message}</span>}
      </label>

      <div>
        <StyledButton type="submit">Cadastrar Tecnologia</StyledButton>
        <StyledButton
          type="button"
          onClick={() => submitDeleteTechnology(close, id)}
        >
          Excluir
        </StyledButton>
      </div>
    </StyledForm>
  );
}
