import { ApplicationCard } from "@/components/Applications/ApplicationCard/ApplicationCard";
import { mockApplications } from "@/components/Applications/mockApplications";
import { CriteriaFilter } from "@/components/Contests/ContestFilter/CriteriaFilter";
import { Card } from "@/components/ui/card";
import { Pencil } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { NominationsSelect } from "@/components/Screens/NominationsSelect";

export function ContestScreen() {
    return (
        <div className="gap-8 screen-w">
            <h2 className="mt-10 scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                Конкурс
            </h2>
            <div className="flex-row justify-between">
                <CriteriaFilter />
                <Card className="max-w-[200px] w-full p-5 bg-green-300 justify-between border-none rounded-3xl">
                    <div className="flex-row justify-between">
                        <p className="text-base">
                            Бюджет <br /> конкурса
                        </p>
                        <Pencil />
                    </div>
                    <h2 className="text-2xl">200.000₽</h2>
                </Card>
            </div>

            <div className="text-3xl flex-row w-fit items-center gap-3">
                Заявки
                <Badge>{mockApplications.length}</Badge>
            </div>
            <div className="flex-row justify-between">
                <Input
                    className="max-w-[290px]"
                    type="text"
                    placeholder="Поиск"
                />
                <NominationsSelect />
            </div>
            <div className="gap-8 grid grid-cols-2">
                {mockApplications.map((application) => (
                    <ApplicationCard
                        key={application.id}
                        application={application}
                    />
                ))}
            </div>
        </div>
    );
}
