import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CiCircleAlert, CiCircleCheck, CiFilter } from "react-icons/ci";
import {useIssuesList, useStatus } from "@/Context/FilterContextCreate";
import type {statusType } from "@/Context/types";

const StatusBar = () => {
  const [, setStatus] = useStatus() as [statusType | undefined, React.Dispatch<React.SetStateAction<statusType | undefined>>];
  const issuesList = useIssuesList();


  const allCount = issuesList.length;
  const openCount = issuesList.filter(item => item.isOpen).length;
  const closedCount = issuesList.filter(item => !item.isOpen).length;

  const handleTabChange = (value: string) => {
    let newItems: statusType = "all";
    if(value === "all"){
      newItems = "all";
    } else if(value === "open"){
      newItems = "open";
    } else if(value === "close"){
      newItems = "close";
    }
    setStatus(newItems);
  };

  return (
    <div className="flex mx-15 my-6  flex-col gap-6">
      <Tabs defaultValue="all" onValueChange={handleTabChange}>
        <TabsList className="bg-gray-200 rounded-3xl p-1 gap-3">
          <TabsTrigger className="rounded-3xl" value="all">
            <CiFilter />
            All ({allCount})
          </TabsTrigger>
          <TabsTrigger className="rounded-3xl" value="open">
            <CiCircleAlert />
            Open ({openCount})
          </TabsTrigger>
          <TabsTrigger className="rounded-3xl" value="close">
            <CiCircleCheck />
            Closed ({closedCount})
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};

export default StatusBar;
