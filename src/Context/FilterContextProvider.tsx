import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import type { issuse, statusType } from "./types";
import { FilterContext } from "./FilterContextCreate";

interface FilterProviderProps {
  children: ReactNode;
  List: issuse[];
}

export function FilterProvider({ children, List }: FilterProviderProps) {
  const [filteredItems, setFilteredItems] = useState(List);
  const [query, setQuery] = useState();
  const [priority, setPriority] = useState("all priority");
  const [labals, setLabals] = useState("all labels");
  const [status, setStatus] = useState("all" as statusType);

  useEffect(() => {
    if (status === "all") {
      setFilteredItems(List);
    } else if (status === "open") {
      setFilteredItems(List.filter((item) => item.isOpen));
    } else if (status === "close")
      setFilteredItems(List.filter((item) => !item.isOpen));
  }, [status]);
  useEffect(() => {
    if (priority === "all priority") {
      setFilteredItems(List);
    } else {
      const filteredItem = List.filter((item) => item.priority === priority);
      setFilteredItems(filteredItem);
    }
  }, [priority]);
  useEffect(() => {
    if (query) {
      const filteredIssues = List.filter((item) => item.title.includes(query));
      setFilteredItems(filteredIssues);
    }
  }, [query]);
  useEffect(() => {
    if (labals === "all labels") {
      setFilteredItems(List);
    } else {
      const filteredItem = List.filter((item) => item.labels.includes(labals));
      setFilteredItems(filteredItem);
    }
  }, [labals]);

  return (
    <FilterContext.Provider
      value={{
        List,
        filteredItems,
        setFilteredItems: setFilteredItems as React.Dispatch<
          React.SetStateAction<issuse[]>
        >,
        query,
        setQuery: setQuery as React.Dispatch<
          React.SetStateAction<string | undefined>
        >,
        priority,
        setPriority: setPriority as React.Dispatch<
          React.SetStateAction<string | undefined>
        >,
        labals,
        setLabals: setLabals as React.Dispatch<
          React.SetStateAction<string | undefined>
        >,
        status,
        setStatus: setStatus as React.Dispatch<
          React.SetStateAction<statusType | undefined>
        >,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
