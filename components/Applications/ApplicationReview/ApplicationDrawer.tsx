"use client";

import * as React from "react";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter, DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import {ApplicationReview} from "@/components/Applications/ApplicationReview/ApplicationReview";

export function ApplicationDrawer({ id }: { id: number }) {
    const [goal, setGoal] = React.useState(1500);

    function onClick(adjustment: number) {
        setGoal(Math.max(200, Math.min(400, goal + adjustment)));
    }

    return (
        <Drawer>
            <DrawerTrigger asChild>
                <Button className="rounded-full">
                    <ArrowUpRight />
                </Button>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerTitle></DrawerTitle>
                <div className="mx-auto max-w-[1110px] px-5 sm:pt-10 pt-2">
                    <ApplicationReview id={id} />
                    <DrawerFooter className='hidden sm:flex'>
                        <DrawerClose asChild>
                            <Button className='w-fit' variant="outline">Закрыть</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    );
}
