type SectionTitleProps = {
    title: string;
    description: string;
    style?: "white" | "black";
}

const SectionTitle = ({ title, description , style = "white" }: SectionTitleProps ) => {
    
    return <>
        <div className="flex flex-col justify-center items-center gap-4 mb-4">
            <h4 className={`text-3xl font-bold ${style === "white" ? "text-black" : "text-white"}`}>{title}</h4>
            <p className={`text-center ${style === "white" ? "text-gray-500" : "text-white"}`}>{description}</p>
        </div>
    </>;
}
export default SectionTitle;