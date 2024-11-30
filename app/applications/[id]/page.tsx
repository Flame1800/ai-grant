import CriterionCard from "@/components/Applications/CriterionCard/CriterionCard";
import WinChanceCard from "@/components/Applications/WinChanceCard/WinChanceCard";
import { Button } from "@/components/ui/button";
import React from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { cookies } from "next/headers";
import useSupabaseServer from "@/lib/supabase/server";
import { ApplicationChat } from "@/components/Applications/ApplicationChat/ApplicationChat";

export default async function ApplicationPage({ params }) {
    const cookieStore = await cookies();
    const supabase = useSupabaseServer(cookieStore);

    const { id } = await params;

    const { data: application } = await supabase
        .from("applications")
        .select("*, contest:contests(*)")
        .eq("id", id)
        .single();

    if (application === null) return "No application";

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
                            {application.contest!.title}
                        </span>
                    </div>
                    <Link href={application.contest!.link}>
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
                        .map((criteria, id) => (
                            <CriterionCard key={id} />
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
                <ApplicationChat />
            </div>
        </main>
    );
}
