import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Criteria } from "@/types";
import React from "react";

interface Props {
    className?: string;
    criteria: Criteria;
}

export default function CriterionCard({ className = "", criteria }: Props) {
    return (
        <Card
            className={`w-48 min-h-40 bg-green-200 flex justify-between ${className}`}
        >
            <CardHeader>
                <CardTitle className="text-base">
                    {criteria.criterion_name}
                </CardTitle>
            </CardHeader>
            <CardContent className="flex-row justify-between items-center">
                <span className="text-5xl">{criteria.score}</span>
                <Badge className="h-5 flex items-center justify-center bg-black/10 text-black">
                    баллов
                </Badge>
            </CardContent>
        </Card>
    );
}
