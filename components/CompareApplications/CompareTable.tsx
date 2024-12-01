'use client';

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {useEffect, useState} from "react";
import {Application} from "@/types";
import useSupabaseBrowser from "@/lib/supabase/client";
import {getCompareAppIds} from "@/lib/compareStorage";

const getCriteriaValue = (application: Application, index: number) => {
    let criteria;
    if (application.gpt_analysis) {
        criteria = JSON.parse(application.gpt_analysis).sort((a, b) => a.weight - b.weight);
    } else {
        criteria = JSON.parse(application.llama_analysis);
    }
    return criteria[index] || 'нет данных';
}

export const CompareTable = () => {
    const [applications, setApplications] = useState<Application[] | null>(null);
    const supabase = useSupabaseBrowser();

    useEffect(() => {
        const applicationsIds = getCompareAppIds()
        const fetchData = async () => {
            const { data: application, error } = await supabase
                .from("applications")
                .select("*, contest:contests(*)")
                .in("id", applicationsIds)
            if (error) {
                console.error('ApplicationReview fetch error', error);
            } else {
                setApplications(application);
            }
        };

        fetchData();
    }, [supabase]);

    const firstItem = applications ? applications[0] : null
    let criteriaLength = 0;
    if (firstItem && firstItem.gpt_analysis) {
        criteriaLength = JSON.parse(firstItem.gpt_analysis).length;
    } else if (firstItem && firstItem.llama_analysis) {
        criteriaLength = JSON.parse(firstItem.llama_analysis).length;
    }

    console.log(criteriaLength, firstItem)

 return (
     <Table>
         <TableHeader>
             <TableRow>
                 <TableHead>Критерии</TableHead>
                 {applications && applications.map((application) => (
                     <TableHead key={application.id}>{application.title}</TableHead>
                 ))}
             </TableRow>
         </TableHeader>
         {!applications && <p>Нет заявок для сравнения</p>}
         <TableBody>
             {new Array(criteriaLength).fill('').map((_, index) => (
                 <TableRow key={index}>
                     <TableCell className="font-medium">{applications && getCriteriaValue(applications[1], index).criterion_name}</TableCell>
                     {applications && applications.map((application) => {
                         const item = getCriteriaValue(application, index)

                         return (<TableCell className="font-medium">
                             {item.criterion_name ? <div>
                                 вес {item.weight}
                                 <br />
                                 оценка {item.score}
                             </div> : 'нет данных'}
                         </TableCell>)
                     })}
                 </TableRow>
             ))}
         </TableBody>
     </Table>
 )
}