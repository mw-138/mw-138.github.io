import React from "react";
import Team from "../classes/Team";
import { FaCircle, FaChevronDown } from "react-icons/fa";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
import Image from "next/image";
import LeagueTableLastFiveResult from "./LeagueTableLastFiveResult";

type TeamTableRowProps = {
  isFull: boolean;
  team: Team;
};

const TeamTableRow = ({ isFull, team }: TeamTableRowProps) => {
  const getBorderColor = () => {
    if (!isFull) {
      return "border-gray-200";
    }
    const index = team.getCurrentPosition() - 1;
    if (index === 0 || index === 3 || index === 4) {
      return "border-premier-league-blue";
    } else if (index === 16) {
      return "border-premier-league-pink";
    }
    return "border-gray-200";
  };

  const getPositionChangeIcon = () => {
    const current = team.getCurrentPosition();
    const previous = team.getPreviousPosition();

    const didMoveUp = current > previous;
    const didMoveDown = current < previous;

    const iconSize = 5;

    if (didMoveUp) {
      return <TiArrowSortedUp className="text-green-500" size={iconSize * 2} />;
    } else if (didMoveDown) {
      return <TiArrowSortedDown className="text-red-500" size={iconSize * 2} />;
    }

    return <FaCircle className="text-gray-300" size={iconSize} />;
  };

  return (
    <>
      <tr
        className={`border-b ${getBorderColor()} text-center last:border-none`}
      >
        <td>
          <span className="flex flex-row items-center justify-center gap-2">
            {team.getCurrentPosition()}
            {getPositionChangeIcon()}
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
        <td className="font-black">{team.getPoints()}</td>
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
    </>
  );
};

export default TeamTableRow;
