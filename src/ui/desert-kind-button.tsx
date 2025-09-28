import Image from "next/image";
import Link from "next/link";

export default function DesertKindButton({ img, desertKind, setDesertKind, link}: {img: string; desertKind:string; setDesertKind:string; link:string}) {

  return (
    <Link href={link} className="block text-center border border-darkMint rounded-2xl p-1 w-[380px] h-[380px]">
        <div className="border border-grayRose rounded-2xl p-1 w-[310px] h-[310px] m-auto">
            <Image className="w-[200px] h-[200px] m-auto" src={img} alt={desertKind} width={395} height={380}/>
        </div>
        
    </Link>
  );
}
