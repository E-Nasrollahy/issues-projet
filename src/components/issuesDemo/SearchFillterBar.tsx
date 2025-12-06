import { Search } from "lucide-react";
import { InputGroup, InputGroupAddon, InputGroupInput } from "../ui/input-group";
import ComboboxStyle from "../ComboboxStyle";
import { useLabals, usePriority, useQuery } from "@/Context/FilterContextCreate";

const SearchFillterBar = () => {
  const [,setQuery] = useQuery();
  const [priority,setPriority] = usePriority();
  const [labals,setLabals] = useLabals();

  const changeInputValue = (value : string) =>{
    setQuery(value)
  }

  const priorities = [
    {
      value: "all priority",
      label: "All Priority",
    },
    {
      value: "high",
      label: "High",
    },
    {
      value: "medium",
      label: "Medium",
    },
    {
      value: "low",
      label: "Low",
    },
  ]

  const labalsList = [
    {
      value: "all labels",
      label: "All Labels",
    },
    {
      value: "bug",
      label: "Bug",
    },
    {
      value: "authentication",
      label: "Authentication",
    },
    {
      value: "frontend",
      label: "Frontend",
    },
    {
      value: "performance",
      label: "Performance",
    },
    {
      value: "optimization",
      label: "Optimization",
    },
    {
      value: "ui",
      label: "UI",
    },
    {
      value: "enhancement",
      label: "Enhancement",
    },
    {
      value: "theming",
      label: "Theming",
    },
    {
      value: "notification",
      label: "Notification",
    },
    {
      value: "backend",
      label: "Backend",
    },
    {
      value: "enhabcement",
      label: "Enhabcement",
    },
    {
      value: "accessibility",
      label: "Accessibility",
    },
    {
      value: "ux",
      label: "UX",
    },
  ]

  return (
    <div className="flex justify-start gap-3 mx-15">
      <InputGroup className="bg-gray-200 border-0">
        <InputGroupInput placeholder="Search..." onChange={e => {
          changeInputValue(e.target.value)
        }}/>
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
      </InputGroup>
      <ComboboxStyle value={priority} setValue={setPriority} selectedValues={priorities}/>
      <ComboboxStyle value={labals} setValue={setLabals} selectedValues={labalsList}/>
    </div>
  );
};

export default SearchFillterBar;
