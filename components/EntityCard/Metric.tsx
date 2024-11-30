export interface MetricProps {
    text: string;
    value: string | number;
}

export function Metric({ text, value }: MetricProps) {
    return (
        <div>
            <p className="text-sm">{text}</p>
            <p className="text-xl">{value}</p>
        </div>
    );
}
