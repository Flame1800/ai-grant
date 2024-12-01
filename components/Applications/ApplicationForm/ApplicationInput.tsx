import {Label} from "@/components/ui/label";
import React from "react";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";

interface Props {
    title: string
}

export const ApplicationInput = ({title}: Props) => {
    return (
        <Label className='gap-y-2 flex flex-col pb-4 border-b-2'>
            <div className='gap-2'>
                {title}
            </div>
            <Textarea placeholder='Введите текст...'/>
            <Button variant='outline'>Ответ от ИИ</Button>
        </Label>
    )
}