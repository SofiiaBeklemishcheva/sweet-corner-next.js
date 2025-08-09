import Image from "next/image";
import HeaderButton from "@/ui/header-button";

export default function TextRow({altText, imageOneSrc, rowText, reversed }: {altText: string; imageOneSrc:string; rowText:string; reversed:boolean}) {

   
  return (
    <div className={"grid grid-cols-4 gap-8 m-auto max-w-screen-xl mt-4 mb-4"}>
       <div className={`${reversed ? "order-last" : "order-first"} col-span-1 h-[290px]`}>
          <Image src={imageOneSrc} alt={altText} className="" width={475} height={290}/>
       </div>
       <div dangerouslySetInnerHTML={{__html: rowText}} className="col-span-3 flex flex-col justify-evenly">
        
       </div>
    </div>
  );
}
