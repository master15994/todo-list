import { useState } from "react";

const useFilters = () => {
  const [filters, setFilters] = useState({ text: "", status: "all" });

  const handleChangeSearchText = (text) =>
    setFilters((prev) => ({ ...prev, text }));

  const handleChangeFilterStatus = (status) =>
    setFilters((prev) => ({ ...prev, status }));

  const filterTasks = (tasks) =>
    tasks.filter(
      (task) =>
        task.title
          .replace(" ", "")
          .toLowerCase()
          .includes(filters.text.replace(" ", "").toLowerCase()) &&
        (task.status === filters.status || filters.status === "all")
    );

  return {
    filters,
    filterTasks,
    onChangeFilters: setFilters,
    onChangeFilterText: handleChangeSearchText,
    onChangeFilterStatus: handleChangeFilterStatus,
  };
};

export default useFilters;
