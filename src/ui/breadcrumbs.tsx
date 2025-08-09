'use client'
import {usePathname} from "next/navigation";


export default function BreadCrumbs(){
    const path = usePathname();
    return <p>{path}</p>
}