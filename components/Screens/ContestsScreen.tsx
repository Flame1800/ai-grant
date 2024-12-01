import { cookies } from "next/headers";
import React from "react";
import useSupabaseServer from "@/lib/supabase/server";
import { ContestCard } from "@/components/Contests/ContestCard/ContestCard";
import DashBoards from "./DashBoards";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

DashBoards;
export async function ContestsScreen() {
    const cookieStore = await cookies();
    const supabase = useSupabaseServer(cookieStore);

    const { data, error } = await supabase.from("contests").select();

    return (
        <div>
            <DashBoards />
            <div className="gap-6 mt-[90px]">
                <div className="flex-row p-4">
                    <h2 className="mt-10 scroll-m-20 text-5xl font-medium tracking-tight transition-colors first:mt-0">
                        Все конкурсы
                    </h2>
                </div>
                <div className="gap-8 sm:grid sm:grid-cols-2">
                    {data &&
                        data.map((contest) => (
                            <ContestCard key={contest.id} contest={contest} />
                        ))}
                </div>
            </div>
        </div>
    );
}
