import Image from "next/image";
import HeaderButton from "@/ui/header-button";

export default function Header() {

    const headerButtons = [
        {
            href: "jakiśtam",
            buttonTitle: "Home"
        },
        {
            href: "/about-us",
            buttonTitle: "O nas"
        },
        {
            href: "jakiśtam",
            buttonTitle: "Blog"
        },
        {
            href: "/own-desert",
            buttonTitle: "Własny deser"
        },
    ]
  return (
    <div className="bg-white shadow">
        <div className=" flex max-w-screen-xl mx-auto h-40 justify-between">
            <Image src={"/logo/logo.png"} alt="Sweet Corner" className="" width={180} height={150}/>
            <div className="grid grid-cols-4 gap-4 mt-auto mb-auto">
                {headerButtons.map((btn , index) => {
                    return(
                        <HeaderButton 
                            buttonTitle={btn.buttonTitle}
                            href={btn.href}
                            key={index}
                        />
                    );
                })}
                    
                
            </div>
        </div>
    </div>
  );
}
