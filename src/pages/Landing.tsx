import FeacherContainer from "@/components/landing/FeacherContainer";
import HeaderLanding  from "@/components/landing/HeaderLanding";
import HeroSection from "@/components/landing/HeroSection";
import CommentSection from "../components/landing/CommentSection";
import GetStartSection from "@/components/landing/GetStartSection";
import  Footer  from "@/components/landing/FooterLanding";

const Landing = () => {
    return <>
        <HeaderLanding />
        <HeroSection />
        <FeacherContainer />
        <CommentSection />
        <GetStartSection />
        <Footer />
    </>;
}
 
export default Landing;