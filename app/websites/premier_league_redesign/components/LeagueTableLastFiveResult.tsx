import React from "react";
import Fixture, { FixtureResult } from "../classes/Fixture";
import Team from "../classes/Team";
import Image from "next/image";

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

export default LeagueTableLastFiveResult;
