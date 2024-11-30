import { ContestScreen } from "@/components/Screens/ContestScreen";
import useSupabaseServer from "@/lib/supabase/server";
import {cookies} from "next/headers";

export default async function Contest({ params }) {
    const {id} = await params

    const cookieStore = await cookies();
    const supabase = useSupabaseServer(cookieStore)

    const { data: applications, error: applicationsError } = await supabase
        .from('applications')
        .select('*').eq('contest_id', id)

    const { data: contest, error: contestError } = await supabase
        .from('contests')
        .select('*').eq('contest_id', id).single()

    if (!contest && !applications) return 'loading...'

    return <ContestScreen applications={applications} contest={contest} />;
}
