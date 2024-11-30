"use client";

import { MetricProps } from "@/components/EntityCard/Metric";
import { EntityCard } from "@/components/EntityCard/EntityCard";
import { Application } from "@/components/Applications/model";
import { ApplicationInfo } from "@/components/Applications/Application/ApplicationInfo";

interface Props {
    application: Application;
}

export function ApplicationCard({ application }: Props) {
    const { title, subtitle, mark, budget } = application;

    const metrics: MetricProps[] = [
        {
            text: "Баллов",
            value: mark,
        },
        {
            text: "Бюджет",
            value: budget,
        },
    ];

    return (
        <EntityCard
            title={title}
            subtitle={subtitle}
            metrics={metrics}
            button={<ApplicationInfo />}
        />
    );
}
