// import { useQuery } from "@tanstack/react-query"
// import axios from "axios"

import { issueList } from "./issueList";

export default function useFeach() {
    // return useQuery({
    //     queryKey: ["getIssues"],
    //     queryFn: async () => {
    //         const res = await axios.get("http://localhost:3002/issueList");
    //         return res.data;
    //     },
    // });
    return issueList
};