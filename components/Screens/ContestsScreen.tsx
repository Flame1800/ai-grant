import {mockContests} from "@/components/Сontests/mockContests";
import {ContestCard} from "@/components/Сontests/ContestCard/ContestCard";

export const ContestsScreen = () => {
    return <div className='gap-6'>
        <h2 className="mt-10 scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            Конкурсы
        </h2>
        <div className='gap-8'>
            {mockContests.map(contest => {
                return <ContestCard key={contest.id} contest={contest}/>
            })}
        </div>
    </div>
}