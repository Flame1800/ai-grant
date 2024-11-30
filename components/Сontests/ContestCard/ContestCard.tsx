import {Card} from "@/components/ui/card";
import {Contest} from "@/components/Сontests/model";

interface Props {
    contest: Contest
}

export const ContestCard = ({ contest }: Props) => {
    const {title, subtitle} = contest
    return <Card>
        <p>{title}</p>
        <p>{subtitle}</p>
    </Card>
}