import Link from "next/link";
import Menu from "./Menu";
import CartIcon from "./CartIcon";
import Image from "next/image";

const Navbar = () => {

  const user = false
  return ( 
    <div className="h-12 text-red-500 p-4 flex justify-between items-center border-b-2 border-b-red-500 uppercase md:h-20
    lg:px-20 xl:px-40 ">

      {/* Left Links */}
      <div className='hidden md:flex gap-4 flex-1'>
      <Link href={"/"}>
        Homepage
      </Link>
      <Link href={"/menu"}>
        Menu
      </Link>
      <Link href={"/contact"}>
        Contact
      </Link>
      </div>
      {/* LOGO */}
      <div className="text-xl md:font-bold flex-1 md:text-center ">
        <Link href={"/"}>
          giggssimo
        </Link>
      </div>

      {/* MOBILE MENU */}
      <div className="cursor-pointer md:hidden">
         <Menu />
      </div>

      {/* Right Links */}
      <div className='hidden md:flex gap-4 items-center justify-end flex-1 '>
        <div className='md:absolute top-3 lg:static flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md  min-w-fit'>
          <Image src="/phone.png" alt="" width={12} height={12}/>
          <span>+44 77331213</span>
        </div>
      {!user ? (<Link href={"/login"}>
        Login
      </Link>): (<Link href={"/orders"}>
        Orders
      </Link>)}
      <CartIcon />
      </div>
     
    </div> 
  );
}
 
export default Navbar;