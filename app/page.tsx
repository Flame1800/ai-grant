import { Button } from "@/components/ui/button"
import Link from "next/link";
import {routes} from "@/constants/routes";

export default function Home() {
  return (
      <div className="w-[600px] items-center mx-auto gap-4 mt-10">
          <h2 className="mt-10 scroll-m-20 text-center text-3xl font-semibold tracking-tight transition-colors first:mt-0">
              Проанализируйте любую заявку к конкурсу с помощью модели AI
          </h2>
          <Link href={routes.contests} >
              <Button>
                  Приступить
              </Button>
          </Link>
      </div>
  );
}
