import Footer from "@/app/components/Footer";
import WebsiteNavigation from "@/app/components/WebsiteNavigation";
import React from "react";
import Navbar from "./components/Navbar";
import ProjectWipBanner from "@/app/components/ProjectWipBanner";
import { FixtureSim, AlphabeticalTeams, GameWeeks } from "./teams";
import LeagueTable, { LeagueTableStyle } from "./components/LeagueTable";
import Image from "next/image";

const page = () => {
  return (
    <>
      <ProjectWipBanner />
      <main className="font-['Roboto'] selection:bg-premier-league-purple selection:text-white">
        <Navbar teams={AlphabeticalTeams} />
        <div className="flex flex-row gap-4 bg-white p-4 text-premier-league-purple">
          <div className="w-1/6 bg-white text-premier-league-purple">
            <div className="overflow-hidden rounded-lg border-2 border-premier-league-purple">
              <div className="bg-premier-league-purple p-2 text-center font-bold text-white">
                Premier League
              </div>
              <LeagueTable
                teams={FixtureSim.teams}
                style={LeagueTableStyle.Condensed}
              />
            </div>
          </div>
          <div className="flex w-5/6 flex-col gap-2">
            <LeagueTable
              teams={FixtureSim.teams}
              style={LeagueTableStyle.Full}
            />
            {GameWeeks.map((gameweek, index) => (
              <div key={index} className="flex flex-col gap-2">
                <h1 className="font-bold uppercase">GameWeek {gameweek.num}</h1>
                {gameweek.fixtures.map((fixture, fixtureIndex) => (
                  <div
                    key={fixtureIndex}
                    className="flex items-center justify-center gap-2 rounded border border-gray-300 bg-gray-200 px-4 py-2 text-premier-league-purple"
                  >
                    <div className="flex flex-1 flex-row items-center justify-end gap-1">
                      <span>{fixture.homeTeam.abbreviation}</span>
                      <Image
                        src={fixture.homeTeam.image}
                        width={28}
                        height={28}
                        alt=""
                        className="aspect-square"
                      />
                    </div>
                    {fixture.hasBeenPlayed ? (
                      <div className="w-24 rounded bg-premier-league-purple px-2 py-1 text-center text-white">
                        {fixture.homeScore} - {fixture.awayScore}
                      </div>
                    ) : (
                      <div className="w-24 rounded bg-premier-league-purple px-2 py-1 text-center text-white">
                        vs
                      </div>
                    )}
                    <div className="flex flex-1 flex-row items-center justify-start gap-1">
                      <Image
                        src={fixture.awayTeam.image}
                        width={28}
                        height={28}
                        alt=""
                        className="aspect-square"
                      />
                      <span>{fixture.awayTeam.abbreviation}</span>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </main>
      <WebsiteNavigation />
      <Footer />
    </>
  );
};

export default page;
