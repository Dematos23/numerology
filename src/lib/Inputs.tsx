import { ModalFormInput } from "@/types/components.types";

export const PersonInputs: ModalFormInput[] = [
  {
    type: "text",
    span: "Nombre",
    inline: "half",
    key: "name",
    required: true,
  },
  {
    type: "text",
    span: "Segundo nombre",
    inline: "half",
    key: "secondName",
    required: true,
  },
  {
    type: "text",
    span: "Apellido",
    inline: "half",
    key: "lastname",
    required: true,
  },
  {
    type: "text",
    span: "Segundo apellido",
    inline: "half",
    key: "secondLastname",
    required: true,
  },
  {
    type: "text",
    span: "Nombre Espiritual",
    inline: "half",
    key: "spiritualName",
    required: false,
  },
  {
    type: "date",
    span: "Fecha de nacimiento",
    inline: "half",
    key: "birth",
    required: true,
  },
];
