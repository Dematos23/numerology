import PersonForm from "@/components/PersonForm";
import Table from "@/components/Table";
import { NumerologyData } from "@/lib/data/data";
import { PersonInputs } from "@/lib/Inputs";
import { NumerologyValue } from "@/types/schema.types";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{
    personModal?: string;
    name?: string;
    secondName?: string;
    lastname?: string;
    secondLastname?: string;
    spiritualName?: string;
    birth?: string;
  }>;
}) {
  const resolvedSearchParams = await searchParams;
  const {
    personModal: searchPersonModal = "",
    name: searchName = "",
    secondName: searchSecondName = "",
    lastname: searchLastname = "",
    secondLastname: searchSecondLastname = "",
    spiritualName: searchSpiritualName = "",
    birth: searchBirth = "",
  } = resolvedSearchParams;

  const isPersonModalOpen = searchPersonModal === "true";

  async function personSubmit(personForm: FormData) {
    "use server";
    const rawData = Object.fromEntries(personForm);
    const name = rawData.name;
    const secondName = rawData.secondName;
    const lastname = rawData.lastname;
    const secondLastname = rawData.secondLastname;
    const spiritualName = rawData.spiritualName ?? "";
    const birth = rawData.birth;
    return redirect(
      `/?name=${name}&secondName=${secondName}&lastname=${lastname}&secondLastname=${secondLastname}&spiritualName=${spiritualName}&birth=${birth}`
    );
  }

  const personData = {
    name: searchName,
    secondName: searchSecondName,
    lastname: searchLastname,
    secondLastname: searchSecondLastname,
    spiritualName: searchSpiritualName,
    birth: searchBirth,
  };

  const nameData: NumerologyValue[] = [...personData.name.toUpperCase()]
    .filter((letter) => NumerologyData.some((data) => data.letter === letter))
    .map((letter) => NumerologyData.find((data) => data.letter === letter)!);

  const secondNameData: NumerologyValue[] = [...personData.secondName.toUpperCase()]
    .filter((letter) => NumerologyData.some((data) => data.letter === letter))
    .map((letter) => NumerologyData.find((data) => data.letter === letter)!);

  const lastnameData: NumerologyValue[] = [...personData.lastname.toUpperCase()]
    .filter((letter) => NumerologyData.some((data) => data.letter === letter))
    .map((letter) => NumerologyData.find((data) => data.letter === letter)!);

  const secondLastnameData: NumerologyValue[] = [...personData.secondLastname.toUpperCase()]
    .filter((letter) => NumerologyData.some((data) => data.letter === letter))
    .map((letter) => NumerologyData.find((data) => data.letter === letter)!);

  const spiritualNameData: NumerologyValue[] = [...personData.spiritualName.toUpperCase()]
    .filter((letter) => NumerologyData.some((data) => data.letter === letter))
    .map((letter) => NumerologyData.find((data) => data.letter === letter)!);

  const tablesData = [
    nameData,
    secondNameData,
    lastnameData,
    secondLastnameData,
    spiritualNameData,
  ]

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Link
        href="/?personModal=true"
        className="bg-blue-700 rounded-md text-white py-1 px-2 hover:bg-blue-500 focus:bg-blue-500 mt-4 text-center w-auto focus:outline-none focus:ring-1 focus:ring-blue-700 focus:border-blue-700"
      >
        Ingresar datos
      </Link>
      <PersonForm
        isOpen={isPersonModalOpen}
        ModalInputs={PersonInputs}
        title="Ingresar datos de la persona"
        onSubmit={personSubmit}
      />
      {personData.name &&
        tablesData.map((dataArray, index) => (
          <div key={index} className="my-2">
            <Table<NumerologyValue>
              data={dataArray}
            />
          </div>
        ))}
    </div>
  );
}
