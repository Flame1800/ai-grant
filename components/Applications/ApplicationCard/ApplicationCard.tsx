"use client";

import { MetricProps } from "@/components/EntityCard/Metric";
import { EntityCard } from "@/components/EntityCard/EntityCard";
import { ApplicationDrawer } from "@/components/Applications/ApplicationReview/ApplicationDrawer";
import {Application} from "@/types";
import {formatNumber} from "@/lib/formatNumber";

interface Props {
    application: Application;
}

export function ApplicationCard({ application }: Props) {
    const { title, description, gpt_score, app_budget } = application;

    const metrics: MetricProps[] = [
        {
            text: "баллов",
            value: gpt_score,
        },
        {
            text: "бюджет",
            value: app_budget ? formatNumber(app_budget) : '',
        },
    ];

    return (
        <EntityCard
            id={application.id}
            isCompare
            title={title}
            subtitle={description}
            metrics={metrics}
            button={<ApplicationDrawer id={application.id} />}
        />
    );
}
