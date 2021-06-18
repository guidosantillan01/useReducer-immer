import React from "react";
import Badge from "./Badge";

function Filter({ timeframeFilters = [] }) {
  return timeframeFilters.map((filter, idx) => (
    <Badge key={filter.id + idx}>{filter.value}</Badge>
  ));
}

export default Filter;
