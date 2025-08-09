import Image from "next/image";
import Link from "next/link";

export default function HeaderButton({ buttonTitle, href}: {buttonTitle: string; href:string}) {
  return (
    <Link target="_blank" href={href} className="block text-center bg-pink-300 w-50 h-fit rounded-2xl font-semi-bold text-2xl p-4">
        {buttonTitle}
    </Link>
  );
}
