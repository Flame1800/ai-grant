import Link from "next/link";
import { routes } from "@/constants/routes";
import { Button } from "@/components/ui/button";

const links = [
    {
        title: "Конкурсы",
        link: routes.contests,
    },
    {
        title: "Анализ заявки",
        link: routes.applicationReview,
    },
];

export function Header() {
    return (
        <div className="sm:flex-row gap-10 mb-5 w-full">
            <div>
                <p className="text-2xl">AnaLizyr</p>
            </div>
            <nav className="flex gap-4 items-center">
                {links.map((link) => (
                    <Link key={link.link} href={link.link}>
                        <Button variant="ghost">{link.title}</Button>
                    </Link>
                ))}
            </nav>
        </div>
    );
}
