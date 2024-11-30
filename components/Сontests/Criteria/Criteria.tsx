import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { type Criteria } from "@/components/Сontests/model";
import { KettlebelIcon } from "@/assets/icons/KettlebelIcon";

interface Props {
    criteria: Criteria;
}

export function Criteria({ criteria }: Props) {
    const { title, weight } = criteria;

    return (
        <Badge className="flex-row gap-1.5 h-[36px]" variant="outline">
            {title}
            <div className="gap-1 items-center flex-row">
                <KettlebelIcon />
                {weight}
            </div>
        </Badge>
    );
}
