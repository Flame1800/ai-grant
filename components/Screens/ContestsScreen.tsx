import { ContestCard } from "@/components/Сontests/ContestCard/ContestCard";
import {cookies} from "next/headers";
import useSupabaseServer from "@/lib/supabase/server";
import {Button} from "@/components/ui/button";
import {ArrowLeftIcon} from "lucide-react";
import Link from "next/link";
import {routes} from "@/constants/routes";

export async function ContestsScreen() {
    const cookieStore = await cookies();
    const supabase = useSupabaseServer(cookieStore)

    const { data, error } = await supabase
        .from('contests')
        .select()

    return (
        <div className="gap-6 screen-w">
            <div className='flex-row'>
                <h2 className="mt-10 scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                    Конкурсы
                </h2>
            </div>

            <div className="gap-8 grid grid-cols-2">
                {data && data.map((contest) => (
                    <ContestCard key={contest.id} contest={contest} />
                ))}
            </div>
        </div>
    );
}
