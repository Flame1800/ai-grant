'use client';

import { ApplicationCard } from "@/components/Applications/ApplicationCard/ApplicationCard";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { NominationsSelect } from "@/components/Screens/NominationsSelect";
import {ContestBudget} from "@/components/Сontests/ContestBudget/ContestBudget";
import {useState} from "react";
import {Application, Contest} from "@/types";
import Link from "next/link";
import {routes} from "@/constants/routes";
import {Button} from "@/components/ui/button";
import {ArrowLeftIcon} from "lucide-react";
import {CriteriaFilter} from "@/components/Contests/ContestFilter/CriteriaFilter";

interface Props {
    applications: Application[] | null;
    contest: Contest | null;
}

export function ContestScreen({ applications, contest}: Props) {
    const [budget, setBudget] = useState<string>(contest?.budget ? String(contest.budget) : '0');

    return (
        <div className="gap-8 w-full">
            <div className='flex-row gap-3'>
                <Link href={routes.contests}>
                    <Button size='sm'>
                        <ArrowLeftIcon/>
                    </Button>
                </Link>
                <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                    Конкурс
                </h2>
            </div>
            <div className="flex-row justify-between flex-wrap gap-y-4">
                <CriteriaFilter/>
                <ContestBudget budget={budget} setBudget={setBudget}/>
            </div>

            <div className="text-3xl flex-row w-fit items-center gap-3">
                Заявки
                {applications && <Badge>{applications.length}</Badge>}
            </div>
            <div className="flex-row flex-wrap gap-y-4 justify-between">
                <Input
                    className="max-w-[290px]"
                    type="text"
                    placeholder="Поиск"
                />
                <NominationsSelect/>
            </div>
            <div className="gap-8 sm:grid sm:grid-cols-2">
                {applications && applications.map((application) => (
                    <ApplicationCard
                        key={application.id}
                        application={application}
                    />
                ))}
            </div>
        </div>
    );
}
