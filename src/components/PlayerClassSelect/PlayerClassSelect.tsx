import { PlayerClassSelectProps as Props } from "./PlayerClassSelect.types";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger } from "@/components/ui/select";
import { SelectValue } from "@/components/ui/select";
import { CONSTANTS } from "@/config/constants";
import { useGlobalsStore } from "@/stores/globals/globals.store";

const { PLAYER_CLASSES } = CONSTANTS;

const PlayerClassSelect = (props: Props) => {
  const { className } = props;
  const selectedPlayerClass = useGlobalsStore(state => state.selectedPlayerClass);
  const setSelectedPlayerClass = useGlobalsStore(state => state.setSelectedPlayerClass);

  return (
    <Select value={selectedPlayerClass?.type} onValueChange={setSelectedPlayerClass}>
      <SelectTrigger className="w-40" size="sm">
        <SelectValue placeholder="Select a class" />
      </SelectTrigger>
      <SelectContent className={className}>
        <SelectGroup>
          <SelectLabel>Player Class</SelectLabel>
          {PLAYER_CLASSES.map((playerClass, index) => {
            const { type } = playerClass;

            return (
              <SelectItem key={index} value={type}>
                {type}
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default PlayerClassSelect;
