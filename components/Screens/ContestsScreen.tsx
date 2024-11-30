import { mockContests } from "@/components/Сontests/mockContests";
import { ContestCard } from "@/components/Сontests/ContestCard/ContestCard";
import {useState} from "react";
import {cookies} from "next/headers";

export async function ContestsScreen() {
    const cookieStore = cookies();
    return (
        <div className="gap-6 screen-w">
            <h2 className="mt-10 scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                Конкурсы
            </h2>
            <div className="gap-8 grid grid-cols-2">
                {mockContests.map((contest) => (
                    <ContestCard key={contest.id} contest={contest} />
                ))}
            </div>
        </div>
    );
}
