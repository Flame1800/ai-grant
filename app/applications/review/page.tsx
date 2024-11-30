import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Card} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import React from "react";

interface Props {
    label: string
}


export default async function ApplicationPage() {

    return (
        <Card className='bg-slate-100 p-10 max-w-[400px] h-[80vh] overflow-scroll'>
            <Badge color='bg-green-600' className='w-fit'>AI анализ</Badge>
            <h1 className="text-[28px] mb-5">Помощник в составлени заявки</h1>

            <form className='max-w-[400px] gap-y-4 flex flex-col'>
                <Label className='gap-y-2 flex flex-col'>
                    Название проекта, на реализацию которого запрашивается грант
                    <Input placeholder='Название'/>
                </Label>

                <Label className='gap-y-2 flex flex-col'>
                    Краткое описание проекта
                    <Input placeholder='Название'/>
                </Label>

                <Label className='gap-y-2 flex flex-col'>
                    Срок реализации проекта
                    <Input placeholder='Название'/>
                </Label>

                <Label className='gap-y-2 flex flex-col'>
                    Обоснование социальной значимости проекта
                    <Input placeholder='Название'/>
                </Label>

                <Label className='gap-y-2 flex flex-col'>
                    Целевые группы проекта
                    <Input placeholder='Название'/>
                </Label>

                <Label className='gap-y-2 flex flex-col'>
                    Цели и задачи проекта
                    <Input placeholder='Название'/>
                </Label>

                <Label className='gap-y-2 flex flex-col'>
                    Ожидаемые количественные и качественные результаты
                    <Input placeholder='Название'/>
                </Label>

                <Label className='gap-y-2 flex flex-col'>
                    Социальные партнеры проекта-субъекты, которые принимают участие в реализации проекта
                    <Input placeholder='Название'/>
                </Label>

                <Label className='gap-y-2 flex flex-col'>
                    Общая сумма расходов на реализацию проект
                    <Input placeholder='Название'/>
                </Label>

                <Label className='gap-y-2 flex flex-col'>
                    Запрашиваемая сумма гранта
                    <Input placeholder='Название'/>
                </Label>

                <Label className='gap-y-2 flex flex-col'>
                    Бюджет
                    <Input placeholder='Название'/>
                </Label>

                <Label className='gap-y-2 flex flex-col'>
                    Информация о руководителе проекта
                    <Input placeholder='Название'/>
                </Label>

                <Label className='gap-y-2 flex flex-col'>
                    Информация о команде проекта
                    <Input placeholder='Название'/>
                </Label>

                <Label className='gap-y-2 flex flex-col'>
                    Информация об организации
                    <Input placeholder='Название'/>
                </Label>
            </form>
        </Card>
    )
}
