import Image from "next/image";
import TextRow from "@/components/text-row-with-img";
import BreadCrumbs from "@/ui/breadcrumbs";

export default function AboutUs() {
  return (
    <div >
      {/* <BreadCrumbs /> */}
      <TextRow altText= {"Kitchen"} imageOneSrc = {"/about-us/Kitchen.jpg"} reversed={false} rowText = {"<p>Witajcie w Sweet Corner - miejscu, gdzie słodkie marzenia stają się rzeczywistością!</p><p>Jesteśmy dumną polską cukiernią specjalizującą się w ręcznie wykonanych słodkościach, które kuszą nie tylko wyglądem, ale przede wszystkim niezrównanym smakiem. Nasza pasja do cukiernictwa sprawia, że każdego dnia staramy się tworzyć wyjątkowe i niezapomniane doznania dla podniebienia naszych klientów.</p>"}/>
      <TextRow altText= {"Kitchen2"} imageOneSrc = {"/about-us/Kitchen 2.jpg"} reversed = {true} rowText = {"<p>W Sweet Corner kładziemy ogromny nacisk na jakość i świeżość naszych produktów. Nasze wyroby wyróżniają się nie tylko starannym wykonaniem, ale także używaniem tylko najwyższej jakości składników. Nasza kuchnia to miejsce, gdzie każdy smak jest starannie komponowany, a każdy detal jest dopieszczony, aby zapewnić naszym klientom niezapomniane wrażenia smakowe.</p>"}/>
    Jestem treścią strony 
    </div>
  );
}
