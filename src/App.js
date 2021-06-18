import React from "react";

import Badge from "./Badge";
import useStore from "./store/useStore";

function Filter() {
  const timeframeFilters = useStore((state) => state.filters.timeframeFilters);

  return timeframeFilters.map((filter, idx) => (
    <Badge key={filter.id + idx}>{filter.value}</Badge>
  ));
}

export default function App() {
  const popFilter = useStore((state) => state.popFilter);
  const pushFilter = useStore((state) => state.pushFilter);

  const handleClickImmer = () =>
    pushFilter(
      {
        id: "tf- 3",
        value: "2012 - 2013",
        filter: ["2012", "2013"]
      },
      {
        id: "tf- 3",
        value: "2015 - 2015",
        filter: ["2015", "2015"]
      }
    );

  const removeFilter = () => popFilter();

  return (
    <div className="main">
      <button onClick={handleClickImmer}>push filter</button>
      <button onClick={removeFilter}>pop filter</button>
      <div className="code">
        <div className="code-container">
          <Filter />
        </div>
      </div>
    </div>
  );
}
