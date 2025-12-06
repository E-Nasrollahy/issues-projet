import Logo from "@/components/Logo";
import { FcLike } from "react-icons/fc";

const Footer = () =>{
    return <div className="p-8 flex flex-col justify-center items-center gap-4">
        <Logo />
        <p className="text-gray-500 text-sm flex text-center gap-2">Built with<FcLike /> for the developer community</p>
    </div>;
}

export default Footer;