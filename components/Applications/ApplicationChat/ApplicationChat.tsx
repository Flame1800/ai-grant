"use client";

import * as React from "react";
import { Check, Plus, Send } from "lucide-react";

import { cn } from "@/lib/utils";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";

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
                                Sofia Davis
                            </p>
                            <p className="text-sm text-muted-foreground">
                                m@example.com
                            </p>
                        </div>
                    </div>
                    <TooltipProvider delayDuration={0}>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button
                                    size="icon"
                                    variant="outline"
                                    className="ml-auto rounded-full"
                                    onClick={() => setOpen(true)}
                                >
                                    <Plus className="h-4 w-4" />
                                    <span className="sr-only">New message</span>
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent sideOffset={10}>
                                New message
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
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
                <CardFooter className="self-end mt-[2rem]">
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
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="gap-0 p-0 outline-none">
                    <DialogHeader className="px-4 pb-4 pt-5">
                        <DialogTitle>New message</DialogTitle>
                        <DialogDescription>
                            Invite a user to this thread. This will create a new
                            group message.
                        </DialogDescription>
                    </DialogHeader>
                    <Command className="overflow-hidden rounded-t-none border-t">
                        <CommandInput placeholder="Search user..." />
                        <CommandList>
                            <CommandEmpty>No users found.</CommandEmpty>
                            <CommandGroup className="p-2">
                                {users.map((user) => (
                                    <CommandItem
                                        key={user.email}
                                        className="flex flex-row items-center px-2"
                                        onSelect={() => {
                                            if (selectedUsers.includes(user)) {
                                                return setSelectedUsers(
                                                    selectedUsers.filter(
                                                        (selectedUser) =>
                                                            selectedUser !==
                                                            user,
                                                    ),
                                                );
                                            }

                                            return setSelectedUsers(
                                                [...users].filter((u) =>
                                                    [
                                                        ...selectedUsers,
                                                        user,
                                                    ].includes(u),
                                                ),
                                            );
                                        }}
                                    >
                                        <Avatar>
                                            <AvatarImage
                                                src={user.avatar}
                                                alt="Image"
                                            />
                                            <AvatarFallback>
                                                {user.name[0]}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div className="ml-2">
                                            <p className="text-sm font-medium leading-none">
                                                {user.name}
                                            </p>
                                            <p className="text-sm text-muted-foreground">
                                                {user.email}
                                            </p>
                                        </div>
                                        {selectedUsers.includes(user) ? (
                                            <Check className="ml-auto flex flex-row h-5 w-5 text-primary" />
                                        ) : null}
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                    <DialogFooter className="flex flex-row items-center border-t p-4 sm:justify-between">
                        {selectedUsers.length > 0 ? (
                            <div className="flex flex-row -space-x-2 overflow-hidden">
                                {selectedUsers.map((user) => (
                                    <Avatar
                                        key={user.email}
                                        className="inline-block border-2 border-background"
                                    >
                                        <AvatarImage src={user.avatar} />
                                        <AvatarFallback>
                                            {user.name[0]}
                                        </AvatarFallback>
                                    </Avatar>
                                ))}
                            </div>
                        ) : (
                            <p className="text-sm text-muted-foreground">
                                Select users to add to this thread.
                            </p>
                        )}
                        <Button
                            disabled={selectedUsers.length < 2}
                            onClick={() => {
                                setOpen(false);
                            }}
                        >
                            Continue
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    );
}
