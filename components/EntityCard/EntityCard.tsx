import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Metric, MetricProps } from "@/components/EntityCard/Metric";
import { ReactNode } from "react";

interface Props {
    title: string | null;
    subtitle: string | null;
    metrics: MetricProps[];
    button: ReactNode;
    isCompare?: boolean
}

export function EntityCard({ title, subtitle, metrics, button, isCompare = false }: Props) {
    return (
        <Card className="max-w-[440px] p-6 bg-gray-100 border-none rounded-3xl">
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
                    {isCompare && <Badge className="h-[40px] flex justify-center">
                        <div className="flex flex-row items-center space-x-2">
                            <Checkbox
                                id={String(title + subtitle)}
                                className="bg-slate-100"
                            />
                            <label
                                htmlFor="terms"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Сравнить
                            </label>
                        </div>
                    </Badge>}
                    {button}
                </div>
            </div>
        </Card>
    );
}
