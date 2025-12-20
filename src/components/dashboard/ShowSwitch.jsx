import { useState } from "react";
import { Switch } from "../ui/switch";

const ShowSwitch = () => {
  const [filters, setFilters] = useState({});
  const [anotherFilters, setAnotherFilters] = useState({});

  return (
    <div className="flex items-center gap-2 lg:gap-4 ">
      <div className="flex gap-1 lg:gap-2 items-center">
        <label
          htmlFor="number"
          className="text-lavender dark:text-violet text-sm lg:text-base text-right"
        >
          Show Less
        </label>
        <Switch
          name="delivered"
          className="data-[state=checked]:bg-alienated"
          checked={filters.delivered}
          onCheckedChange={(val) => setFilters({ ...filters, delivered: val })}
        />
      </div>
      <div className="flex gap-1 lg:gap-2 items-center">
        <label
          htmlFor="number"
          className="text-lavender dark:text-violet text-sm lg:text-base text-right"
        >
          Show Excess
        </label>
        <Switch
          name="delivered"
          className="data-[state=checked]:bg-scarlet"
          checked={anotherFilters.delivered}
          onCheckedChange={(val) =>
            setAnotherFilters({ ...filters, delivered: val })
          }
        />
      </div>
    </div>
  );
};

export default ShowSwitch;
