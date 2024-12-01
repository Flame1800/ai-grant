import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import React from "react";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import {CompareTable} from "@/components/CompareApplications/CompareTable";

export const CompareApplications = (props: any): any => {
    return (
        <Dialog>
            <DialogTrigger>
                <TooltipProvider>
                    <Tooltip delayDuration={50}>
                        <TooltipTrigger asChild>
                            <div className='rounded-full'>
                                <p className="text-sm">Сравнить заявки</p>
                            </div>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Перейти к сравнению</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[80%] max-h-[80vh] overflow-scroll">
                <DialogHeader>
                    <DialogTitle>Сравнение заявок</DialogTitle>
                    <DialogDescription>
                        Сравните разные критерии
                    </DialogDescription>
                </DialogHeader>
                <CompareTable />
            </DialogContent>
        </Dialog>
    )
}