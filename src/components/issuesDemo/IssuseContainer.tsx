import { useIssues } from "@/Context/FilterContextCreate";
import IssuseCard from "./IssuseCard";
import type { issuse } from "@/Context/types";


const IssuseContainer = () =>{
    const [filteredItems] = useIssues()
    return <div className="mx-15">
    {filteredItems.map((item : issuse )=>{
        return <IssuseCard {...item}/>
    })}
    </div>
}
export default IssuseContainer ;