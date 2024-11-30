import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Criteria } from "@/types";
import React from "react";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";

interface Props {
    className?: string;
    criteria: Criteria;
}

export default function CriterionCard({ className = "", criteria }: Props) {
    return (
        <TooltipProvider delayDuration={50}>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Card
                        className={`w-full mx-auto sm:w-48 min-h-40 bg-green-200 flex justify-between cursor-pointer ${className}`}
                    >
                        <CardHeader className='gap-1'>
                            <CardTitle className="text-base">
                                {criteria.criterion_name ?? 'Нет названия'}
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex-row justify-between items-center">
                            <div>
                                <span className="text-5xl">{criteria.weight}</span>
                                <Badge className="h-5 flex items-center justify-center bg-black/10 text-black">
                                    баллов
                                </Badge>
                            </div>
                            <div>
                                <span className="text-2xl">{criteria.weight}</span>
                                <span className="text-sm">вес</span>
                            </div>
                        </CardContent>
                        <div className='sm:hidden px-4 pb-4 text-sm'>
                            {criteria.justification}
                        </div>
                    </Card>
                </TooltipTrigger>
                <TooltipContent>
                    <p className='max-w-[300px]'>{criteria.justification}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>

    );
}
