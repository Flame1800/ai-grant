import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

interface Props {
    className?: string;
}

export default function CriterionCard({ className = "" }: Props) {
    return (
        <Card className={`w-48 h-40 bg-green-200 ${className}`}>
            <CardHeader>
                <CardTitle className="text-base">Значение проекта</CardTitle>
            </CardHeader>
            <CardContent className="flex-row justify-between items-center flex-grow">
                <span className="text-5xl">4,8</span>
                <Badge className="h-5 flex items-center justify-center bg-black/10 text-black">
                    балла
                </Badge>
            </CardContent>
        </Card>
    );
}
