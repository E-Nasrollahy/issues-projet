import { Avatar , AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { FcOk } from "react-icons/fc";
import { FcHighPriority } from "react-icons/fc";


const CommentCard = () => {

    return <div className="border rounded-lg">
        <div className="flex justify-between p-4 border-b">
            <div className="flex items-center gap-2">
            <FcOk />
            <p>fixed login redirect bug</p>
            </div>
            <Badge className="bg-gray-300 text-black">bug</Badge>
        </div>
        <div className="p-4 flex flex-col gap-4">
            <div className="flex gap-3">
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png"></AvatarImage>
                </Avatar>
                <div className="flex flex-col">
                    <div className="flex gap-2 items-center">
                    <p>John Doe</p>
                    <p className="text-gray-500 text-xs">2 days ago</p>
                    </div>
                    <p className="truncate w-80">This should be fixed now . The redirect was happening because of a bug in the code.</p>
                </div>
            </div>
            <div className="flex gap-2 items-center">
                <FcHighPriority />
                <p className="text-gray-500 text-xs flex items-center gap-2">
                    status changed from
                    <Badge className="bg-white border border-gray-300 text-black">open</Badge> 
                    to
                    <Badge className="bg-gray-300 text-black">closed</Badge>
                </p>
            </div>
        </div>
    </div>
}
export default CommentCard;