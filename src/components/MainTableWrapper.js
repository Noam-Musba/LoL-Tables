import React, { useEffect, useState } from "react";
import LckMainTable from "./LckMainTable";

function MainTableWrapper({ league }) {
  const [dataA, setDataA] = useState([]);

  useEffect(() => {
    let promise;
    switch (league) {
      case "lck":
        promise = import("./LCK_TABLE_DATA.json");

        break;
      case "lpl":
        promise = import("./LPL_TABLE_DATA.json");
      default:
        break;
    }
    promise
      .then((module) => {
        const tmp = module.default;
        setDataA(tmp);
      })
      .catch(() => {
        console.log("couldnt import");
      });
  }, [league]);

  return <LckMainTable data={dataA} />;
}

export default MainTableWrapper;
