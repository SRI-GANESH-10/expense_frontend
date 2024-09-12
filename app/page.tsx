import { CustomInput } from "@/CustomComponents/CustomInput";
import Image from "next/image";
import logo from '../icons/logo.svg'

export default function Home() {
  return (
    <div className="w-[30%] h-full mt-10 ml-10 bg-slate-300 border border-black flex flex-col p-4">
      <Image src={logo} width={50} height={50} alt="No Image Found"></Image>
      <p className="text-zodiac font-mukta-regular" style={{fontSize:'50px'}} >Welcome Back!</p>
      <p className="font-mukta-regular" style={{fontSize:'15px'}}>Track every penny, watch your savings grow.</p>
      <CustomInput placeholder="Enter Username/Email" className="border-2 border-zodiac rounded-md mb-10 mt-6"></CustomInput>
      <CustomInput placeholder="Enter Password" className="border-2 border-zodiac rounded-md"></CustomInput>
    </div>
  );
}
