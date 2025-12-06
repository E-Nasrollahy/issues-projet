import { useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";


type selectedValuesType = {
  value: string,
  label: string,
}

type comboboxPropsType={
  value: string | undefined;
  setValue: React.Dispatch<React.SetStateAction<string | undefined>>;
  selectedValues: selectedValuesType[];
}

const ComboboxStyle = ({value, setValue ,selectedValues }:comboboxPropsType) => {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[120px] justify-between"
        >
          {value
            ? selectedValues.find((selectedValue) => selectedValue.value === value)?.label
            : ""}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[120px] p-0">
        <Command>
          <CommandList>
            <CommandGroup>
              {selectedValues.map((selectedValue) => (
                <CommandItem
                  key={selectedValue.value}
                  value={selectedValue.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  {selectedValue.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === selectedValue.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
export default ComboboxStyle;
