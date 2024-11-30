'use client';

import {Card} from "@/components/ui/card";
import {ArrowRight, Pencil} from "lucide-react";
import {useState} from "react";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {formatNumber} from "@/lib/formatNumber";

interface Props {
    budget: string;
    setBudget: (value: string) => void;
}

export function ContestBudget({ budget, setBudget }: Props) {
    const [openForm, setOpenForm] = useState<boolean>(false);


    return (
        <>
            <Card className="sm:max-w-[200px] gap-y-4 w-full p-5 bg-green-300 justify-between border-none rounded-3xl max-w-full">
                <div className="flex-row justify-between">
                    <p className="text-base">
                        Бюджет <br /> конкурса
                    </p>
                    <Button variant='ghost' className='cursor-pointer' onClick={() => setOpenForm(!openForm)}>
                        <Pencil />
                    </Button>
                </div>
                {openForm ? <form className='flex'>
                    <Input onInput={(e) => setBudget(e.target.value)} value={budget} />
                    <Button onClick={() => {
                        setOpenForm(false)
                    }}><ArrowRight /></Button>
                </form> : <h2 className="text-2xl flex flex-row items-end gap-2">{formatNumber(Number(budget))}
                    <p className='text-base'>₽</p>
                </h2>}
            </Card>

        </>
    )
}
