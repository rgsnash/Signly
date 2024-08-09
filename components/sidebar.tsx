import { cn } from "@/lib/utils"; //for tailwind merges to others without any conflict
import  Link  from "next/link";
import Image from "next/image";
import { SidebarItem } from "./sidebar-item";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";

type Props = {
    className?: string;
};

export const Sidebar = ({className}: Props) => {
    return(
    <div className={cn(
            "flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col",
            className,
        )}>
        <Link href="/learn">
        <div className="pt-4 pb-2 flex items-center gap-x-1">
                <Image src="/logobar.png" height={150} width={200} alt="landing"/> 
        </div>
        </Link>
        <div className="flex flex-col gap-y-2 flex-1">
            <SidebarItem 
                label="Learn" 
                href="/learn" 
                iconSrc="/home.svg"
            />
            <SidebarItem 
                label="Leaderboard" 
                href="/leaderboard" 
                iconSrc="/leaderboard.svg"
            />
            <SidebarItem 
                label="Quest" 
                href="/quest" 
                iconSrc="/quest.svg"
            />
            <SidebarItem 
                label="Refill" 
                href="/refill" 
                iconSrc="/refill.svg"
            />
        </div>
        <div className="p-4">
            <ClerkLoading>
                <Loader className="h-5 w-5 text-muted-foreground animate-spin"/>
            </ClerkLoading>
            <ClerkLoaded>
                <UserButton afterSignOutUrl="/" />
            </ClerkLoaded>
        </div>
    </div>
    );
};