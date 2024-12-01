import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { ApplicationFormReview } from "@/components/Applications/ApplicationForm/ApplicationFormReview";
import { CompareApplications } from "@/components/CompareApplications/CompareApplications";
import { routes } from "@/constants/routes";

export function Header() {
    return (
        <div className="sm:flex-row gap-10 mb-5 w-full">
            <div>
                <p className="text-2xl">Ai Grant</p>
            </div>
            <div className="flex flex-row gap-4 items-center">
                <Link href={routes.contests}>
                    <Button variant="ghost">Конкурсы</Button>
                </Link>
                <ApplicationFormReview />
                <CompareApplications />
            </div>
        </div>
    );
}
