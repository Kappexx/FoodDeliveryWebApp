import Image from "next/image";
import { singleproduct } from "@/data";
import Price from "@/components/Price";

const singleProduct = () => {
  return ( 
    <div className="p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-red-500 md:flex-row md:gap-8 md: items-center">
      {/* Image Conteiner */}
      {singleproduct.img && (
         <div className="relative w-full h-1/2 md:h-[70%]">
        <Image src={singleproduct.img} alt="" className=" object-contain"  fill/>
      </div>
      )}
     
      {/* Text Conteiner */}
      <div className="h-1/2 flex gap-4 flex-col  md:h-[70%] md:justify-center md:gap-6 xl:gap-8">
        <h1 className=" text-3xl font-bold uppercase xl:text-5xl">{singleproduct.title}</h1>
        <p className="">{singleproduct.desc}</p>
        <Price price = {singleproduct.price}  id ={singleproduct.id} options = {singleproduct.options}/>
      </div>
    </div>
   );
}
 
export default singleProduct;