import { Badge } from "@/components/ui/badge";
import { CiChat1, CiCircleAlert, CiCircleCheck } from "react-icons/ci";
import type { issuse } from "@/Context/types";

const IssuseCard = ({
  title,
  description,
  isOpen,
  labels,
  commentCount,
  time,
}: issuse) => {
  return (
    <>
      <div className="flex rounded-lg border p-4 flex-col justify-center gap-2 my-1">
        <div className="flex justify-between items-center">
          <p className="capitalize">{title}</p>
          {isOpen ? (
            <CiCircleAlert className="text-xl text-emerald-600" />
          ) : (
            <CiCircleCheck className="text-xl text-indigo-600" />
          )}
        </div>
        <p className="text-gray-500 text-xs">{description}</p>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3 py-2">
            {labels.map((label) => {
              return <Badge className="">{label}</Badge>;
            })}
          </div>
          <div className="flex items-center gap-2 text-gray-500">
            {commentCount !== 0 && (
              <div className="flex items-center gap-1 text-gray-500">
                <CiChat1 />
                <span className="text-xs">{commentCount}</span>
              </div>
            )}
            <p className="text-xs" >{time}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default IssuseCard;
