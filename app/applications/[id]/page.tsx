import CriterionCard from "@/components/Applications/CriterionCard/CriterionCard";
import WinChanceCard from "@/components/Applications/WinChanceCard/WinChanceCard";
import { Button } from "@/components/ui/button";
import React from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default async function ApplicationPage() {
    return (
        <main>
            <div className="flex flex-row justify-between mb-10">
                <div>
                    <h1 className="text-[48px]">Анализ заявки</h1>
                </div>
                <div className="flex flex-row">
                    <div className="text-sm w-[25rem]">
                        <span className="font-semibold">Конкурс</span>
                        <span
                            className="text-gray-500"
                            style={{ lineHeight: "1rem" }}
                        >
                            социально значимых проектов среди социально
                            ориентированных некоммерческих организаций города
                            Когалыма
                        </span>
                    </div>
                    <Link href="/">
                        <Button className="h-8 w-8">
                            <ArrowUpRight />
                        </Button>
                    </Link>
                </div>
            </div>
            <div className="flex flex-row gap-3">
                <div className="grid grid-cols-2 gap-3">
                    {Array(6)
                        .fill(0)
                        .map((criteria) => (
                            <CriterionCard key={criteria} />
                        ))}
                </div>
                <div className="flex gap-3">
                    <WinChanceCard
                        style={{ gridArea: "winChance" }}
                        winChance={50}
                    />
                    <div className="bg-red-100 flex-grow rounded-[28px] flex justify-center items-center">
                        Hello world
                    </div>
                </div>
                <div className="rounded-[28px] bg-sky-400 flex-grow" />
            </div>
        </main>
    );
}
