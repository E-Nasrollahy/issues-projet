import ButtonStyle from "@/components/ButtonStyle";
import SectionTitle from "@/components/SectionTitle";


const GetStartSection = () => {
    return <div className="py-20 px-60  bg-black flex justify-center flex-col items-center">
        <SectionTitle title="Get started with Issue Taskbar" description="Start tracking your issues today with our free trial." style ="black"/>
        <div>
            <ButtonStyle path="/sign-up" children="Start tracking issues today" style="wight"/>
        </div>
    </div>;
}
export default GetStartSection;