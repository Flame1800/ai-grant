'use client';

import {Checkbox} from "@/components/ui/checkbox";
import {Badge} from "@/components/ui/badge";
import {addCompareAppId, hasComponentId, hasMoreThanTwoCompareApps, removeCompareAppId} from "@/lib/compareStorage";
import {useEffect, useState} from "react";
import {CompareApplications} from "@/components/CompareApplications/CompareApplications";

export const CompareButton = ({ id }: {id: number}) => {
    const [open, setOpen] = useState(false);
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        setChecked(hasComponentId(String(id)))
    }, [])

    const toggleCheckbox = () => {
        setChecked(!checked)

        if (checked) {
            removeCompareAppId(String(id))
        } else {
            addCompareAppId(String(id))
        }
    }

    return (
        <div className='flex-row gap-2 items-center'>
            <Badge className="h-[40px] flex justify-center cursor-pointer" onClick={toggleCheckbox}>
                <div className="flex flex-row items-center space-x-2">
                    <Checkbox
                        id={String()}
                        checked={checked}
                        className="bg-slate-100"
                    />
                    <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        Сравнить
                    </label>
                </div>
            </Badge>
        </div>

    )
}