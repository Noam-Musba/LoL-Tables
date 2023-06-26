const numericSort = (rowA, rowB, columnId) => {
  const valueA = rowA.original[columnId];
  const valueB = rowB.original[columnId];
  if (valueA === valueB) return 0;
  else return valueA < valueB ? -1 : 1;
};

const streakInCell = (value) => {
  let ret = "";
  ret += Math.abs(value);
  ret += value > 0 ? "W" : "L";
  return ret;
}

export const COLUMNS = [
  {
    Header: "",
    accessor: "standing",
  },
  {
    Header: "Team",
    accessor: "team",
  },
  {
    Header: "Number of Games",
    accessor: "#games",
  },
  {
    Header: "Wins",
    accessor: "wins",
  },
  {
    Header: "Losses",
    accessor: "losses",
  },
  {
    Header: "Points",
    accessor: "points",
    sortType: (rowA, rowB, columnId) => numericSort(rowA, rowB, columnId),
  },
  {
    Header: "Mini-Games Won",
    accessor: "minigames_won",
  },
  {
    Header: "Mini-Games Lost",
    accessor: "minigames_lost",
  },
  {
    Header: "Streak",
    accessor: "streak",
    sortType: (rowA, rowB, columnId) => numericSort(rowA, rowB, columnId),
    Cell: ({value}) => streakInCell(value),
  },
];
