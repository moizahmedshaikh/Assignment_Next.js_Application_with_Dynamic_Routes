import Link from "next/link"

function Nav(){
    return(
        <div>
            <header className="bg-black text-white w-full " >
            <nav className="flex list-none justify-center gap-16 h-20 items-center text-2xl">
                <li className=" ease duration-300 hover:text-yellow-400  cursor-pointer">
                  <Link href={"/"}>  Home</Link></li>
                <li className=" ease duration-300 hover:text-yellow-400  cursor-pointer">
                <Link href={"/about"}>  About</Link></li>
                <li className=" ease duration-300 hover:text-yellow-400  cursor-pointer">
                    <Link href={"/country"}>  Country List</Link></li>
            </nav>
        </header>
        </div>
    )
}
export default Nav