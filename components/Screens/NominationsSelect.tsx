import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

interface NominationCardProps {
    title: string;
    contributorsCount: number;
}

function NominationCard({ title, contributorsCount }: NominationCardProps) {
    return (
        <div className="gap-4">
            <p>{title}</p>
            <p>{contributorsCount} участников</p>
        </div>
    );
}

export function NominationsSelect() {
    return (
        <Select>
            <SelectTrigger className="w-[280px]">
                <SelectValue placeholder="Выберите номинацию" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Номинации</SelectLabel>

                    <SelectItem value="apple">
                        <NominationCard
                            title="Номинация 1"
                            contributorsCount={10}
                        />
                    </SelectItem>
                    <SelectItem value="banana">
                        <NominationCard
                            title="Номинация 2"
                            contributorsCount={50}
                        />
                    </SelectItem>
                    <SelectItem value="blueberry">
                        <NominationCard
                            title="Номинация 3"
                            contributorsCount={22}
                        />
                    </SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}
