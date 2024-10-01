import Nav from "./components/nav";
import React from "react";

export default function Home() {
  return (
    <div>
      <Nav/>
    <div className="flex flex-col w-max mt-16">

      <h1 className="bg-blue-500 text-3xl py-2 px-10 rounded-3xl mb-2">Hellow</h1>
      <h1 className="bg-blue-500 text-3xl py-2 px-10 rounded-3xl mb-2">Welcome to my Next.js</h1>
      <h1 className="bg-blue-500 text-3xl py-2 px-10 rounded-3xl mb-2">Application with Dynamic Route</h1>
    </div>
    </div>
  );
}

