import React from "react";
import Team from "../classes/Team";
import TeamTableRow from "./TeamTableRow";

export enum LeagueTableStyle {
  Condensed,
  Full,
}

type LeagueTableProps = {
  teams: Team[];
  style: LeagueTableStyle;
};

const LeagueTable = async ({ teams, style }: LeagueTableProps) => {
  const isFull = style === LeagueTableStyle.Full;
  return (
    <table className={`${isFull ? "table-md" : "table-xs"} w-full`}>
      <thead className="table-header-group align-middle">
        <tr className="text-xs">
          <th>{isFull ? "Position" : "Pos"}</th>
          <th className="pl-9 text-start">Club</th>
          <th>{isFull ? "Played" : "PL"}</th>
          {isFull && (
            <>
              <th>Won</th>
              <th>Drawn</th>
              <th>Lost</th>
              <th>GF</th>
              <th>GA</th>
            </>
          )}
          <th>GD</th>
          <th>{isFull ? "Points" : "Pts"}</th>
          {isFull && (
            <>
              <th>Form</th>
              {/* <th>More</th> */}
            </>
          )}
        </tr>
      </thead>
      <tbody className="table-row-group align-middle">
        {teams.map((team: Team, index: number) => (
          <TeamTableRow key={index} isFull={isFull} team={team} />
        ))}
      </tbody>
    </table>
  );
};

export default LeagueTable;
