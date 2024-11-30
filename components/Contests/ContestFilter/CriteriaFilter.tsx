import { mockCriteria } from "@/components/Contests/mockContests";
import { Criteria } from "@/components/Contests/Criteria/Criteria";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

function SetupCriteriaDialog() {
    return (
        <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
                <DialogTitle>Настройка критериев</DialogTitle>
                <DialogDescription>
                    Вы можете менять критерии и приоритизировать их меняя вес
                </DialogDescription>
            </DialogHeader>
            <div className="gap-4 py-4">
                <Button variant="link">Критерий 1</Button>
                <Button variant="link">Критерий 2</Button>
                <Button variant="link">Критерий 3</Button>
            </div>
            <DialogFooter>
                <Button type="submit">Сохранить изменения</Button>
            </DialogFooter>
        </DialogContent>
    );
}

export function CriteriaFilter() {
    return (
        <div>
            <div className="gap-8">
                <p className="text-2xl">Критерии</p>
                <div className="gap-1.5 flex-row flex-wrap">
                    {mockCriteria.map((criteria) => (
                        <Criteria key={criteria.id} criteria={criteria} />
                    ))}
                </div>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button className="w-fit">Изменить критерий</Button>
                    </DialogTrigger>
                    <SetupCriteriaDialog />
                </Dialog>
            </div>
        </div>
    );
}
