import { Card } from "@/components/ui/card";
import { Contest } from "@/components/Сontests/model";

interface Props {
    contest: Contest;
}

export function ContestCard({ contest }: Props) {
    const { title, subtitle } = contest;

    return (
        <Card className="p-6 bg-gray-100 border-none rounded-3xl">
            <p className="text-2xl">{title}</p>
            <p className="text-base text-gray-500">{subtitle}</p>
        </Card>
    );
}
