'use client';

import Link from "next/link";
import {Button} from "@/components/ui/button";
import {ArrowUpRight} from "lucide-react";
import CriterionCard from "@/components/Applications/CriterionCard/CriterionCard";
import WinChanceCard from "@/components/Applications/WinChanceCard/WinChanceCard";
import {ApplicationChat} from "@/components/Applications/ApplicationChat/ApplicationChat";
import React, {useEffect, useState} from "react";
import useSupabaseBrowser from "@/lib/supabase/client";
import {Application} from "@/types";
import {formatNumber} from "@/lib/formatNumber";
import {Card} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";

interface Props {
    id: number
}

export const ApplicationReview = ({ id }: Props) => {
    const [application, setApplication] = useState<Application | null>(null);
    const supabase = useSupabaseBrowser();

    useEffect(() => {
        const fetchData = async () => {
            const { data: application, error } = await supabase
                .from("applications")
                .select("*, contest:contests(*)")
                .eq("id", id)
                .single();
            if (error) {
                console.error('ApplicationReview fetch error', error);
            } else {
                setApplication(application);
            }
        };

        fetchData();
    }, [supabase]);

    if (application === null) return "Нет заявки";

    const hasBeenAnalyzed = application.gpt_score || application.llama_score;

    if (!hasBeenAnalyzed) return "Эта заявка загружается";
    let criteria, score;
    if (application.gpt_analysis) {
        criteria = JSON.parse(application.gpt_analysis).sort((a, b) => a.weight - b.weight);
        score = application.gpt_score;
    } else {
        criteria = JSON.parse(application.llama_analysis);
        score = application.llama_score;
    }

    return (
        <main className="overflow-y-scroll h-[80vh] sm:h-auto flex-wrap">
            <Badge color='bg-green-600' className='w-fit'>AI анализ</Badge>
            <div className="flex flex-row justify-between items-center mb-10 flex-wrap">
                <div>
                    <h1 className="text-[48px]">{application.title}</h1>
                </div>
                <div className="flex flex-row flex-wrap gap-y-3">
                    <div className="text-sm sm:w-[25rem]">
                        <span className="font-semibold">Конкурс</span>
                        <span
                            className="text-gray-500 w-[300px] sm:w-fit"
                            style={{ lineHeight: "1rem" }}
                        >
                            {application.contest!.title}
                        </span>
                    </div>
                    <Link target="_blank" href={application.contest!.link!}>
                        <Button className="h-8 w-8">
                            <ArrowUpRight />
                        </Button>
                    </Link>
                </div>
            </div>
            <div className="flex flex-row gap-3 flex-wrap">
                <div className="sm:grid sm:grid-cols-2 gap-3">
                    {criteria.map((criterion, id) => (
                        <CriterionCard key={id} criteria={criterion} />
                    ))}
                </div>
                <div className="flex gap-3 sm:w-fit w-full">
                    {score && <WinChanceCard
                        style={{ gridArea: "winChance" }}
                        winChance={score * 10 > 100 ? score : score * 10}
                    />}
                    <div className="bg-red-100 flex-grow rounded-[28px] flex justify-center items-center">
                        <div className='flex-row items-end gap-3'>
                            <h3 className='text-4xl'>{formatNumber(application.app_budget, {decimals: 0})}</h3>
                            <p className='text-xl'>₽</p>
                        </div>

                        Бюджет
                    </div>
                </div>
                <ApplicationChat/>
            </div>
        </main>
    );
}