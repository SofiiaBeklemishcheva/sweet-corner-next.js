import DesertKindRow from "@/components/desert-kind-row";

export default function Layout ( {children} : {children: React.ReactNode}) {
    return(
        <div>
            <DesertKindRow/>
            {children}
        </div>
    );
};