import Link from "next/link"
import Nav from "../../components/nav"

export default function Country(){

    return(
        
        <div>
        <Nav/>
        <div className="h-max w-80 bg-sky-200 m-auto pb-6 mt-20 rounded-3xl font-semibold">
            <h1 className="text-4xl text-center py-8">Country List</h1>
            <ul className=" list-none flex justify-center flex-col items-center gap-4 text-white text-center"> 
                <li className="text-lg py-2 bg-blue-700 rounded-lg w-28 duration-100 hover:ease-linear hover:scale-110 ">
                  <Link className="p-4 py-1" href={"/country/pakistan"}> Pakistan </Link></li>

                <li className="text-lg py-2 bg-blue-700 rounded-lg w-28 duration-100 hover:ease-linear hover:scale-110">
                <Link className="p-4 py-1"  href={"/country/russia"}>Russia</Link></li>

                <li className="text-lg py-2 bg-blue-700 rounded-lg w-28 duration-100 hover:ease-linear hover:scale-110">
                <Link className="p-4 py-1"  href={"/country/america"}>America</Link></li>

                <li className="text-lg py-1 bg-blue-700 rounded-lg w-28 duration-100 hover:ease-linear hover:scale-110">
                <Link className="px-4 py-1 flex justify-center items-center"  href={"/country/turkey"}>Turkey</Link></li>
            </ul>
        </div>
        </div>
    )
}

