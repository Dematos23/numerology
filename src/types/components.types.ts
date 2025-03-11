// NEW REG TYPES 
export interface NewRegisterModalProps {
  isOpen: boolean;
  title: string;
  ModalInputs: ModalFormInput[];
  onSubmit: (data: FormData) => void;
}

export interface ModalFormInput {
  type: string;
  span: string;
  inline: "half" | "full";
  key: string;
  options?: Option[];
  required: boolean;
}

export interface Option {
  key: string;
  value: string;
}

// TABLE TYPES
export interface TableProps<T> {
  data: T[];
}

export interface Header {
  head: string;
  headKey: string;
  hiddeOnSmall: boolean;
}

export interface TableData {
  id: string | undefined;
  [key: string]:
    | string
    | number
    | Date
    | null
    | undefined
}

