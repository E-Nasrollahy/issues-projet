import { IoBugOutline } from "react-icons/io5";
type logoProps ={
    className ?: string;
}
const Logo = ({className}:logoProps) => {
    return <div className={`flex gap-2 items-center ${className && className}`}>
        <IoBugOutline className="text-2xl" />
        <p>Issue Taskbar</p>
    </div>
}

export default Logo;