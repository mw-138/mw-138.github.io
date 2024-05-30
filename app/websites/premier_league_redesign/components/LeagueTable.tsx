import React from "react";
import Team from "../classes/Team";
import Image from "next/image";
// import { FaChevronDown } from "react-icons/fa";
import Fixture, { FixtureResult } from "../classes/Fixture";
import { FaCircle } from "react-icons/fa";

export enum LeagueTableStyle {
  Condensed,
  Full,
}

const LeagueTableLastFiveResult = ({
  team,
  fixture,
}: {
  team: Team;
  fixture: Fixture;
}) => {
  const result = fixture.getTeamResult(team);

  const bgColor = () => {
    switch (result) {
      case FixtureResult.Win:
        return "bg-premier-league-green";
      case FixtureResult.Loss:
        return "bg-premier-league-pink";
      default:
        return "bg-gray-400";
    }
  };

  return (
    <div
      className={`relative h-8 w-8 rounded-full ${bgColor()} group cursor-help p-2 text-center font-bold text-white`}
    >
      {result}
      <div className="absolute bottom-full right-full z-50 hidden w-max items-center justify-center gap-2 rounded border border-gray-300 bg-gray-200 px-4 py-2 text-premier-league-purple group-hover:flex">
        <span className="flex flex-row items-center justify-center gap-1">
          {fixture.homeTeam.abbreviation}
          <Image
            src={fixture.homeTeam.image}
            width={28}
            height={28}
            alt=""
            className="aspect-square"
          />
        </span>
        <span className="rounded bg-premier-league-purple px-2 py-1 text-white">
          {fixture.homeScore} - {fixture.awayScore}
        </span>
        <span className="flex flex-row items-center justify-center gap-1">
          <Image
            src={fixture.awayTeam.image}
            width={28}
            height={28}
            alt=""
            className="aspect-square"
          />
          {fixture.awayTeam.abbreviation}
        </span>
      </div>
    </div>
  );
};

type LeagueTableProps = {
  teams: Team[];
  style: LeagueTableStyle;
};

const LeagueTable = ({ teams, style }: LeagueTableProps) => {
  const isFull = style === LeagueTableStyle.Full;

  const getBorderColor = (index: number) => {
    if (!isFull) {
      return "border-gray-200";
    }
    if (index === 0 || index === 3 || index === 4) {
      return "border-premier-league-blue";
    } else if (index === 16) {
      return "border-premier-league-pink";
    }
    return "border-gray-200";
  };

  return (
    <table className="table-xs w-full">
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
          <tr
            key={index}
            className={`border-b ${getBorderColor(index)} text-center last:border-none`}
          >
            <td>
              <span className="flex flex-row items-center justify-center gap-2">
                {index + 1} <FaCircle className="text-gray-300" size={5} />
              </span>
            </td>
            <td>
              <span className="flex flex-row items-center gap-2 font-bold">
                <Image
                  src={team.image}
                  width={28}
                  height={28}
                  alt=""
                  className="aspect-square"
                />
                {isFull ? team.name : team.shortName}
              </span>
            </td>
            <td>{team.gamesPlayed}</td>
            {isFull && (
              <>
                <td>{team.gamesWon}</td>
                <td>{team.gamesDrawn}</td>
                <td>{team.gamesLost}</td>
                <td>{team.goalsFor}</td>
                <td>{team.goalsAgainst}</td>
              </>
            )}
            <td>{team.getGoalDifference()}</td>
            <td className="font-bold">{team.getPoints()}</td>
            {isFull && (
              <>
                <td className="flex flex-row items-center justify-center gap-2">
                  {team.getFinalFiveFixtures().map((fixture, index) => (
                    <LeagueTableLastFiveResult
                      key={index}
                      team={team}
                      fixture={fixture}
                    />
                  ))}
                </td>
                {/* <td>
                <div className="flex items-center justify-center">
                  <FaChevronDown />
                </div>
              </td> */}
              </>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default LeagueTable;
