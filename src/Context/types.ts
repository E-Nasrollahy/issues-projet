export interface FilterContextType {
  List: issuse[];
  filteredItems: issuse[];
  setFilteredItems: React.Dispatch<React.SetStateAction<issuse[]>>;
  query: string | undefined;
  setQuery: React.Dispatch<React.SetStateAction<string | undefined>>;
  priority: string | undefined;
  setPriority: React.Dispatch<React.SetStateAction<string | undefined>>;
  labals: string | undefined;
  setLabals: React.Dispatch<React.SetStateAction<string | undefined>>;
  status: statusType | undefined;
  setStatus: React.Dispatch<React.SetStateAction<statusType | undefined>>;
}

export interface issuse {
  title: string;
  description: string;
  isOpen: boolean;
  labels: string[];
  priority: priorityType;
  commentCount: number;
  time: string;
}

export type priorityType = "high" | "medium" | "low";
export type statusType = "all" | "open" | "close";