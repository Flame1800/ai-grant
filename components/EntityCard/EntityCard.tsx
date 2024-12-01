import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Metric, MetricProps } from "@/components/EntityCard/Metric";
import { ReactNode } from "react";
import {CompareButton} from "@/components/CompareApplications/CompareButton";

interface Props {
    title: string | null;
    subtitle: string | null;
    metrics: MetricProps[];
    button: ReactNode;
    isCompare?: boolean
    id: number
}

export function EntityCard({ title, subtitle, metrics, button, isCompare = false, id }: Props) {
    return (
        <Card className="p-6 bg-gray-100 border-none rounded-3xl">
            <p className="text-xl text-ellipsis overflow-hidden line-clamp-2">{title}</p>

            <div className="mt-[70px] flex-row justify-between">
                <div className="flex-row gap-x-5">
                    {metrics.map((metric) => (
                        <Metric
                            key={metric.text}
                            text={metric.text}
                            value={metric.value}
                        />
                    ))}
                </div>

                <div className="gap-1 flex-row">
                    {isCompare && <CompareButton id={id} />}
                    {button}
                </div>
            </div>
        </Card>
    );
}
