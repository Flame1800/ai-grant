'use client';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle, DialogTrigger
} from "@/components/ui/dialog";
import {Badge} from "@/components/ui/badge";
import React from "react";
import {ApplicationInput} from "@/components/Applications/ApplicationForm/ApplicationInput";

const criteria = [
    'Название проекта, на реализацию которого запрашивается грант',
    'Краткое описание проекта',
    'Срок реализации проекта',
    'Обоснование социальной значимости проекта',
    'Целевые группы проекта',
    'Цели и задачи проекта',
    'Социальные партнеры проекта-субъекты, которые принимают участие в реализации проекта',
    'Общая сумма расходов на реализацию проект',
    'Запрашиваемая сумма гранта',
    'Информация о руководителе проекта',
    'Информация о команде проекта',
    'Информация об организации'
]

export const ApplicationFormReview = () => {
    return (
        <Dialog>
            <DialogTrigger>
                <div>
                    <div className='inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0'>
                        Анализ заявки
                    </div>
                </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px] max-h-[80vh] overflow-scroll">
                <DialogHeader>
                    <Badge color='bg-green-600' className='w-fit'>AI анализ</Badge>
                    <DialogTitle>Рекомандации по созданию заявки</DialogTitle>
                    <DialogDescription>
                        Впишите в текст в поля и восользуйтесь рекомендациями искуственного интелекта
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className='max-w-[400px] gap-y-4 flex flex-col'>
                        {criteria.map((criteria) => <ApplicationInput key={criteria} title={criteria} />)}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}