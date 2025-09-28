import Image from "next/image";
import DesertKindButton from "@/ui/desert-kind-button";

export default function DesertKindRow() {

    const desertKindsButtons = [
        {
            img : "/cakeTypeRow/cake.png",
            desertKind : "cake",
            setDesertKind : "cake",
            link : "/own-desert/cake"
        },
            {
            img : "/cakeTypeRow/cupcake.png",
            desertKind : "cupcake",
            setDesertKind : "cupcake",
            link : "/own-desert/cupcake"
        },
            {
            img : "/cakeTypeRow/macaroon.png",
            desertKind : "macaroon",
            setDesertKind : "macaroon",
            link : "/own-desert/macaroon"
        }
    ];


   
  return (
    <div className={"grid grid-cols-3 gap-8 m-auto max-w-screen-xl mt-4 mb-4"}>
        {desertKindsButtons.map((button, index) => {
            return(<DesertKindButton
                        key = {index}
                        img = {button.img}
                        desertKind = {button.desertKind}
                        setDesertKind = {button.setDesertKind}
                        link = {button.link}
                                    />);
                    
        } )}
      
    </div>
  );
}
