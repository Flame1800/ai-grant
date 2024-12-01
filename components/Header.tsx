import {routes} from "@/constants/routes";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import React from "react";
import {ApplicationFormReview} from "@/components/Applications/ApplicationForm/ApplicationFormReview";
import {CompareApplications} from "@/components/CompareApplications/CompareApplications";

export const Header = () => {
    return (
        <div className='sm:flex-row gap-10 mb-5'>
            <div>
                <p className='text-2xl'>Ai Grant</p>
            </div>
            <div className='flex flex-row gap-4 items-center'>
                <Link href={routes.contests} >
                    <Button variant='ghost'>
                        Конкурсы
                    </Button>
                </Link>
                <ApplicationFormReview />
                <CompareApplications />
            </div>
        </div>
    )
}