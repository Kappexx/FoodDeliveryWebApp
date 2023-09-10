import Link from "next/link";


const Footer = () => {
  return ( 
    <div className='h-12 md:h-24 p-4 lg:p-20 xl:p-40 text-red-500 flex justify-between items-center'>
      <Link href={"/"} className="font-bold text-xl">GIGGSSIMO</Link>
      <p>© ALL RIGHTS RESERVED.</p>
    </div>
   );
}
 
export default Footer;