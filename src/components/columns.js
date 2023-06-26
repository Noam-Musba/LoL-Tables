const handleTeamClicked = (value) => {
  let url = "https://lolesports.com/teams/";
  switch (value) {
    case "Gen.G":
      url += "geng";
      break;
    case "T1":
      url += "t1";
      break;
    case "Dplus Kia":
      url += "dwg-kia";
      break;
    case "kt Rolster":
      url += "kt-rolster";
      break;
    case "Hanwha Life Esports":
      url += "hanwha-life-esports";
      break;
    case "Kwangdong Freecs":
      url += "kwangdong-freecs";
      break;
    case "Liiv SANDBOX":
      url += "liiv-sandbox";
      break;
    case "NongShim REDFORCE":
      url += "nongshim-redforce";
      break;
    case "OKSavingsBank BRION":
      url += "fredit-brion";
      break;
    case "DRX":
      url += "drx";
      break;
    default:
      break;
  }
  window.open(url, "_blank");
};

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
};

export const COLUMNS = [
  {
    Header: "",
    accessor: "standing",
  },
  {
    Header: "Team",
    accessor: "team",
    Cell: ({ value }) => (
      <span
        style={{ cursor: "pointer", color: "blue" }}
        onClick={() => handleTeamClicked(value)}
      >
        {value}
      </span>
    ),
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
    Cell: ({ value }) => streakInCell(value),
  },
];
