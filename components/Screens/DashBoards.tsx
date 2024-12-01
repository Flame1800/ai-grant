import React from "react";
import Image from "next/image";
import FrameMotionCard from "../EntityCard/FrameMotionCard";

function DashBoards() {
    return (
        <div className="">
            <div className="max-w-[454px] w-full h-[591px] bg-[#f1f1f1] rounded-[28px]">
                <FrameMotionCard />
            </div>
            <div className="">
                <div className="">
                    <div className="bg-[#EDFF8E] rounded-[28px] max-w-[304px] w-full h-[293px] ">
                        <div className="flex-row w-full justify-between">
                            <h1 className="leading-5 text-[20px] font-medium mt-[22px] ml-[22px]">
                                Выданное <br /> количество денег
                            </h1>
                            <Image
                                width={20}
                                height={20}
                                src="/mainPage-bg/four-start.svg"
                                className="mt-[31px] mr-[31px]"
                                alt="bg"
                            />
                        </div>
                        <span className="font-medium text-[48px] ml-[22px]">
                            20М
                        </span>
                        <div className="flex-row items-end gap-[6px] ml-[22px]">
                            <div className="h-[90px] w-[40px] bg-black bg-opacity-50 rounded-[8px]" />
                            <div className="h-[37px] w-[40px] bg-black bg-opacity-50 rounded-[8px]" />
                            <div className="h-[96px] w-[40px] bg-black bg-opacity-50 rounded-[8px]" />
                            <div className="h-[139px] w-[40px] bg-black rounded-[8px]" />
                            <div className="h-[77px] w-[40px] bg-black bg-opacity-50 rounded-[8px]" />
                            <div className="h-[37px] w-[40px] bg-black bg-opacity-50 rounded-[8px]" />
                        </div>
                    </div>
                    <div className="bg-[#CABCF8] rounded-[28px] max-w-[304px] w-full h-[293px]">
                        <div className="flex-row w-full justify-between items-start">
                            <h1 className="leading-5 text-[20px] font-medium mt-[22px] ml-[22px]">
                                Общее количество
                                <br /> конкурсов
                            </h1>
                            <Image
                                width={20}
                                height={20}
                                src="/mainPage-bg/star-icon.svg"
                                className="mt-[31px] mr-[31px]"
                                alt="bg"
                            />
                        </div>
                        <span className="font-medium text-[48px] ml-[22px]">
                            450
                        </span>
                        <div className="flex-row gap-[6px] items-end w-full justify-center">
                            <div>
                                <div className="bg-black w-[50px] h-[45px] bg-opacity-[0.15]" />
                                <div className="bg-black w-[50px] h-[45px] bg-opacity-[0.08]" />
                            </div>
                            <div>
                                <div className="bg-black w-[50px] h-[45px] bg-opacity-[0.08]" />
                            </div>
                            <div>
                                <div className="bg-black w-[50px] h-[45px] bg-opacity-[0.25]" />
                                <div className="bg-black w-[50px] h-[45px] bg-opacity-[0.15]" />
                                <div className="bg-black w-[50px] h-[45px] bg-opacity-[0.08]" />
                            </div>
                            <div>
                                <div className="bg-black w-[50px] h-[45px] bg-opacity-[0.15]" />
                                <div className="bg-black w-[50px] h-[45px] bg-opacity-[0.08]" />
                            </div>
                            <div>
                                <div className="bg-black w-[50px] h-[45px] bg-opacity-[0.08]" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-[#A4FEB7] max-w-[624px] w-full h-[278px] rounded-[28px] overflow-hidden">
                    <h1 className="leading-5 text-[20px] font-medium mt-[22px] ml-[22px]">
                        Проанализированные
                        <br /> заявки AI
                    </h1>
                    <span className="font-medium text-[48px] ml-[22px]">
                        52К
                    </span>
                    <div className="flex-row items-end mt-[-100px]">
                        <div>
                            <div className="bg-black w-[71px] h-[13px] " />
                            <div className="bg-[#A4FEB7] border-[#888888] border-[0.5px] w-[71px] h-[71px]" />
                        </div>
                        <div>
                            <div className="bg-black w-[71px] h-[13px] " />
                            <div className="bg-[#A4FEB7] border-[#888888] border-[0.5px] w-[71px] h-[71px]" />
                            <div className="bg-[#A4FEB7] border-[#888888] border-[0.5px] w-[71px] h-[71px]" />
                        </div>
                        <div>
                            <div className="bg-black w-[71px] h-[13px] " />
                            <div className="bg-[#A4FEB7] border-[#888888] border-[0.5px] w-[71px] h-[71px]" />
                        </div>
                        <div>
                            <div className="bg-black w-[71px] h-[13px] " />
                            <div className="bg-[#A4FEB7] border-[#888888] border-[0.5px] w-[71px] h-[71px]" />
                            <div className="bg-[#A4FEB7] border-[#888888] border-[0.5px] w-[71px] h-[71px]" />
                        </div>
                        <div>
                            <div className="bg-black w-[71px] h-[13px] " />
                            <div className="bg-[#A4FEB7] border-[#888888] border-[0.5px] w-[71px] h-[71px]" />
                        </div>
                        <div>
                            <div className="bg-black w-[71px] h-[13px] " />
                            <div className="bg-[#A4FEB7] border-[#888888] border-[0.5px] w-[71px] h-[71px]" />
                            <div className="bg-[#A4FEB7] border-[#888888] border-[0.5px] w-[71px] h-[71px]" />
                            <div className="bg-[#A4FEB7] border-[#888888] border-[0.5px] w-[71px] h-[71px]" />
                        </div>
                        <div>
                            <div className="bg-black w-[71px] h-[13px]" />
                            <div className="bg-[#A4FEB7] border-[#888888] border-[0.5px] w-[71px] h-[71px]" />
                            <div className="bg-[#A4FEB7] border-[#888888] border-[0.5px] w-[71px] h-[71px]" />
                        </div>
                        <div>
                            <div className="bg-black w-[71px] h-[13px]" />
                            <div className="bg-[#A4FEB7] border-[#888888] border-[0.5px] w-[71px] h-[71px]" />
                            <div className="bg-[#A4FEB7] border-[#888888] border-[0.5px] w-[71px] h-[71px]" />
                            <div className="bg-[#A4FEB7] border-[#888888] border-[0.5px] w-[71px] h-[71px]" />
                        </div>
                        <div>
                            <div className="bg-black w-[71px] h-[13px]" />
                            <div className="bg-[#A4FEB7] border-[#888888] border-[0.5px] w-[71px] h-[71px]" />
                            <div className="bg-[#A4FEB7] border-[#888888] border-[0.5px] w-[71px] h-[71px]" />
                            <div className="bg-[#A4FEB7] border-[#888888] border-[0.5px] w-[71px] h-[71px]" />
                            <div className="bg-[#A4FEB7] border-[#888888] border-[0.5px] w-[71px] h-[71px]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashBoards;
