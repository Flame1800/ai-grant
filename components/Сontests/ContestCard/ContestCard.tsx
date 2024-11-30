"use client";

import { Contest } from "@/components/Сontests/model";
import { routes } from "@/constants/routes";
import { MetricProps } from "@/components/EntityCard/Metric";
import { EntityCard } from "@/components/EntityCard/EntityCard";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface Props {
    contest: Contest;
}

export function ContestCard({ contest }: Props) {
    const { title, subtitle, applicationsCount, nominationsCount } = contest;

    const metrics: MetricProps[] = [
        {
            text: "Баллов",
            value: applicationsCount,
        },
        {
            text: "Бюджет",
            value: nominationsCount,
        },
    ];

    return (
        <EntityCard
            title={title}
            subtitle={subtitle}
            metrics={metrics}
            button={
                <Link href={`${routes.contests}/${contest.id}`}>
                    <Button className="rounded-full">
                        <ArrowUpRight />
                    </Button>
                </Link>
            }
        />
    );
}
