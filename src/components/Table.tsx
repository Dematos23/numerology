import { TableProps } from "@/types/components.types";
import { NumerologyValue } from "@/types/schema.types";

export default async function Table<T extends NumerologyValue>(
  props: TableProps<T>
) {
  const { data } = props;

  const containerClassName =
    "max-h-[calc(100vh-250px)] sm:max-w-[calc(100vw-50px)] scrollbar-hide overflow-y-auto shadow-md rounded-lg mx-auto";
  const tableClassName = "table-fixed w-full text-sm text-left text-gray-700";
  const theadClassName =
    "text-xs text-white uppercase bg-blue-700 sticky top-0";
  const thClassName = `py-1 px-1 sm:py-2 sm:px4 px-2 text-center`;
  const trClassName = "odd:bg-white even:bg-gray-50 border-b";
  const tdClassName = `whitespace-nowrap py-1 px-1 sm:py-2 sm:px4 px-2 text-center text-wrap: wrap`;

  return (
    <div className={containerClassName}>
      <table className={tableClassName}>
        <thead className={theadClassName}>
          <tr>
            {/* Normal Columns */}
            {data.map((item, index) => (
              <th key={index} scope="col" className={thClassName}>
                {item.id}
              </th>
            ))}
          </tr>
        </thead>
        {/* Table Body */}
        <tbody>
          <tr className={trClassName}>
            {data.map((item, index) => (
              <td key={index} className={tdClassName}>
                {item.planet ?? "Sin datos"}
              </td>
            ))}
          </tr>
          <tr className={trClassName}>
            {data.map((item, index) => (
              <td key={index} className={tdClassName}>
                {item.number ?? "Sin datos"}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
