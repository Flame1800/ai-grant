import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { routes } from "@/constants/routes";

export default function Home() {
    return (
        <div className="w-full h-[681px] bg-[#F1F1F1] rounded-[28px] relative overflow-hidden">
            <Image
                src="/mainPage-bg/oneWave.svg"
                width={206}
                height={207}
                alt="bg"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
            <Image
                src="/mainPage-bg/twoWave.svg"
                width={472}
                height={497}
                alt="bg"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
            <Image
                src="/mainPage-bg/threeWave.svg"
                width={860}
                height={900}
                alt="bg"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
            <Image
                src="/mainPage-bg/fourWave.svg"
                width={1076}
                height={1130}
                alt="bg"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
            <div className="left-[15%] top-[-6%] absolute max-w-[189px] w-full">
                <div className="max-w-[189px] w-full h-[168px] bg-[#EDFF8E] flex rounded-[28px] z-10">
                    <div className="h-full flex justify-between ml-[20px]">
                        <h1 className="font-medium text-base leading-5 mt-[20px]">
                            Значение <br />
                            проекта
                        </h1>
                        <div className="mb-[14px] w-full flex-row items-center justify-between">
                            <p className="text-[40px] font-medium">50</p>
                            <div className="justify-center items-center w-[58px] h-[22px] bg-black bg-opacity-[0.1] rounded-full mt-[10px] mr-[19px]">
                                <p className="text-[12px] font-light">баллов</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-[#CABCF8] max-w-[185px] w-full h-[48px] rounded-full justify-center items-center flex-row ml-[-86px] mt-[-20px]">
                    <span className="font-medium text-base">20,65</span>
                    <span className="ml-[8px] text-[14px] text-[#404040]">
                        Всего баллов
                    </span>
                </div>
            </div>
            <div className="absolute max-w-[189px] w-full left-[77%] mt-[52px]">
                <Image
                    width={119}
                    height={68}
                    src="/mainPage-bg/ugra-flag.svg"
                    className="mb-[-20px] ml-[-50px]"
                    alt="bg"
                />
                <div className="max-w-[189px] w-full h-[156px] bg-[#A4FEB7] flex rounded-[28px] z-10">
                    <div className="h-full flex justify-between ml-[20px]">
                        <div className="w-full flex-row items-center justify-between">
                            <h1 className="font-medium text-base leading-5 mt-[20px]">
                                Значение <br />
                                проекта
                            </h1>
                            <Image
                                width={20}
                                height={20}
                                src="/mainPage-bg/star-icon.svg"
                                className="mr-[25px]"
                                alt="bg"
                            />
                        </div>
                        <div className="mb-[14px] w-full flex-row items-center justify-between">
                            <p className="text-[40px] font-medium">4,8</p>
                            <div className="justify-center items-center w-[58px] h-[22px] bg-black bg-opacity-[0.1] rounded-full mt-[10px] mr-[19px]">
                                <p className="text-[12px] font-light">балла</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute max-w-[196px] w-full mt-[40%] ml-[-25px]">
                <div className="max-w-[196px] w-full h-[184px] bg-[#EDFF8E] flex rounded-[28px] z-10">
                    <div className="h-full flex justify-between ml-[20px]">
                        <div className="w-full flex-row items-center justify-between">
                            <h1 className="font-medium text-base leading-5 mt-[20px]">
                                Вероятность <br />
                                победы
                            </h1>
                            <Image
                                width={20}
                                height={20}
                                src="/mainPage-bg/star-icon.svg"
                                className="mr-[25px]"
                                alt="bg"
                            />
                        </div>
                        <Image
                            width={154}
                            height={77}
                            src="/mainPage-bg/chart.svg"
                            className="mb-[21px]"
                            alt="bg"
                        />
                    </div>
                </div>
                <div className="max-w-[167px] w-full h-[127px] bg-white rounded-[20px] ml-[70%] mt-[-60px]">
                    <h1 className="font-medium text-base leading-5 ml-[16px] mt-[16px]">
                        Уникальность <br />
                        победы
                    </h1>
                    <div className="mb-[14px] w-full flex-row items-center justify-between mt-[10px]">
                        <p className="text-[28px] font-medium ml-[16px]">50</p>
                        <div className="justify-center items-center w-[58px] h-[22px] bg-black bg-opacity-[0.1] rounded-full mt-[6px] mr-[19px]">
                            <p className="text-[12px] font-light">баллов</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute max-w-[196px] w-full mt-[40%] ml-[-25px]">
                <div className="max-w-[196px] w-full h-[184px] bg-[#EDFF8E] flex rounded-[20px] z-10">
                    <div className="h-full flex justify-between ml-[20px]">
                        <div className="w-full flex-row items-center justify-between">
                            <h1 className="font-medium text-base leading-5 mt-[20px]">
                                Вероятность <br />
                                победы
                            </h1>
                            <Image
                                width={20}
                                height={20}
                                src="/mainPage-bg/star-icon.svg"
                                className="mr-[25px]"
                                alt="bg"
                            />
                        </div>
                        <Image
                            width={154}
                            height={77}
                            src="/mainPage-bg/chart.svg"
                            className="mb-[21px]"
                            alt="bg"
                        />
                    </div>
                </div>
                <div className="max-w-[167px] w-full h-[127px] bg-white rounded-[20px] ml-[70%] mt-[-60px]">
                    <h1 className="font-medium text-base leading-5 ml-[16px] mt-[16px]">
                        Уникальность <br />
                        победы
                    </h1>
                    <div className="mb-[14px] w-full flex-row items-center justify-between mt-[10px]">
                        <p className="text-[28px] font-medium ml-[16px]">20</p>
                        <div className="justify-center items-center w-[58px] h-[22px] bg-black bg-opacity-[0.1] rounded-full mt-[6px] mr-[19px]">
                            <p className="text-[12px] font-light">баллов</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute max-w-[170px] w-full ml-[71%] mt-[38%]">
                <div className="max-w-[170px] w-full h-[112px] bg-[#CABCF8] flex rounded-[20px] z-10">
                    <div className="h-full flex justify-between ml-[18px]">
                        <div>
                            <Image
                                width={18}
                                height={18}
                                src="/mainPage-bg/four-start.svg"
                                className="mt-[16px]"
                                alt="bg"
                            />
                            <h1 className="font-medium leading-6 text-[24px] mt-[14px]">
                                20,5
                            </h1>
                            <p className="font-light text-[14px] leading-5 text-[#676767]">
                                Всего баллов
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-white max-w-[302px] w-full h-full rounded-[20px]">
                    <h1>Вероятность победы</h1>
                    <p>Сгенерированно AI</p>
                </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center z-50">
                <h2 className="text-4xl font-medium w-full max-w-[616px] text-center whitespace-nowrap overflow-hidden">
                    Проанализируйте любую заявку к <br />
                    конкурсу с помощью модели AI
                </h2>
                <Link href={routes.contests} className="mt-[18px]">
                    <Button className="text-base font-medium " size="homePage">
                        Приступить
                    </Button>
                </Link>
            </div>
        </div>
    );
}
