import { Sidebar } from "../../components/sidebar";
import { MobileHeader } from "../../components/mobile-header";

type Props = {
    children: React.ReactNode;
};

const MainLayout = ({
    children,
}: Props ) => {
    return(
        <>
        <MobileHeader />
        <Sidebar className="hidden lg:flex" /> {/*to hid to mobile devices and only appears in website*/}
        <main className="lg:pl-[256px] h-full pt-[50px] lg:pt-0"> {/* "lg:pt-0" is to padded top in website view*/}
            <div className="max-w-[1056px] mx-auto h-full">
                 {children}
            </div>
        </main>
        </>
    )
}

export default MainLayout;