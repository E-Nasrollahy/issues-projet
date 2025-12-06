import { createContext, useContext } from "react";
import type { FilterContextType, issuse } from "./types";

export const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const useIssusListContext = () => useContext(FilterContext);
export const useQuery = () : [string | undefined , React.Dispatch<React.SetStateAction<string | undefined>>] => {
    const { query, setQuery } = useIssusListContext() as FilterContextType;
    return [query, setQuery];
};
export const useLabals = (): [string | undefined , React.Dispatch<React.SetStateAction<string | undefined>>] => {
    const { labals, setLabals } = useIssusListContext() as FilterContextType;
    return  [labals, setLabals] ;
};
export const useStatus = () => {
    const { status, setStatus } = useIssusListContext() as FilterContextType;
    return [status, setStatus];
};
export const usePriority = () : [string | undefined , React.Dispatch<React.SetStateAction<string | undefined>>] => {
    const { priority, setPriority } = useIssusListContext() as FilterContextType;
    return [priority, setPriority];
};
export const useIssues = (): [issuse[], React.Dispatch<React.SetStateAction<issuse[]>>] => {
    const {filteredItems, setFilteredItems} = useIssusListContext() as FilterContextType;
    return [filteredItems, setFilteredItems];
};
export const useIssuesList = (): issuse[] => {
    const {List} = useIssusListContext() as FilterContextType;
    return List;
};







