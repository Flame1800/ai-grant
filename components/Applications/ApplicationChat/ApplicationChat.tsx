"use client";

import * as React from "react";
import { Send } from "lucide-react";

import { cn } from "@/lib/utils";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";


const users = [
    {
        name: "Olivia Martin",
        email: "m@example.com",
        avatar: "/avatars/01.png",
    },
    {
        name: "Isabella Nguyen",
        email: "isabella.nguyen@email.com",
        avatar: "/avatars/03.png",
    },
    {
        name: "Emma Wilson",
        email: "emma@example.com",
        avatar: "/avatars/05.png",
    },
    {
        name: "Jackson Lee",
        email: "lee@example.com",
        avatar: "/avatars/02.png",
    },
    {
        name: "William Kim",
        email: "will@email.com",
        avatar: "/avatars/04.png",
    },
] as const;

type User = (typeof users)[number];

export function ApplicationChat() {
    const [open, setOpen] = React.useState(false);
    const [selectedUsers, setSelectedUsers] = React.useState<User[]>([]);

    const [messages, setMessages] = React.useState([
        {
            role: "agent",
            content: "Здравствуйте, с чем я могу вам помочь?",
        },
        {
            role: "user",
            content: "Расскажи в каких номинациях может выиграть этот проект?",
        },
        {
            role: "agent",
            content: "В номинациях 'Лучший проект' и 'Лучшая презентация'",
        },
        {
            role: "user",
            content: "Сомневаюсь, но спасибо!",
        },
    ]);
    const [input, setInput] = React.useState("");
    const inputLength = input.trim().length;

    return (
        <>
            <Card className="bg-gray-200 min-h-full max-h-full flex max-w-[330px]">
                <CardHeader className="flex flex-row items-center">
                    <div className="flex flex-row items-center space-x-4">
                        <Avatar>
                            <AvatarImage src="/avatars/01.png" alt="Image" />
                            <AvatarFallback>OM</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="text-sm font-medium leading-none">
                                ИИ Помощник
                            </p>
                            <p className="text-sm text-muted-foreground">
                                Создан помогать
                            </p>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4 overflow-scroll max-h-[310px]">
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                className={cn(
                                    "flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm",
                                    message.role === "user"
                                        ? "ml-auto bg-primary text-primary-foreground"
                                        : "bg-muted",
                                )}
                            >
                                {message.content}
                            </div>
                        ))}
                    </div>
                </CardContent>
                <CardFooter className="self-end">
                    <form
                        onSubmit={(event) => {
                            event.preventDefault();
                            if (inputLength === 0) return;
                            setMessages([
                                ...messages,
                                {
                                    role: "user",
                                    content: input,
                                },
                            ]);
                            setInput("");
                        }}
                        className="flex flex-row w-full items-center space-x-2"
                    >
                        <Input
                            id="message"
                            placeholder="Введите сообщение..."
                            className="flex-1"
                            autoComplete="off"
                            value={input}
                            onChange={(event) => setInput(event.target.value)}
                        />
                        <Button
                            type="submit"
                            size="icon"
                            disabled={inputLength === 0}
                        >
                            <Send className="h-4 w-4" />
                            <span className="sr-only">Send</span>
                        </Button>
                    </form>
                </CardFooter>
            </Card>
        </>
    );
}
