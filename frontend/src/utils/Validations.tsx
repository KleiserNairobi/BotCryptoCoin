import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
  password: yup.string().required("Senha é obrigatória"),
});

export const registerSchema = yup.object().shape({
  cadUsername: yup.string().required("Nome é obrigatório"),
  cadEmail: yup
    .string()
    .email("E-mail inválido")
    .required("E-mail é obrigatório"),
  cadPassword: yup.string().required("Senha é obrigatória"),
  cadConfPassword: yup
    .string()
    .oneOf([yup.ref("cadPassword")], "As senhas não coincidem")
    .required("Confirmação de senha é obrigatória"),
});
