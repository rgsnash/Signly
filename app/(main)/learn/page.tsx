import { StickyWrapper } from "@/components/sticky-wrapper";
import { FeedWrapper } from "@/components/feed-wrapper";
import { Header } from "./header";
import { UserProgress } from "@/components/user-progress";
const LearnPage = () => {
    return (
        <div className="flex flex-row-reverse gap-[48px] px-6"> {/*flex-row-reverse if encounter issuesin css between feedwrapper and stickywrapper*/}
            
            <StickyWrapper>
                <UserProgress
                    activeCourse={{title: "Easy", imageSrc: "/easy.svg"}}
                    hearts={5}
                    points={100}
                    hasActiveSubscription={false}
                />
            </StickyWrapper>
            <FeedWrapper>
                <Header title="Easy"/>
            </FeedWrapper>
        </div>
    )
}

export default LearnPage;