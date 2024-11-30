"use client";

import { routes } from "@/constants/routes";
import { MetricProps } from "@/components/EntityCard/Metric";
import { EntityCard } from "@/components/EntityCard/EntityCard";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import {Contest} from "@/types";
import {formatNumber} from "@/lib/formatNumber";

interface Props {
    contest: Contest;
}

export function ContestCard({ contest }: Props) {
    const { title, description, budget } = contest;

    return (
        <EntityCard
            title={title}
            subtitle={description}
            metrics={[]}
            button={
                <Link href={`${routes.contests}/${contest.id}`}>
                    <Button className="rounded-full gap-4">
                       Открыть <ArrowUpRight />
                    </Button>
                </Link>
            }
        />
    );
}
