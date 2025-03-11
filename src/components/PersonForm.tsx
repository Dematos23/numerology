import Link from "next/link";
import {
  ModalFormInput,
  NewRegisterModalProps,
} from "@/types/components.types";

export default function NewRegisterModal({
  isOpen,
  ModalInputs,
  title,
  onSubmit,
}: NewRegisterModalProps) {
  if (!isOpen) return null;
  let avoidedIndex = -1;

  // CLASS NAMES
  const lonelyInputContainerClassname = "grid grid-cols-1 m-2";
  const InputsContainerClassname = "grid grid-cols-1 sm:grid-cols-2 m-2 gap-4";

  const labelClassname = "grid grid-cols-7 mx-1";

  const lonelySpanClassname = "sm:col-span-1 mr-5 col-span-7";
  const spanClassname = "sm:col-span-2 mr-5 col-span-7";

  const lonelyInputClassname =
    "border border-gray-300 rounded-md sm:col-span-6 col-span-7 py-1 px-2 focus:outline-none focus:ring-1 focus:ring-blue-700 focus:border-blue-700";
  const inputClassname =
    "border border-gray-300 rounded-md sm:col-span-5 col-span-7 py-1 px-2 focus:outline-none focus:ring-1 focus:ring-blue-700 focus:border-blue-700";

  const lonelySelectClassname =
    "border border-gray-300 rounded-md sm:col-span-6 col-span-7 py-1 px-2 focus:outline-none focus:ring-1 focus:ring-blue-700 focus:border-blue-700";
  const selectClassname =
    "border border-gray-300 rounded-md sm:col-span-5 col-span-7 py-1 px-2 focus:outline-none focus:ring-1 focus:ring-blue-700 focus:border-blue-700";

  function renderInput(
    input: ModalFormInput,
    index: number,
    spanClassName: string,
    inputClassName: string,
    selectClassName: string
  ) {
    switch (input.type) {
      case "text":
        return (
          <label className={labelClassname}>
            <span className={spanClassName}>{input.span}</span>
            <input
              id={input.span}
              name={input.key}
              type={input.type}
              className={inputClassName}
              required={input.required}
              autoComplete={"on"}
            />
          </label>
        );
      case "select":
        return (
          <label className={labelClassname}>
            <span className={spanClassName}>{input.span}</span>
            <select
              className={selectClassName}
              name={input.key}
              required={input.required}
              autoComplete={"on"}
            >
              <option value="">Seleccionar</option>
              {input.options?.map((option, index) => (
                <option value={option.key} key={index}>
                  {option.value}
                </option>
              ))}
            </select>
          </label>
        );
      case "number":
        return (
          <label className={labelClassname}>
            <span className={spanClassName}>{input.span}</span>
            <input
              id={input.span}
              name={input.key}
              type={input.type}
              className={inputClassName}
              required={input.required}
              autoComplete={"on"}
            />
          </label>
        );
      case "date":
        return (
          <label className={labelClassname}>
            <span className={spanClassName}>{input.span}</span>
            <input
              id={input.span}
              name={input.key}
              type={input.type}
              className={inputClassName}
              required={input.required}
              autoComplete={"on"}
            />
          </label>
        );
      case "time":
        return (
          <label className={labelClassname}>
            <span className={spanClassName}>{input.span}</span>
            <input
              id={input.span}
              name={input.key}
              type={input.type}
              className={inputClassName}
              required={input.required}
              autoComplete={"on"}
            />
          </label>
        );
      case "email":
        return (
          <label className={labelClassname}>
            <span className={spanClassName}>{input.span}</span>
            <input
              id={input.span}
              name={input.key}
              type={input.type}
              className={inputClassName}
              required={input.required}
              autoComplete={"on"}
            />
          </label>
        );
      default:
        return <p key={index}>Input type desconocido</p>;
    }
  }

  return (
    <div className="fixed inset-0 bg-gray-100 flex items-center justify-center z-50">
      <Link href="?" className="absolute inset-0"></Link>
      <div className="bg-white rounded-md p-2 relative w-full mx-1 sm:max-w-3xl shadow-lg">
        <h1 className="font-semibold text-center text-lg py-2">{title}</h1>
        <form
          className="grid grid-flow-row auto-rows-max"
          action={onSubmit}
          autoComplete="on"
        >
          {ModalInputs.map((input, index) => {
            if (index === avoidedIndex) return null;
            if (
              input.inline === "full" ||
              (input.inline === "half" && !ModalInputs[index + 1])
            ) {
              return (
                <div className={lonelyInputContainerClassname} key={index}>
                  {renderInput(
                    input,
                    index,
                    lonelySpanClassname,
                    lonelyInputClassname,
                    lonelySelectClassname
                  )}
                </div>
              );
            }
            if (
              input.inline === "half" &&
              ModalInputs[index + 1]?.inline === "half"
            ) {
              avoidedIndex = index + 1;
              return (
                <div className={InputsContainerClassname} key={index}>
                  {renderInput(
                    input,
                    index,
                    spanClassname,
                    inputClassname,
                    selectClassname
                  )}
                  {renderInput(
                    ModalInputs[index + 1],
                    index,
                    spanClassname,
                    inputClassname,
                    selectClassname
                  )}
                </div>
              );
            }
          })}

          <div className="flex justify-end gap-x-4 mt-4 border-t border-gray-300">
            <Link
              href="?"
              className="bg-red-700 rounded-md text-white py-1 px-2 hover:bg-red-500 focus:bg-red-500 mt-4 text-center w-20 focus:outline-none focus:ring-1 focus:ring-red-700 focus:border-red-700"
            >
              Cerrar
            </Link>
            <button
              type="submit"
              className="bg-blue-700 rounded-md text-white py-1 px-2 hover:bg-blue-500 focus:bg-blue-500 mt-4 text-center w-20 focus:outline-none focus:ring-1 focus:ring-blue-700 focus:border-blue-700"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
