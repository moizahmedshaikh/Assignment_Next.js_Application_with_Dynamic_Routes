import { CountryDetails } from "@/types/type";
import Link from "next/link";

function CountryName({ params }: { params: { country_name: string } }) {

  const CountryDetails : CountryDetails[] = [
   {
    name: "Pakistan",
    population: 88092400374,
    capital: "Islamabad",
  },
   {
    name: "Russia",
    population: 53871362115,
    capital: "Moscow",
  },
   {
    name: "America",
    population: 124494116876,
    capital: "Washington, D.C",
  },
   {
    name: "Turkey",
    population: 31736367294,
    capital: "Ankara",
  }
]

    const country = CountryDetails.find(
      (c) => c.name.toLowerCase() === params.country_name.toLowerCase()
    );

  if (!country) {
    return (
      <div className="h-96 flex items-center justify-center ">
        <h1 className="text-white items-center text-7xl font-bold bg-black px-6 py-4 rounded-xl">
          {params.country_name} country not found
        </h1>
      </div>
    );
  }

  return (
    <div className="w-max h-max bg-gray-300 shadow-2xl shadow-slate-800 py-8 px-14 m-auto mt-20 rounded-3xl font-bold">
      <div className="text-3xl py-2 ">Name : {country.name}</div>
      <div className="text-3xl py-2">Capital : {country.capital}</div>
      <div className="text-3xl py-2">Poppulation : {country.population}</div>

      <button className="bg-red-500 ml-36 mt-10 px-4 py-1 rounded-full duration-100 text-white hover:ease-linear hover:scale-110 ">
        <Link href={"/country"}> Back</Link>{" "}
      </button>
    </div>
  );
}

export default CountryName;
