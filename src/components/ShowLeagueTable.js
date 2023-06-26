import React, { useState } from "react";
import MainTableWrapper from "./MainTableWrapper";

function ShowLeagueTable() {
  const [league, setLeague] = useState("lck");
  const leagues = ["lck", "lpl"];
  return (
    <div>
      <div style={{marginBottom: "30px"}}>
        <label>Select a League: {"  "}</label>
        <select
          style={{width: "50px"}}
          value={league}
          onChange={(event) => setLeague(event.target.value)}
        >
          {leagues.map((mapLeague) => (
            <option key={mapLeague} value={mapLeague} >
              {mapLeague}
            </option>
          ))}
        </select>
      </div>
      <MainTableWrapper league={league}/>
    </div>
  );
}

export default ShowLeagueTable;
