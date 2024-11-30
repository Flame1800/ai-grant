import { ContestCard } from "@/components/Сontests/ContestCard/ContestCard";
import {cookies} from "next/headers";
import useSupabaseServer from "@/lib/supabase/server";
import {mockContests} from "@/components/Сontests/mockContests";

export async function ContestsScreen() {
    // const cookieStore = await cookies();
    // const supabase = useSupabaseServer(cookieStore)
    //
    // const { data, error } = await supabase
    //     .from('contests')
    //     .select()
    //
    // console.log(data)

    return (
        <div className="gap-6 screen-w">
            <h2 className="mt-10 scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                Конкурсы
            </h2>
            <div className="gap-8 grid grid-cols-2">
                {mockContests.map((contest) => (
                    <ContestCard key={contest.id} contest={contest} />
                ))}
            </div>
        </div>
    );
}
